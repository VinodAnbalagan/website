// All site content lives here. Edit this file to update text, links and project status.

export const site = {
  name: 'Vinod Anbalagan',
  role: 'ML engineer · independent researcher · Toronto',
  headline: 'ML Engineer & Independent Researcher · World Models, Robot Learning & Representation Learning',
  identity:
    'World models as the basis for robot control, and the memory a planning agent needs to act in real time.',
  description:
    'Vinod Anbalagan: ML engineer and independent researcher working on world models for robot control, memory for real-time planning, and evaluation.',
  email: 'vinodanbalagan@gmail.com',
  // Put your headshot at public/me.jpg (square works best). Until then a placeholder is shown.
  photo: '/me.jpg',
  about: [
    'I’m interested in world models as the basis for robot control, and especially in memory: what a planning agent needs to remember, and how to keep that memory small enough to plan in real time.',
    'More broadly, I want to work on world models that adapt, where agents organise and refine what they keep as tasks and environments change.',
  ],
  openTo:
    'Open to research engineer, research assistant, and research internship opportunities, as well as funded MS/PhD positions, in world models, embodied AI and robot learning, representation learning, multimodal AI, and scientific ML.',
};

// Home banner: "Serene Japanese Zen Garden in Spring" by Leongsan Tung on Pexels (free Pexels licence).
export const banner = {
  src: 'https://images.pexels.com/photos/35145770/pexels-photo-35145770.jpeg?auto=compress&cs=tinysrgb&w=2400',
  credit: 'Leongsan Tung',
  page: 'https://www.pexels.com/photo/serene-japanese-zen-garden-in-spring-35145770/',
};

export const themes = [
  { title: 'World models for robot control', text: 'Planning inside a learned model of the world, from pixels, as the basis for acting, with speed counted alongside success.' },
  { title: 'Memory for real-time planning', text: 'What a planning agent needs to remember, what should decide it, and how small that memory can stay.' },
  { title: 'World models that adapt', text: 'Agents that organise and refine what they keep as tasks and environments change.' },
];

// Short, dated items for the home page. Newest first.
export const news = [
  { date: 'Nov 2026', text: 'Keepsake revised: it now compares five write rules for a small memory, with plan change as the new signal.', href: '/research#keepsake' },
  { date: 'Oct 2026', text: 'CulturalRiddles is on arXiv, with a Cohere Labs research blog I co-wrote and a public results dashboard I built.', href: 'https://arxiv.org/abs/2610.29968' },
  { date: 'Oct 2026', text: 'Finished The Architecture of Dreams, a three-part series on world models, on The Meta Gradient.', href: 'https://vinodanbalagan.substack.com/p/the-architecture-of-dreams-part-3' },
  { date: '2026', text: '2nd place, Data and Visualization track, Adaption Labs AutoScientist Challenge.', href: '/cv' },
];

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
  paperTitle: 'What Should a Robot Remember? Plan Change as a Write Signal for Lean Memory in World-Model Planning',
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
    question: 'Reproduce LeWorldModel, a small JEPA world model that plans from pixels, on one of its tasks. Measure success rate and planning time per decision on my own hardware, and check whether the planner can show the plan it held before and after each new observation.',
    ladder: 'planning horizon 5 → 10 → 20 steps' },
  { n: '02', title: 'Tasks That Need Memory', theme: 'Environment', status: 'next',
    question: 'Hidden-state tasks, where the outcome of an action depends on something no longer visible: a controlled diagnostic task and a standard benchmark task, the shell game. Does the memoryless planner fail and an oracle given the hidden state succeed, as they should?',
    ladder: 'information hidden for short → medium → long' },
  { n: '03', title: 'The Signal Audit', theme: 'Signals', status: 'planned',
    question: "Before building any memory: log two signals, the world model's surprise and whether each observation changed the plan, and compare them with labelled moments that matter, including under distractors, recolouring and repeated frames. Which signal marks what is worth remembering?",
    ladder: 'change that matters → distractor → appearance only → own progress' },
  { n: '04', title: 'Remembering Everything', theme: 'Memory', status: 'planned',
    question: 'The expensive answers: stack recent frames, give the predictor a recurrent state, add always-on learned slots, or keep every past state and attend over all of it, plus an oracle handed the hidden state. These set the ceiling and the price.',
    ladder: 'history length 4 → 16 → full episode' },
  { n: '05', title: 'The Write Rule', theme: 'Selection', status: 'planned',
    question: 'One model, one memory budget, five rules for what gets written: time, chance, surprise, plan change, and surprise weighted by plan change. Which fills a small memory best, and does what it keeps really guide the plan?',
    ladder: 'time → chance → surprise → plan change → both' },
  { n: '06', title: 'The Price of Memory', theme: 'Speed', status: 'planned',
    question: 'Success rate against planning time per decision as episodes get longer, for every memory variant, over several seeds. Where does each kind of memory sit on the trade-off between reliability and speed?',
    ladder: 'episode length short → long → very long' },
];

// Section 2: experiments that come after the paper.
export const afterLab: { title: string; note?: string }[] = [
  { title: 'On a Real Arm', note: 'The same planner and memory on a low-cost arm with a camera' },
  { title: 'Another Body', note: 'The same memory, unchanged, on a simulated drone' },
  { title: 'Lessons Across Episodes', note: 'Distilled experience in a compact graph, recalled only when needed' },
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
  img?: string;
}

const S = links.substack + '/p/';

// Thumbnails: Substack cover images, resized and cropped by Substack's image CDN.
const sub = (file: string) =>
  'https://substackcdn.com/image/fetch/w_480,h_300,c_fill,f_auto,q_auto:good,g_auto/' +
  encodeURIComponent('https://substack-post-media.s3.amazonaws.com/public/images/' + file);
export const COHERE_IMG = 'https://cdn.sanity.io/images/rjtqmwfu/web3-prod/cf26294b858a2a8755d915258c671d8cbf2316b2-1920x1080.svg';

export const writing: Essay[] = [
  { title: 'CulturalRiddles: Where Models Fall Short', dek: 'Original riddles from 62 cultures, and what 28 language models get wrong about them: regional gaps, made-up answers, and a pull toward the familiar.', date: '2026-10-22', href: 'https://cohere.com/research/papers/culturalriddles-2026-10-22', img: COHERE_IMG, group: 'Research blogs', byline: 'Cohere Labs research blog · co-written with Tianyi Hu, Madeline Smith and Julia Kreutzer' },
  { title: 'The Architecture of Dreams, Part 3: Does Looking Right Mean Understanding?', dek: 'Genie, V-JEPA 2, and Physics-IQ.', date: '2026-10-11', href: S + 'the-architecture-of-dreams-part-3', img: sub('13854aba-95da-4ca6-a8c5-4c9fda244321_855x570.gif'), group: 'Learning & world models' },
  { title: 'The Architecture of Dreams, Part 2: What Should a World Model Predict?', dek: 'MuZero, DreamerV3, TD-MPC2.', date: '2026-09-28', href: S + 'the-architecture-of-dreams-part-2', img: sub('9009847b-9145-4da7-b6a5-5b5a858597ec_1071x351.gif'), group: 'Learning & world models' },
  { title: 'Freezing the Noise', dek: 'How one line of algebra made sampling differentiable.', date: '2026-09-18', href: S + 'freezing-the-noise', img: sub('49de1f00-a8a7-468c-86b0-f09e8d2e2e95_880x475.gif'), group: 'Learning & world models' },
  { title: 'The Architecture of Dreams, Part 1: How Neural Networks Learned to Imagine', dek: 'World Models, PlaNet, Dreamer.', date: '2026-09-14', href: S + 'the-architecture-of-dreams-how-neural', img: sub('48ec3d31-65db-4898-939c-f13f1b937f3a_2308x1288.png'), group: 'Learning & world models' },
  { title: 'Finding the Manifold', dek: 'Where neural networks land: the geometry of optimisation, with a live demo.', date: '2026-01-06', href: S + 'finding-the-manifold-where-neural', img: sub('f33d9886-bc83-42b4-9028-dcc1a79df2bb_1366x770.png'), group: 'Learning & world models' },
  { title: 'On Building Offline AI for People Who Actually Need It', dek: 'What 9,000 evaluation pairs taught us about multilingual retrieval.', date: '2026-04-01', href: S + 'on-building-offline-ai-for-people', img: sub('e1b5460a-9d39-4b53-82ac-7b9aaff823f3_1408x768.png'), group: 'Data & evaluation' },
  { title: 'Building the Dataset Tamil Farmers Deserve', dek: 'Why brute-force AI fails the Global South.', date: '2026-04-09', href: S + 'building-the-dataset-tamil-farmers', img: sub('a1c9b458-819d-4530-8dc8-338332802547_2080x1000.png'), group: 'Data & evaluation' },
  { title: 'The Breakthrough', dek: 'What 10 Grade B runs taught me about data quality.', date: '2026-04-18', href: S + 'the-breakthrough-what-10-grade-b', img: sub('8a898da1-4660-4827-af0a-289025a571e4_1408x768.png'), group: 'Data & evaluation' },
  { title: 'If AI Will Shape the World, the World Must Help Govern It', dek: 'Open weights, legitimacy, and who gets to participate in science.', date: '2026-08-01', href: S + 'if-ai-will-shape-the-world-the-world', img: sub('94e61316-6abb-460a-8d2e-348f43cab22d_1600x806.jpeg'), group: 'Perspectives' },
  { title: 'NeurIPS 2025: The Year We Admitted We Were Lost', dek: 'And found a better map. Notes on the conference that challenged scaling orthodoxy.', date: '2025-12-15', href: S + 'neurips-2025-the-year-we-admitted', img: sub('68061b19-bb87-4aa4-9c17-c079d18f3d8f_1584x672.png'), group: 'Perspectives' },
  { title: 'Animals, Ghosts, and Chimeras', dek: 'The AI debate that will define the next decade.', date: '2025-10-24', href: S + 'animals-ghosts-and-chimeras-the-ai', img: sub('07382879-d0f2-46e1-ada8-69cd69392098_1408x768.jpeg'), group: 'Perspectives' },
];

export const fmtDate = (d: string) =>
  new Date(d + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
