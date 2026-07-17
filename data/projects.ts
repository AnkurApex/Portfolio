export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "finlens",
    title: "FinLens",
    description: "A portfolio-grade, multi-agent financial filing QA system for SEC 10-K/10-Q documents with grounded citations and table-routing agents.",
    longDescription: "FinLens routes numeric questions through table-aware logic and factual questions through RRF (Reciprocal Rank Fusion) using vector and BM25 retrievers. Answers are synthesized only from grounded context to avoid hallucinations and include chunk-level citations.",
    technologies: ["Python", "FastAPI", "Spring Boot", "LangGraph", "PostgreSQL", "pgvector", "Docker", "Langfuse"],
    achievements: [
      "Designed dynamic question routing to send numeric questions to a dedicated Table Agent",
      "Implemented hybrid search utilizing pgvector embeddings combined with BM25 keyword retrieval",
      "Engineered automated local evaluation with a golden dataset to measure retrieval metrics"
    ],
    image: "/images/projects/finlens.png",
    github: "https://github.com/AnkurApex/Finlens",
    featured: true,
  },
  {
    id: "ragscope",
    title: "RAGScope",
    description: "A production-grade Retrieval-Augmented Generation (RAG) platform with full observability, latency telemetry, and hallucination monitoring.",
    longDescription: "RAGScope logs every user query, retrieved chunk, prompt, and LLM response into PostgreSQL for observability. It includes built-in hallucination checking and automated evaluations to ensure response quality in production environments.",
    technologies: ["Next.js", "React", "FastAPI", "PostgreSQL", "ChromaDB", "Google Gemini", "Tailwind CSS", "shadcn/ui", "DeepEval"],
    achievements: [
      "Built telemetry pipelines storing prompt tokens, responses, and latency metrics in PostgreSQL",
      "Configured automated testing workflows with DeepEval for RAG golden datasets",
      "Created a modern shadcn/ui and Next.js admin dashboard to monitor system health in real-time"
    ],
    image: "/images/projects/ragscope.png",
    github: "https://github.com/AnkurApex/RagScope",
    featured: true,
  },
  {
    id: "helpzy",
    title: "LocalPro (Helpzy)",
    description: "A Next.js services marketplace connecting customers and local service providers, featuring API routes and an SQLite-backed data layer.",
    longDescription: "Helpzy features secure routing and marketplace listings matching customers with local professionals. It utilizes SQLite and a clean relational schema to manage provider listings, requests, and ratings.",
    technologies: ["Next.js", "React", "Tailwind CSS", "SQLite", "PostCSS"],
    achievements: [
      "Developed client and provider workflows for local services dispatch",
      "Designed a light SQLite database schema utilizing SQL queries to fetch matching records",
      "Leveraged Next.js App Router and API routes to handle authentication and state",
    ],
    image: "/images/projects/helpzy.png",
    github: "https://github.com/AnkurApex/Helpzy",
    featured: true,
  }
];
