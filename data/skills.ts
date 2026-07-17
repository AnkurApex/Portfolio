// data/skills.ts
export type SkillCategory =
  | "Languages"
  | "Tools & Infra"
  | "Databases"
  | "AI/ML"
  | "Concepts";

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  Languages: [
    { name: "Java", category: "Languages", logoKey: "java" },
    { name: "Python", category: "Languages", logoKey: "python" },
    { name: "SQL", category: "Languages", logoKey: "mysql" },
    { name: "JavaScript", category: "Languages", logoKey: "javascript" },
  ],
  "Tools & Infra": [
    { name: "Spring Boot", category: "Tools & Infra", logoKey: "spring" },
    { name: "FastAPI", category: "Tools & Infra", logoKey: "fastapi" },
    { name: "Docker", category: "Tools & Infra", logoKey: "docker" },
    { name: "Git", category: "Tools & Infra", logoKey: "git" },
  ],
  Databases: [
    { name: "MySQL", category: "Databases", logoKey: "mysql" },
    { name: "PostgreSQL", category: "Databases", logoKey: "postgresql" },
    { name: "pgvector", category: "Databases", logoKey: "postgresql" },
  ],
  "AI/ML": [
    { name: "LangGraph", category: "AI/ML", logoKey: "python" },
    { name: "RAG", category: "AI/ML", logoKey: "openai" },
    { name: "RAGAS", category: "AI/ML", logoKey: "python" },
    { name: "Langfuse", category: "AI/ML", logoKey: "python" },
    { name: "Prompt Engineering", category: "AI/ML", logoKey: "openai" },
  ],
  Concepts: [
    { name: "DSA", category: "Concepts", logoKey: "github" },
    { name: "DBMS", category: "Concepts", logoKey: "mysql" },
    { name: "OOP", category: "Concepts", logoKey: "java" },
  ],
};
