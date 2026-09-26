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
    'MS and PhD positions, research internships, and research engineer, ML engineer or applied scientist roles on teams working on world models, multimodal AI, representation learning or scientific ML. Europe, Canada or the US. Available immediately.',
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
  theme: 'Learning' | 'Representations' | 'Dynamics' | 'Computation';
  status: Status;
  flagship?: boolean;
  href?: string; // set once the article exists, e.g. '/lab/01-search-landscapes'
}

export const lab: LabProject[] = [
  {
    n: '01',
    title: 'Search Landscapes',
    question: 'Gradient descent, CEM and evolution strategies: does their ranking flip as dimension grows?',
    ladder: 'dim 2 → 10 → 100 → 1000',
    theme: 'Learning',
    status: 'next',
  },
  {
    n: '02',
    title: 'Hopfield Memory',
    question: 'Why is attention a Hopfield network? Classical versus modern storage capacity.',
    ladder: 'neurons × stored patterns',
    theme: 'Computation',
    status: 'planned',
  },
  {
    n: '03',
    title: 'ODE vs NN',
    question: 'Does a Hamiltonian inductive bias fix extrapolation and energy drift?',
    ladder: 'training region, rollout length',
    theme: 'Dynamics',
    status: 'planned',
  },
  {
    n: '04',
    title: 'Latent Observatory',
    question: 'Which training objective recovers the true generative factors?',
    ladder: 'MNIST → dSprites → harder',
    theme: 'Representations',
    status: 'planned',
  },
  {
    n: '05',
    title: 'Local Learning',
    question: 'How fast does the gap to backprop grow with depth?',
    ladder: 'depth 1 → 2 → 4 → 8',
    theme: 'Learning',
    status: 'planned',
  },
  {
    n: '06',
    title: 'Neural Cellular Automata',
    question: 'Does growth trained by evolution strategies regenerate differently from growth trained by backprop?',
    ladder: 'target complexity, grid size',
    theme: 'Dynamics',
    status: 'planned',
    flagship: true,
  },
  {
    n: '07',
    title: 'Grokking',
    question: 'How do weight decay and data fraction change which circuit forms?',
    ladder: 'width, data fraction',
    theme: 'Representations',
    status: 'planned',
  },
  {
    n: '08',
    title: 'Tiny World Model',
    question: 'How long does the latent keep an object it can no longer see?',
    ladder: 'occlusion length, latent size',
    theme: 'Dynamics',
    status: 'planned',
  },
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
  { title: 'Freezing the Noise', dek: 'How one line of algebra made sampling differentiable.', date: '2026-09-18', href: S + 'freezing-the-noise', group: 'Learning & world models' },
  { title: 'The Architecture of Dreams', dek: 'Part 1: how neural networks learned to imagine. World Models, PlaNet, Dreamer.', date: '2026-09-14', href: S + 'the-architecture-of-dreams-how-neural', group: 'Learning & world models' },
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
