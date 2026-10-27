// All site content lives here. Edit this file to update text, links and project status.

export const site = {
  name: 'Vinod Anbalagan',
  role: 'ML engineer · independent researcher · Toronto',
  headline: 'ML Engineer & Independent Researcher · World Models, Robot Learning & Representation Learning',
  identity:
    'I study what models actually learn, and what they need to remember. Right now: world models that plan for robots, and the leanest memory that keeps them reliable.',
  description:
    'Vinod Anbalagan: ML engineer and independent researcher working on world models, robot learning, representation learning and evaluation.',
  email: 'vinodanbalagan@gmail.com',
  openTo:
    'Open to research engineer, research assistant, and research internship opportunities, as well as funded MS/PhD positions, in world models, embodied AI and robot learning, representation learning, multimodal AI, and scientific ML.',
};

export const links = {
  linkedin: 'https://www.linkedin.com/in/vinod-anbalagan/',
  github: 'https://github.com/VinodAnbalagan',
  huggingface: 'https://huggingface.co/vinod-anbalagan',
  substack: 'https://vinodanbalagan.substack.com',
};

// arXiv preprint for CulturalRiddles. Fill both in once the listing is live; links appear automatically.
export const riddles = {
  blog: 'https://cohere.com/research/papers/culturalriddles-2026-10-22',
  dashboard: 'https://huggingface.co/spaces/CohereLabsCommunity/CulturalRiddles',
  dashboardEmbed: 'https://coherelabscommunity-culturalriddles.static.hf.space/index.html',
  dataset: 'https://huggingface.co/datasets/CohereLabsCommunity/CulturalRiddles',
  quiz: 'https://culturalriddles.ai/',
};

export const arxiv = {
  id: '2610.29968',// e.g. '2610.12345'
  url: 'https://arxiv.org/abs/2610.29968',// e.g. 'https://arxiv.org/abs/2610.12345'
};

export type Status = 'planned' | 'next' | 'building' | 'shipped';

// The current research project. Rename it here and the Lab, home and research pages follow.
export const project = {
  name: 'Keepsake',
  question: 'What should a robot remember?',
  paperTitle: 'What Should a Robot Remember? Surprise as a Guide to Lean Memory in Real-Time World-Model Planning',
  anchor: '/research#keepsake',
};

export interface LabProject {
  n: string;
  title: string;
  question: string;
  ladder?: string;
  theme: string;
  status: Status;
  href?: string; // set once the article exists, e.g. '/lab/01-the-baseline'
}

// Section 1: the six steps that make up the Keepsake paper, in order.
export const paperLab: LabProject[] = [
  { n: '01', title: 'The Baseline', theme: 'Foundations', status: 'building',
    question: 'Reproduce LeWorldModel, a small JEPA world model that plans from pixels, on one of its tasks. Measure success rate and planning time per decision on my own hardware, so every later number has a reference point.',
    ladder: 'planning horizon 5 → 10 → 20 steps' },
  { n: '02', title: 'The Surprise Audit', theme: 'Surprise', status: 'next',
    question: "Before building any memory: log the world model's own prediction error on a disappearing-cue task and a moved-object task, and compare it with hand-labelled moments that matter. Does surprise still fire for the cue once the model has learned when cues appear? How often does it flag what matters, and how often what does not?",
    ladder: 'event type: outside change → self-caused progress → irrelevant distractor' },
  { n: '03', title: 'Tasks That Need Memory', theme: 'Environment', status: 'planned',
    question: 'Variants of standard planning tasks where the current frame cannot tell you what to do next: a goal cue that disappears, and an object moved mid-task. Does the memoryless planner fail and the oracle succeed, as they should?',
    ladder: 'cue-to-decision delay short → medium → long' },
  { n: '04', title: 'Remembering Everything', theme: 'Memory', status: 'planned',
    question: 'The expensive answers: stack recent frames, give the predictor a recurrent state, or keep every past state and attend over all of it, plus an oracle handed the true task state. These set the ceiling and the price.',
    ladder: 'history length 4 → 16 → full episode' },
  { n: '05', title: 'The Surprise Gate', theme: 'Selection', status: 'planned',
    question: 'Two claims, tested separately. Does a small, fixed memory recover most of what full history gives, at lower cost, whatever decides what is written? And does writing on surprise beat writing at fixed intervals or at random, with the same number of slots?',
    ladder: 'memory slots 4 → 8 → 16' },
  { n: '06', title: 'The Price of Memory', theme: 'Speed', status: 'planned',
    question: 'Success rate against planning time per decision, for every memory variant, over several seeds. Where does each kind of memory sit on the trade-off between reliability and speed?',
    ladder: 'memory none → compact → recurrent → full history' },
];

// Section 2: experiments that come after the paper.
export const afterLab: { title: string; note?: string }[] = [
  { title: 'On a Real Arm', note: 'The same planner and memory on a low-cost arm with a camera' },
  { title: 'Another Body', note: 'The same memory, unchanged, on a simulated drone' },
  { title: 'Lessons Across Episodes', note: 'Distilled experience in a compact graph, recalled only when surprised' },
  { title: 'Fast Typed Heads', note: 'Small heads that answer one question each, like "is this subtask done?", in a single pass' },
  { title: 'Memory in the World', note: 'Can an agent learn to leave itself traces in the scene?' },
  { title: 'Many Bodies', note: 'A leader steering followers through a learned world model' },
];

export const labPrinciples = [
  ['One question', 'Isolate a single mechanism and ask when it appears or breaks.'],
  ['A scaling ladder', 'Three or four points along one axis: does the effect hold, grow, or vanish?'],
  ['Honest limits', 'Every write-up ends with what would still need testing at scale.'],
  ['Runs in your browser', 'Trained in Python, exported, and run live on this page. No server, no waiting.'],
];

export interface Essay {
  title: string;
  dek: string;
  date: string;
  href: string;
  group: 'Research blogs' | 'Learning & world models' | 'Data & evaluation' | 'Perspectives';
  byline?: string;
}

const S = links.substack + '/p/';

export const writing: Essay[] = [
  { title: 'CulturalRiddles: Where Models Fall Short', dek: 'Original riddles from 62 cultures, and what 28 language models get wrong about them: regional gaps, made-up answers, and a pull toward the familiar.', date: '2026-10-22', href: 'https://cohere.com/research/papers/culturalriddles-2026-10-22', group: 'Research blogs', byline: 'Cohere Labs research blog · co-written with Tianyi Hu, Madeline Smith and Julia Kreutzer' },
  { title: 'The Architecture of Dreams, Part 3: Does Looking Right Mean Understanding?', dek: 'Genie, V-JEPA 2, and Physics-IQ.', date: '2026-10-11', href: S + 'the-architecture-of-dreams-part-3', group: 'Learning & world models' },
  { title: 'The Architecture of Dreams, Part 2: What Should a World Model Predict?', dek: 'MuZero, DreamerV3, TD-MPC2.', date: '2026-09-28', href: S + 'the-architecture-of-dreams-part-2', group: 'Learning & world models' },
  { title: 'Freezing the Noise', dek: 'How one line of algebra made sampling differentiable.', date: '2026-09-18', href: S + 'freezing-the-noise', group: 'Learning & world models' },
  { title: 'The Architecture of Dreams, Part 1: How Neural Networks Learned to Imagine', dek: 'World Models, PlaNet, Dreamer.', date: '2026-09-14', href: S + 'the-architecture-of-dreams-how-neural', group: 'Learning & world models' },
  { title: 'Finding the Manifold', dek: 'Where neural networks land: the geometry of optimisation, with a live demo.', date: '2026-01-06', href: S + 'finding-the-manifold-where-neural', group: 'Learning & world models' },
  { title: 'On Building Offline AI for People Who Actually Need It', dek: 'What 9,000 evaluation pairs taught us about multilingual retrieval.', date: '2026-04-01', href: S + 'on-building-offline-ai-for-people', group: 'Data & evaluation' },
  { title: 'Building the Dataset Tamil Farmers Deserve', dek: 'Why brute-force AI fails the Global South.', date: '2026-04-09', href: S + 'building-the-dataset-tamil-farmers', group: 'Data & evaluation' },
  { title: 'The Breakthrough', dek: 'What 10 Grade B runs taught me about data quality.', date: '2026-04-18', href: S + 'the-breakthrough-what-10-grade-b', group: 'Data & evaluation' },
  { title: 'If AI Will Shape the World, the World Must Help Govern It', dek: 'Open weights, legitimacy, and who gets to participate in science.', date: '2026-08-01', href: S + 'if-ai-will-shape-the-world-the-world', group: 'Perspectives' },
  { title: 'NeurIPS 2025: The Year We Admitted We Were Lost', dek: 'And found a better map. Notes on the conference that challenged scaling orthodoxy.', date: '2025-12-15', href: S + 'neurips-2025-the-year-we-admitted', group: 'Perspectives' },
  { title: 'Animals, Ghosts, and Chimeras', dek: 'The AI debate that will define the next decade.', date: '2025-10-24', href: S + 'animals-ghosts-and-chimeras-the-ai', group: 'Perspectives' },
];

export const fmtDate = (d: string) =>
  new Date(d + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
