"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Hero } from "@/components/home/hero";
import { SkillsShowcase } from "@/components/home/skills-showcase";
import { ProjectCard } from "@/components/projects/project-card";

import { developerConfig } from "@/data/developer";
import { education } from "@/data/education";
import { projects } from "@/data/projects";
import { socialLinks } from "@/data/social";
import { getIconComponent } from "@/lib/icons";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* ─── Hero Section ────────────────────────────────────────── */}
      <Hero />

      {/* ─── About Section ───────────────────────────────────────── */}
      <section id="about" className="py-12 md:py-24 border-t bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Get to know more about my background and qualifications
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Left column — Biography */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="mb-4 text-xl font-bold">Who I Am</h3>
              <Card>
                <CardContent className="space-y-4 p-6 leading-relaxed">
                  {developerConfig.about.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Right column — Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="mb-4 text-xl font-bold">Education</h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <Card key={edu.id}>
                    <CardContent className="flex gap-4 p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {edu.startDate} – {edu.endDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {edu.location}
                          </span>
                        </div>
                        {edu.gpa && (
                          <Badge variant="outline" className="mt-2">
                            CGPA: {edu.gpa}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Skills Section ──────────────────────────────────────── */}
      <SkillsShowcase />

      {/* ─── Projects Section ────────────────────────────────────── */}
      <section id="projects" className="py-12 md:py-24 border-t bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              A showcase of my projects and work
            </p>
          </motion.div>

          {projects.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">My projects will be listed here soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* ─── Contact Section ─────────────────────────────────────── */}
      <section id="contact" className="py-12 md:py-24 border-t">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get In Touch
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Connect with me</CardTitle>
                  <CardDescription>
                    You can also reach out to me directly through these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col space-y-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center rounded-md border p-4 transition-colors hover:bg-muted"
                    >
                      <div className="mr-4 rounded-full bg-primary/10 p-2">
                        {getIconComponent(social.icon)}
                      </div>
                      <div>
                        <h4 className="font-medium">{social.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {social.url.replace(/(mailto:|tel:|https:\/\/)/g, "")}
                        </p>
                      </div>
                    </motion.a>
                  ))}

                  <div className="mt-auto pt-6 border-t">
                    <h4 className="mb-2 font-medium text-sm text-muted-foreground uppercase tracking-wider">Current Location</h4>
                    <p className="text-sm font-medium">{developerConfig.location}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
