"""GUI: publish a raw draft from src/content/blog/writing into the blog, then commit and push."""
import datetime
import re
import shutil
import subprocess
import tkinter as tk
import webbrowser
from pathlib import Path
from tkinter import messagebox, ttk

ROOT = Path(__file__).resolve().parent
BLOG = ROOT / "src" / "content" / "blog"
WRITING = BLOG / "writing"
PUBLISHED = WRITING / "published"
TEMPLATE = BLOG / "_template.md"
SITE_URL = "https://github.com/herabytes/personal-website"

FM_RE = re.compile(r"\A---\r?\n(.*?)\r?\n---\r?\n?", re.S)
FIELD_RE = re.compile(r"^([A-Za-z_]\w*):\s*(.*?)(\s+#.*)?$")


def split_frontmatter(text):
    m = FM_RE.match(text)
    return (m.group(1), text[m.end():]) if m else ("", text)


def parse_fields(fm):
    out = {}
    for line in fm.splitlines():
        m = FIELD_RE.match(line)
        if m and not line.lstrip().startswith("#"):
            out[m.group(1)] = m.group(2)
    return out


def unquote(value):
    """Turn a frontmatter value into plain text for the entry box."""
    value = value.strip()
    if value.startswith("[") and value.endswith("]"):
        return ", ".join(s.strip().strip("'\"") for s in value[1:-1].split(",") if s.strip())
    if len(value) >= 2 and value[0] == value[-1] and value[0] in "'\"":
        return value[1:-1].replace("''", "'")
    return value


def format_value(raw, template_default):
    """Format plain text to match the shape of the template's value (string, list or bare)."""
    raw = raw.strip()
    if template_default.startswith("["):
        items = [s.strip() for s in raw.split(",") if s.strip()]
        return "[" + ", ".join("'" + s.replace("'", "''") + "'" for s in items) + "]"
    if template_default[:1] in "'\"":
        return "'" + raw.replace("'", "''") + "'"
    return raw


def build_post(template, values, body):
    """Copy the template, regex-swap each field's line for the given value, append the body."""
    fm, _ = split_frontmatter(template)
    defaults = parse_fields(fm)
    # Drop the template's instruction comments first.
    fm = "\n".join(l for l in fm.splitlines() if not l.lstrip().startswith("#"))
    for key, raw in values.items():
        value = format_value(raw, defaults[key])
        fm = re.sub(rf"^{key}:.*$", lambda _m: f"{key}: {value}", fm, flags=re.M)
    return "---\n" + fm + "\n---\n\n" + body.lstrip("\r\n")


def git(*args):
    subprocess.run(["git", *args], cwd=ROOT, check=True)


class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Publish blog post")
        self.geometry("720x560")
        self.template = TEMPLATE.read_text(encoding="utf-8")
        tpl_fm, _ = split_frontmatter(self.template)
        self.vars = {}
        self.body = ""

        top = ttk.Frame(self, padding=10)
        top.pack(fill="x")
        ttk.Label(top, text="Draft").pack(side="left")
        self.draft_var = tk.StringVar()
        drafts = sorted(p.name for p in WRITING.glob("*.md"))
        self.combo = ttk.Combobox(top, textvariable=self.draft_var, values=drafts, state="readonly", width=40)
        self.combo.pack(side="left", padx=8)
        self.combo.bind("<<ComboboxSelected>>", lambda e: self.load_draft())

        grid = ttk.Frame(self, padding=10)
        grid.pack(fill="x")
        grid.columnconfigure(1, weight=1)
        hints = {"date": "YYYY-MM-DD", "tags": "comma separated", "draft": "true / false"}
        for i, key in enumerate(parse_fields(tpl_fm)):
            ttk.Label(grid, text=key).grid(row=i, column=0, sticky="w", pady=3)
            var = tk.StringVar()
            ttk.Entry(grid, textvariable=var).grid(row=i, column=1, sticky="ew", padx=8)
            ttk.Label(grid, text=hints.get(key, ""), foreground="gray").grid(row=i, column=2, sticky="w")
            self.vars[key] = var

        ttk.Label(self, text="Body preview", padding=(10, 8, 10, 0)).pack(anchor="w")
        self.preview = tk.Text(self, height=12, wrap="word")
        self.preview.pack(fill="both", expand=True, padx=10)
        self.preview.config(state="disabled")

        ttk.Button(self, text="Publish (commit + push)", command=self.publish).pack(pady=10)

        if drafts:
            self.combo.current(0)
            self.load_draft()
        else:
            messagebox.showinfo("No drafts", f"No .md files in {WRITING}")

    def load_draft(self):
        text = (WRITING / self.draft_var.get()).read_text(encoding="utf-8")
        fm, self.body = split_frontmatter(text)
        existing = parse_fields(fm)
        for key, var in self.vars.items():
            if key in existing:
                var.set(unquote(existing[key]))
            elif key == "date":
                var.set(str(datetime.date.today()))
            elif key == "draft":
                var.set("false")
            else:
                var.set("")
        self.preview.config(state="normal")
        self.preview.delete("1.0", "end")
        self.preview.insert("1.0", self.body)
        self.preview.config(state="disabled")

    def publish(self):
        name = self.draft_var.get()
        if not name:
            return
        draft, target = WRITING / name, BLOG / name
        if target.exists() and not messagebox.askyesno("Overwrite?", f"{name} already exists in blog. Overwrite?"):
            return
        values = {k: v.get() for k, v in self.vars.items()}
        target.write_text(build_post(self.template, values, self.body), encoding="utf-8", newline="\n")
        PUBLISHED.mkdir(exist_ok=True)
        shutil.move(str(draft), str(PUBLISHED / name))
        try:
            git("add", "-A")
            git("commit", "-m", f"Blog: {name}")
            git("push")
        except subprocess.CalledProcessError as e:
            messagebox.showerror("Git failed", str(e))
            return
        webbrowser.open(SITE_URL)
        messagebox.showinfo("Done", f"Published {name}")
        self.destroy()


if __name__ == "__main__":
    App().mainloop()
