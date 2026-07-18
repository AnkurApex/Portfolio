import { Metadata } from "next";
import PortfolioPage from "./portfolio-page";

export const metadata: Metadata = {
  title: "Ankur — Software Engineer, AI/ML",
  description: "Final-year B.Tech CSE (AI/ML) student, Galgotias University. I build agentic systems that verify before they answer — RAG pipelines, security review agents, and on-device inference, backed by a Java/Spring Boot foundation.",
};

export default function Page() {
  return <PortfolioPage />;
}
