export const REVIEW_META = {
  title: "Impact of Artificial Intelligence on Patient Trust in Physicians",
  shortTitle: "AI & Patient Trust",
  type: "Living Systematic Review",
  status: "protocol" as const,
  lastUpdated: "2026-04-24",
  prosperoId: "Pending",
  protocolDoi: null as string | null,
  protocolPdfUrl: null as string | null,
  journalTarget: "Systematic Reviews",
  searchStart: "2026-07",
  contact: {
    institution: "Institute of Health Policy and Management",
    university: "College of Public Health, National Taiwan University",
    location: "Taipei, Taiwan",
  },
};

export type ReviewStatus = "protocol" | "searching" | "screening" | "extracting" | "published" | "updating";

export const STATUS_LABELS: Record<ReviewStatus, { label: string; color: "amber" | "emerald" | "primary" }> = {
  protocol: { label: "Protocol Stage", color: "amber" },
  searching: { label: "Search in Progress", color: "primary" },
  screening: { label: "Screening", color: "primary" },
  extracting: { label: "Data Extraction", color: "primary" },
  published: { label: "Published", color: "emerald" },
  updating: { label: "Quarterly Update in Progress", color: "primary" },
};

export const EXTRACTION_DOMAINS = [
  {
    domain: "Study Characteristics",
    variables: ["Author(s)", "Year of publication", "Country/region", "Journal/source", "Study objective"],
  },
  {
    domain: "Study Design & Methodology",
    variables: ["Study design", "Sampling strategy", "Data collection methods", "Analytical methods"],
  },
  {
    domain: "Healthcare Context",
    variables: ["Clinical setting", "Medical specialty", "Stage of care"],
  },
  {
    domain: "AI System Characteristics",
    variables: ["Type of AI system", "Intended function", "Level of physician involvement"],
  },
  {
    domain: "Population Characteristics",
    variables: ["Patient population", "Clinician population", "Sample size", "Demographics"],
  },
  {
    domain: "Trust-Related Measures",
    variables: ["Type of trust outcome (cognitive/affective)", "Measurement instruments", "Operational definition"],
  },
  {
    domain: "Impact on Patient Trust",
    variables: ["Direction of effect", "Magnitude", "Qualitative insights", "Contextual explanations"],
  },
  {
    domain: "Mechanisms & Contextual Factors",
    variables: ["Transparency", "Explainability", "Perceived accuracy", "Accountability", "Algorithmic fairness"],
  },
  {
    domain: "Equity Considerations",
    variables: ["Age", "Gender", "Race/ethnicity", "Socioeconomic status", "Digital literacy"],
  },
  {
    domain: "Risk of Bias",
    variables: ["MMAT quality appraisal score"],
  },
];

export interface SearchRound {
  id: string;
  date: string;
  type: "initial" | "quarterly";
  databases: string[];
  recordsIdentified: number | null;
  duplicatesRemoved: number | null;
  screened: number | null;
  fullTextAssessed: number | null;
  included: number | null;
  notes: string;
}

export const SEARCH_ROUNDS: SearchRound[] = [];

export interface ExtractedStudy {
  id: string;
  authors: string;
  year: number;
  title: string;
  journal: string;
  country: string;
  studyDesign: string;
  aiSystemType: string;
  clinicalSetting: string;
  trustOutcome: string;
  effectDirection: "increase" | "decrease" | "mixed" | "no change";
  mmatScore: string;
  searchRound: string;
}

export const EXTRACTED_STUDIES: ExtractedStudy[] = [];

export interface UpdateLogEntry {
  version: string;
  date: string;
  type: "protocol" | "search" | "methodology" | "synthesis" | "publication";
  summary: string;
}

export const UPDATE_LOG: UpdateLogEntry[] = [
  {
    version: "v1.0",
    date: "2026-04-24",
    type: "protocol",
    summary: "Protocol finalized and submitted to Systematic Reviews. PROSPERO registration initiated. Data warehouse launched.",
  },
];

export const DATABASES = [
  { name: "PubMed / MEDLINE", category: "primary" as const },
  { name: "Web of Science", category: "primary" as const },
  { name: "IEEE Xplore", category: "primary" as const },
  { name: "ACM Digital Library", category: "primary" as const },
  { name: "medRxiv", category: "grey" as const },
  { name: "bioRxiv", category: "grey" as const },
  { name: "Google Scholar", category: "grey" as const },
  { name: "Conference proceedings", category: "grey" as const },
  { name: "Institutional & policy reports", category: "grey" as const },
];

export const PICO = {
  population: "Healthcare stakeholders participating in clinical encounters, including patients, physicians, nurses, and healthcare administrators.",
  intervention: "Implementation of AI systems within clinical decision-making processes, including machine learning models, neural networks, clinical decision support systems, and large language models used for diagnosis, triage, or patient communication.",
  comparison: "Where applicable, AI-assisted clinical care compared with traditional clinician-only decision-making, pre-implementation baselines, or alternative technological systems.",
  outcome: "Physician–patient trust outcomes including cognitive dimensions (perceived reliability, competence) and affective dimensions (perceived empathy, relational trust, therapeutic alliance).",
};

export const INCLUSION_CRITERIA = [
  "Primary empirical research involving patients, clinicians, or healthcare administrators",
  "Studies examining AI systems used directly within clinical encounters or clinical decision-making",
  "Research measuring or evaluating outcomes related to physician–patient trust, transparency, accountability, or patient confidence in AI-assisted care",
  "Quantitative, qualitative, or mixed-methods research designs",
  "Published from January 2020 onward",
  "No geographic or language restrictions",
];

export const EXCLUSION_CRITERIA = [
  "AI applications used solely for administrative, laboratory, or population-level functions without direct interaction in clinical encounters",
  "Bundled technological systems where the specific impact of AI cannot be isolated",
  "Studies not reporting outcomes related to trust or physician–patient relationships",
  "Secondary research articles, commentaries, editorials, or conference abstracts without primary data",
  "Published before January 2020",
];

export const SEARCH_STRATEGY = `(
  "Artificial Intelligence"[Mesh]
  OR "Machine Learning"[Mesh]
  OR artificial intelligence[tiab]
  OR machine learning[tiab]
  OR deep learning[tiab]
  OR neural network*[tiab]
  OR "clinical decision support"[tiab]
  OR "decision support system*"[tiab]
  OR algorithm*[tiab]
  OR "predictive model*"[tiab]
  OR "large language model*"[tiab]
  OR "generative AI"[tiab]
  OR ChatGPT[tiab]
  OR "medical AI"[tiab]
)
AND
(
  healthcare[tiab]
  OR "clinical care"[tiab]
  OR "clinical decision making"[tiab]
  OR "medical decision making"[tiab]
  OR "clinical encounter*"[tiab]
  OR "patient care"[tiab]
  OR diagnos*[tiab]
  OR "treatment planning"[tiab]
)
AND
(
  trust[tiab]
  OR "patient trust"[tiab]
  OR "physician trust"[tiab]
  OR "trust in physician*"[tiab]
  OR "doctor-patient relationship"[tiab]
  OR "physician-patient relationship"[tiab]
  OR "Physician-Patient Relations"[Mesh]
  OR "therapeutic alliance"[tiab]
  OR "confidence in physician*"[tiab]
  OR "patient confidence"[tiab]
  OR "patient perception*"[tiab]
  OR trustworthiness[tiab]
)
AND ("2020/01/01"[Date - Publication] : "3000"[Date - Publication])`;

export const TEAM = {
  core: [
    { name: "John Tayu Lee (李達宇)", role: "Principal Investigator", affiliation: "Institute of Health Policy and Management, NTU College of Public Health" },
    { name: "Hui-Hsuan Chen", role: "Co-Lead", affiliation: "NTU College of Public Health" },
    { name: "Cheng-Hsiu Liu", role: "Clinical Contributor", affiliation: "" },
    { name: "Jo-Wei (若薇)", role: "Second Author", affiliation: "NTU College of Public Health" },
    { name: "Ai-Ting Yang (楊艾庭)", role: "Team Member", affiliation: "NTU College of Public Health" },
    { name: "Chueh-An Kuo (郭爵安)", role: "Data Platform & Extraction", affiliation: "NTU College of Public Health" },
  ],
  committee: [
    { name: "Rifat Atun", affiliation: "Harvard T.H. Chan School of Public Health" },
    { name: "Pao-Chung Chen (陳保中)", affiliation: "National Taiwan University; Taiwan Public Health Association" },
    { name: "Yu-Kang Tu (杜裕康)", affiliation: "National Taiwan University, College of Public Health" },
    { name: "Adam Dunn", affiliation: "npj Digital Medicine, Editor" },
    { name: "Brian Oldenburg", affiliation: "Baker Heart & Diabetes Institute" },
    { name: "Sian Tsuei", affiliation: "University of British Columbia" },
    { name: "Josip Car", affiliation: "King’s College London" },
  ],
};
