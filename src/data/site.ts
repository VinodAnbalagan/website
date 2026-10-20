// All site content lives here. Edit this file to update text, links and project status.

export const site = {
  name: 'Vinod Anbalagan',
  role: 'ML engineer · independent researcher · Toronto',
  headline: 'ML Engineer & Independent Researcher · Representation Learning, Multimodal AI & World Models',
  identity:
    'I study what representations a learner forms when you constrain it, using probes and causal interventions rather than benchmark scores.',
  description:
    'Vinod Anbalagan: ML engineer and independent researcher working on world models, representation learning and evaluation.',
  email: 'vinodanbalagan@gmail.com',
  openTo:
    'Open to research engineer, research assistant, and research internship opportunities, as well as funded MS/PhD positions, in world models, representation learning, multimodal AI, robotics, and scientific ML.',
};

export const links = {
  linkedin: 'https://www.linkedin.com/in/vinod-anbalagan/',
  github: 'https://github.com/VinodAnbalagan',
  huggingface: 'https://huggingface.co/vinod-anbalagan',
  substack: 'https://vinodanbalagan.substack.com',
};

export type Status = 'planned' | 'next' | 'building' | 'shipped';

export interface LabProject {
  n: string;
  title: string;
  question: string;
  ladder: string;
  theme: 'Foundations' | 'Dynamics' | 'Representations' | 'Memory' | 'Planning' | 'Value' | 'Agent';
  status: Status;
  flagship?: boolean;
  href?: string; // set once the article exists, e.g. '/lab/01-model-based-vs-model-free'
}

export const lab: LabProject[] = [
  { n: '01', title: 'Model-Based vs Model-Free', theme: 'Foundations', status: 'next',
    question: 'How much real experience does a learned model save, and what happens when the model is wrong?',
    ladder: 'model error rate 0% → 10% → 30% → 50%' },
  { n: '02', title: 'Compounding Error', theme: 'Dynamics', status: 'planned',
    question: 'How fast does rollout error compound, and does a physics-informed inductive bias slow it down?',
    ladder: 'rollout horizon 1 → 10 → 100' },
  { n: '03', title: 'Latent Observatory', theme: 'Representations', status: 'planned',
    question: 'Does an encoder trained on raw frames recover position and velocity? Linear probes against ground truth.',
    ladder: 'number of balls 1 → 2 → 4 → 8' },
  { n: '04', title: 'To Reconstruct or Not', theme: 'Representations', status: 'planned', flagship: true,
    question: 'Reconstruction or latent prediction: which world model keeps the state that decisions actually need?',
    ladder: 'background distractor complexity' },
  { n: '05', title: 'Object Permanence', theme: 'Memory', status: 'planned',
    question: 'How long does a recurrent latent keep an object it can no longer see?',
    ladder: 'occlusion length, latent size' },
  { n: '06', title: 'Planning in Imagination', theme: 'Planning', status: 'planned',
    question: "Random shooting, CEM, MPPI and gradient-based planning: when does the planner exploit the model's errors?",
    ladder: 'horizon, sample count' },
  { n: '07', title: 'Value vs Horizon', theme: 'Value', status: 'planned',
    question: 'How much long-horizon planning can a learned value function replace?',
    ladder: 'horizon 1 → 3 → 5 → 10, with and without value' },
  { n: '08', title: 'Mini TD-MPC', theme: 'Agent', status: 'planned',
    question: 'All the pieces in one agent: how close does a from-scratch build get to TD-MPC2, and which component matters most?',
    ladder: 'component ablations, own environment → DMControl' },
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
  group: 'Learning & world models' | 'Data & evaluation' | 'Perspectives';
}

const S = links.substack + '/p/';

export const writing: Essay[] = [
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
