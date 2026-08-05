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

// INTRODUCTION — a short abstract for the top of the page. Write it in your
// own voice; leave '' to show a placeholder. One or more paragraphs.
// The whole hidden setting is treating a non-human world model version of me, also ironic in that we can view humans like machines. 
// Written by The Industry, encoding my unrealistic standards. Might include a graph of benchmarks.
// In a non-ironic non-vulnerable version, this would just be displaying my achievements and marketing myself. Perhaps hide it under some toggle to a dark mode of what currently is.
// Or, it's a Limitations
// But for a first version I wanna project curious
export const intro: string[] = ["Over-meta-analysis has emerged in running Hera, as a consequence of self-improvement behaviour. We record results obtained by interpretability techniques, alongside model outputs, to attempt inferring the model's intent and internals involved in thinking loops, and provide suggestions for external feedback or collaboration to break them."
];

// J-SPACE — what's active right now. Ideas, half-thoughts, X posts.
// Link an entry to a blog post if you've written it up.
export const jspace: Entry[] = [
  { text: 'MusicGen', href: '/blog/musicgen', kind: 'note' },
  { text: 'How to make this website less Anthropic-coded', href: 'https://fontjoy.com/', kind: 'note' },
  { text: 'damn coding AI-free is calming', href: 'https://x.com/hijackedbyhera/status/2083681215060606977?s=20', external: true, kind: 'x' },
  { text: 'visualised', href: '/demos/latent-space', kind: 'demo' },
  { text: 'Gradual disempowerment', href: 'https://gradual-disempowerment.ai/', },
  { text: 'Am I good enough' },
  { text: 'Natural Language Autoencoders seem like an obvious thing to do' },
  { text: 'Do I still apply to quant dev internships when I want to apply to SPAR projects' },
  { text: 'Code random things' },
];

// CHAIN OF THOUGHT SAMPLES — rendered as DeepSeek-R1-style "Listings": a mono
// code block with a caption. Put your verbalized reasoning in `body`; wrap the
// internal reasoning in <think>...</think> and it renders greyed.
//   • caption -> shown as "Listing N | {caption}"
//   • body    -> multi-line string, shown verbatim in mono (use backticks)
// (Your old note "WARNING: MIGHT BE VULNERABLE" is parked here — re-add it as a
//  caption or a listing whenever you like.)
export type CoTSample = { caption: string; body: string };

export const chainOfThought: CoTSample[] = [
  // Example (from the DeepSeek-R1 paper) — replace with your own reasoning samples.
 
  { caption: 'Task: ML4Good application form', body: `## Question
    What are your thoughts on the risks and benefits of AI? 
## Response
    <think> 
  The benefit of AI is the alternative perspective it can offer to understand concepts in its own trained way and try things and patterns humans normally don't. The proof it discovered, however, the fact that this creates human-like capabilities invites assumptions about how they work and an incorrect understanding of its capabilities and limitations causes inaccurate answers and it is used or treated as reliable.  
  
Another risk from not understanding its limitations fully is the increased dependence on AI. Given it is so widely accessible nowadays, it becomes easier to outsource decision-making and it becomes hard to tell where the human is required
It's a difficult problem - to decide where illegibility of a good answer is appropriate determines the risk/benefit ratio. (transcribed by Wispr Flow)
</think> 
I am very much sold on the idea of collaboration instead of competition. What I liked most about AI is that it can interpret things in ways that humans naturally do not, so a lot of unstructured data that an AI can do with the way it represents and learns abstract concepts from raw data.

A lot of risks in safety and accuracy stem from misuse, due to misunderstanding. It will continue to be useful to have a different perspective, but it's the same thing that causes misunderstanding. The similarity in capabilities to human intelligence invites intuitive assumptions of how they work and think, and expectations of what they can do, less so their limitations. Using them incorrectly is where the risk is. Inaccurate answers because it is being used with wrong assumptions. This in turn creates a bad impression of it to outweigh the benefits. So the risk is the harm done by wrong answers being treated as reliable, no matter the level of capability. 
` },
  { caption: 'Anxiety circuit', body: `...
    <think>
    ... If I don't get an internship then I'm screwed...
    </think>
    ...` },
];

// TRAINING DATA — what shaped you. Courses taken, things you're learning now.
export const trainingData: Entry[] = [
  { text: 'CS221M: Mech interp course by Stanford' },
  { text: 'ARENA: AI safety training' },
  { text: 'Karpathy Zero to Hero: micrograd and makemore' },
  { text: 'UCL CS: Theory of Computation, Algorithms, OOP with Java, ...' },
  { text: 'Distilling Claude' },
];

// OBJECTIVE FUNCTIONS — what my goals are
// `note` is great for a reframe/quote (e.g. your "batching vs perfectionism" one).
export const objectives: Entry[] = [
  { text: 'Do good', note: '' },
  // { text: 'Execution', note: 'I cannot train on that much data, I am real, the world is real. So we will accept stochastic gradient descent.' },
];

// RESEARCH LOG — recent findings about yourself, one line each. Newest first.
export const researchLog: Entry[] = [
  { text: 'Output-layer filter is overfiring on social contexts', date: '02/08/26' },
  { text: "Was inspecting another model's benchmark results, not helpful for my own development.", date: '02/08/26' },
];
