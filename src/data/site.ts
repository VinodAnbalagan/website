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

export interface LabProject {
  n: string;
  title: string;
  question: string;
  ladder?: string;
  theme: string;
  status: Status;
  href?: string; // set once the article exists, e.g. '/lab/01-the-world'
}

// Section 1: the five steps that make up the Reverie paper, in order.
export const reverieLab: LabProject[] = [
  { n: '01', title: 'The World', theme: 'Environment', status: 'building',
    question: 'A 2D bouncing-ball simulator with walls, ball-ball collisions, an occluder, and hidden-collision labels. Test set generated once and stored. Baselines: constant-velocity extrapolation and last-frame copy.',
    ladder: 'occlusion length 3–5 → 6–10 → 11–15 frames, with and without a hidden collision' },
  { n: '02', title: 'Latent Observatory', theme: 'Representations', status: 'next',
    question: 'An RSSM trained on raw video with no physics in the loss: can probes read ball position and velocity from its state on visible frames? Scored as selectivity against a randomly initialised encoder.',
    ladder: 'probe capacity linear → 2-layer → 4-layer; balls 1 → 2 → 3' },
  { n: '03', title: 'Object Permanence', theme: 'Memory', status: 'planned',
    question: 'The same probes through the occlusion window, reading the recurrent state h and the stochastic latent z separately.',
    ladder: 'occlusion length; with vs without a hidden collision' },
  { n: '04', title: 'Is It Used?', theme: 'Causality', status: 'planned',
    question: 'Patch the recurrent state at occlusion onset with a counterfactual trajectory and roll forward. Does the ball reappear where the patched state says it should? Control: a random direction of equal norm.' },
  { n: '05', title: 'Beyond the Simulator', theme: 'Generalisation', status: 'planned',
    question: 'The decodability test on CLEVRER, where objects hide behind other objects.' },
];

// Section 2: experiments that come after the paper.
export const afterLab: { title: string; note?: string }[] = [
  { title: 'To Reconstruct or Not', note: 'Dreamer (reconstructs pixels) vs TD-MPC2 (decoder-free) on the same occlusion tests' },
  { title: 'Model-Based vs Model-Free' },
  { title: 'Compounding Error' },
  { title: 'Planning in Imagination' },
  { title: 'Value vs Horizon' },
  { title: 'Mini TD-MPC' },
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
