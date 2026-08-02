// =============================================================================
// THE CONTENT OF YOUR LANDING "INFERENCE" — author this, it's all yours.
//
// Every section is just a list of entries. Rules:
//   • Leave text: '' to render a blank ruled line (a slot to fill in later).
//   • href starting with '/' is an internal link (e.g. '/blog/my-post').
//   • external: true opens in a new tab (use for X posts, GitHub, etc.).
//   • Delete the placeholder entries below and write your own.
// =============================================================================

export type Entry = {
  text: string;          // main line ('' -> blank slot to fill in)
  note?: string;         // optional second line: an annotation, quote, or aside
  href?: string;         // '/blog/slug', '/demos/...', or an external URL
  external?: boolean;    // open in a new tab
  kind?: 'note' | 'demo' | 'x'; // small marker shown on the card
  tag?: string;          // e.g. 'ML', 'engineering'
  date?: string;         // used by the research log, e.g. '2026-08-02'
};

// J-SPACE — what's active right now. Ideas, half-thoughts, X posts.
// Link an entry to a blog post if you've written it up.
export const jspace: Entry[] = [
  { text: '', href: '', kind: 'note', tag: '' },
  { text: 'damn coding AI-free is calming', href: 'https://x.com/hijackedbyhera/status/2083681215060606977?s=20', external: true, kind: 'x' },
  { text: 'visualised', href: '/demos/latent-space', kind: 'demo' },
  { text: 'Gradual disempowerment' },
  { text: 'Am I good enough' },
  { text: 'Natural Language Autoencoders seem so obvious' },
];

// CHAIN OF THOUGHT SAMPLES — the reasoning you'd actually verbalize out loud.
// Contrast with J-space above: a model's internal activations don't always
// match its stated chain of thought (see footnote [1] on the page).
export const chainOfThought: Entry[] = [
  { text: '' },
  { text: '' },
];

// TRAINING DATA — what shaped you. Courses taken, things you're learning now.
export const trainingData: Entry[] = [
  { text: 'CS221M', note: 'Mech interp course by Stanford' },
  { text: 'UCL CS', note: '' },
  { text: 'Distilling Claude' },
];

// OBJECTIVE FUNCTIONS — what my goals are
// `note` is great for a reframe/quote (e.g. your "batching vs perfectionism" one).
export const objectives: Entry[] = [
  { text: 'Do good', note: '' },
  { text: 'Execution', note: 'I cannot train on that much data, I am real, the world is real. So we will accept stochastic gradient descent.' },
];

// RESEARCH LOG — recent findings about yourself, one line each. Newest first.
export const researchLog: Entry[] = [
  { text: 'Output-layer filter is overfiring on ', date: '02/08/26' },
  { text: "Was inspecting another model's output", date: '02/08/26' },
];
