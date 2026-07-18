"use client";

import { useEffect } from "react";

export default function PortfolioPage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLE_CONTENT }} />
      <div
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: BODY_CONTENT }}
        suppressHydrationWarning
      />
    </>
  );
}

const STYLE_CONTENT = `:root{
    --ink:#14140F;
    --ink-2:#1D1D16;
    --paper:#F2EFE6;
    --paper-dim:#B8B4A6;
    --stamp:#C1441E;
    --stamp-dim:#8A3016;
    --line: rgba(242,239,230,0.14);
    --display: 'Space Grotesk', sans-serif;
    --mono: 'IBM Plex Mono', monospace;
    --body: 'Inter', sans-serif;
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{
    background:var(--ink);
    color:var(--paper);
    font-family:var(--body);
    overflow-x:hidden;
  }
  a{color:inherit;text-decoration:none;}
  ::selection{background:var(--stamp);color:var(--paper);}

  .wrap{max-width:1180px;margin:0 auto;padding:0 32px;}

  /* ---- topbar ---- */
  header{
    position:fixed;top:0;left:0;right:0;z-index:50;
    display:flex;justify-content:space-between;align-items:center;
    padding:24px 32px;
    font-family:var(--mono);font-size:12px;letter-spacing:0.06em;
    mix-blend-mode:difference;
  }
  header .brand{font-family:var(--display);font-weight:700;font-size:16px;letter-spacing:0.02em;}
  header nav{display:flex;gap:28px;}
  header nav a{opacity:0.75;transition:opacity .2s;}
  header nav a:hover{opacity:1;}
  @media (max-width:720px){ header nav{display:none;} }

  /* ---- hero ---- */
  .hero{
    min-height:100vh;
    display:flex;flex-direction:column;justify-content:center;
    padding-top:120px;padding-bottom:80px;
    position:relative;
    border-bottom:1px solid var(--line);
  }
  .hero-grid{
    display:grid;grid-template-columns:1.35fr 0.8fr;
    gap:64px;align-items:center;
  }
  @media (max-width:900px){
    .hero-grid{grid-template-columns:1fr;}
    .hero-right{order:-1;max-width:320px;margin:0 auto 8px;}
  }

  /* ---- profile card ---- */
  .profile-card{
    position:relative;
    background:var(--paper);
    border-radius:28px;
    padding:26px 26px 30px;
    color:var(--ink);
    opacity:0;transform:translateY(24px) rotate(-1.2deg);
    animation:cardIn .9s cubic-bezier(.16,1,.3,1) forwards;
    animation-delay:.35s;
    box-shadow:0 30px 60px -20px rgba(0,0,0,0.5);
  }
  @keyframes cardIn{to{opacity:1;transform:translateY(0) rotate(-1.2deg);}}
  .profile-card .arc{position:absolute;pointer-events:none;}
  .profile-card .arc.top{top:-18px;left:8px;width:120px;}
  .profile-card .arc.bottom{bottom:96px;left:-22px;width:130px;}
  .profile-photo-wrap{
    border-radius:18px;overflow:hidden;
    aspect-ratio:1/1.12;
    background:linear-gradient(160deg, var(--stamp) 0%, var(--stamp-dim) 100%);
  }
  .profile-photo-wrap img{
    width:100%;height:100%;object-fit:cover;
    filter:grayscale(0.15) contrast(1.05);
    mix-blend-mode:normal;
  }
  .profile-card h3{
    font-family:var(--display);font-weight:700;font-size:26px;
    margin-top:20px;letter-spacing:-0.01em;
  }
  .profile-badge{
    width:34px;height:34px;border-radius:50%;
    background:var(--stamp);display:flex;align-items:center;justify-content:center;
    margin:14px 0 12px;position:relative;
  }
  .profile-badge svg{width:16px;height:16px;}
  .profile-card p.tag{
    font-size:13px;line-height:1.6;color:#57544A;
    max-width:230px;
  }
  .profile-socials{display:flex;gap:10px;margin-top:22px;justify-content:center;}
  .profile-socials a{
    width:36px;height:36px;border-radius:50%;
    border:1.4px solid var(--stamp);
    display:flex;align-items:center;justify-content:center;
    color:var(--stamp);transition:background .2s, color .2s;
  }
  .profile-socials a:hover{background:var(--stamp);color:var(--paper);}
  .profile-socials svg{width:15px;height:15px;}
  .eyebrow{
    font-family:var(--mono);font-size:12px;letter-spacing:0.08em;
    color:var(--stamp);margin-bottom:28px;
    display:flex;align-items:center;gap:10px;
  }
  .eyebrow::before{content:'';width:8px;height:8px;background:var(--stamp);display:inline-block;}
  h1.role{
    font-family:var(--display);
    font-weight:700;
    text-transform:uppercase;
    font-size:clamp(48px, 10vw, 128px);
    line-height:0.92;
    letter-spacing:-0.01em;
  }
  h1.role .line{display:block;overflow:hidden;}
  h1.role span{display:block;opacity:0;transform:translateY(100%);animation:riseUp .9s cubic-bezier(.16,1,.3,1) forwards;}
  h1.role .line:nth-child(1) span{animation-delay:.05s;}
  h1.role .line:nth-child(2) span{animation-delay:.18s;color:var(--paper-dim);}
  @keyframes riseUp{to{opacity:1;transform:translateY(0);}}

  .hero-foot{
    display:flex;justify-content:space-between;align-items:flex-end;
    margin-top:56px;gap:40px;flex-wrap:wrap;
  }
  .hero-note{
    max-width:420px;font-size:15px;line-height:1.6;color:var(--paper-dim);
  }
  .hero-note strong{color:var(--paper);font-weight:500;}
  .hero-meta{
    font-family:var(--mono);font-size:12px;color:var(--paper-dim);
    text-align:right;line-height:1.8;
  }

  /* ---- marquee ---- */
  .marquee-strip{
    border-bottom:1px solid var(--line);
    overflow:hidden;padding:14px 0;
    white-space:nowrap;
  }
  .marquee-track{
    display:inline-block;
    font-family:var(--mono);font-size:13px;letter-spacing:0.05em;
    color:var(--paper-dim);
    animation:scrollLeft 28s linear infinite;
  }
  .marquee-track span{margin:0 22px;}
  .marquee-track span.hi{color:var(--stamp);}
  @keyframes scrollLeft{from{transform:translateX(0);}to{transform:translateX(-50%);}}

  /* ---- section shared ---- */
  section{padding:120px 0;border-bottom:1px solid var(--line);}
  .sec-head{
    display:flex;justify-content:space-between;align-items:flex-end;
    margin-bottom:64px;gap:24px;flex-wrap:wrap;
  }
  .sec-tag{font-family:var(--mono);font-size:12px;color:var(--stamp);letter-spacing:0.08em;margin-bottom:14px;}
  .sec-title{font-family:var(--display);font-weight:600;font-size:clamp(30px,4vw,48px);text-transform:uppercase;letter-spacing:-0.01em;}
  .sec-desc{max-width:360px;color:var(--paper-dim);font-size:14px;line-height:1.7;}
  .reveal{opacity:0;transform:translateY(24px);transition:opacity .7s ease, transform .7s ease;}
  .reveal.in{opacity:1;transform:translateY(0);}

  /* ---- skills ---- */
  .skills-list{display:flex;flex-direction:column;}
  .skill-row{
    display:grid;grid-template-columns:0.8fr 1.2fr;gap:56px;
    padding:40px 0;border-top:1px solid var(--line);
    align-items:center;
  }
  .skill-row:first-child{border-top:none;}
  .skill-cat-label{
    font-family:var(--display);font-weight:700;
    text-transform:uppercase;font-size:38px;letter-spacing:-0.01em;
  }
  .skill-items{display:flex;flex-wrap:wrap;gap:24px 36px;align-items:center;}
  .skill-item{
    display:flex;align-items:center;gap:12px;
    font-family:var(--body);font-size:16px;color:var(--paper);
    transition:transform .2s;
  }
  .skill-item:hover{transform:translateY(-2px);}
  .skill-item img, .skill-item svg{
    width:28px;height:28px;object-fit:contain;flex-shrink:0;
    color: var(--stamp);
  }
  @media (max-width:800px){
    .skill-row{grid-template-columns:1fr;gap:20px;padding:32px 0;}
    .skill-cat-label{font-size:30px;}
  }

  /* ---- projects ---- */
  .project{
    display:grid;grid-template-columns:0.9fr 1.3fr;gap:56px;
    padding:48px 0;border-top:1px solid var(--line);
    align-items:start;
  }
  .project:first-of-type{border-top:none;}
  .project-head{display:flex;align-items:flex-start;gap:18px;}
  .stamp-badge{
    font-family:var(--mono);font-size:10px;letter-spacing:0.08em;
    border:1px solid var(--stamp);color:var(--stamp);
    padding:4px 10px;transform:rotate(-4deg);
    white-space:nowrap;margin-top:6px;
  }
  .project h3{font-family:var(--display);font-size:clamp(26px,3vw,38px);text-transform:uppercase;line-height:1;}
  .project .role{font-family:var(--mono);font-size:12px;color:var(--paper-dim);margin-top:10px;}
  .project-body p{color:var(--paper-dim);font-size:14.5px;line-height:1.75;margin-bottom:18px;max-width:560px;}
  .project-body p strong{color:var(--paper);font-weight:500;}
  .tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px;}
  .tag{font-family:var(--mono);font-size:11px;color:var(--paper-dim);border:1px solid var(--line);padding:5px 10px;}
  @media (max-width:800px){.project{grid-template-columns:1fr;gap:20px;}}

  /* ---- approach ---- */
  .approach-list{display:flex;flex-direction:column;}
  .approach-row{
    display:grid;grid-template-columns:60px 1fr;gap:24px;
    padding:26px 0;border-top:1px solid var(--line);
  }
  .approach-row:last-child{border-bottom:1px solid var(--line);}
  .approach-row .idx{font-family:var(--mono);color:var(--stamp);font-size:13px;}
  .approach-row h4{font-family:var(--display);text-transform:uppercase;font-size:16px;margin-bottom:8px;letter-spacing:0.01em;}
  .approach-row p{color:var(--paper-dim);font-size:13.5px;line-height:1.7;max-width:600px;}

  /* ---- contact ---- */
  .contact{border-bottom:none;padding-bottom:0;}
  .contact-head{text-align:center;margin-bottom:72px;}
  .contact-big-title{
    font-family:var(--display);font-weight:700;text-transform:uppercase;
    font-size:clamp(34px,6vw,64px);letter-spacing:-0.01em;
    margin:14px 0 18px;
  }
  .contact-sub{
    color:var(--paper-dim);font-size:15px;max-width:480px;
    margin:0 auto;line-height:1.6;
  }
  .contact-grid{
    display:grid;grid-template-columns:1.2fr 1fr;gap:56px;
    align-items:start;
  }
  .contact-headline{
    font-family:var(--display);font-weight:700;text-transform:uppercase;
    font-size:clamp(28px,4vw,46px);line-height:1.05;letter-spacing:-0.01em;
    margin-bottom:20px;
  }
  .contact-headline .stamp-word{color:var(--stamp);}
  .contact-desc{color:var(--paper-dim);font-size:14.5px;line-height:1.7;max-width:400px;margin-bottom:32px;}
  .contact-btns{display:flex;flex-wrap:wrap;gap:14px;}
  .btn-solid, .btn-outline{
    font-family:var(--body);font-weight:500;font-size:14px;
    padding:14px 26px;border-radius:100px;
    display:inline-flex;align-items:center;gap:6px;
    transition:opacity .2s, background .2s, color .2s;
  }
  .btn-solid{background:var(--paper);color:var(--ink);}
  .btn-solid:hover{opacity:0.85;}
  .btn-outline{border:1px solid var(--line);color:var(--paper);}
  .btn-outline:hover{border-color:var(--stamp);color:var(--stamp);}
  .contact-right{display:flex;flex-direction:column;gap:14px;}
  .link-card{
    display:flex;align-items:center;gap:16px;
    padding:18px 20px;border:1px solid var(--line);border-radius:14px;
    transition:border-color .2s, transform .2s;
  }
  .link-card:hover{border-color:var(--stamp);transform:translateX(4px);}
  .link-icon{
    width:38px;height:38px;border-radius:50%;
    background:rgba(242,239,230,0.06);
    display:flex;align-items:center;justify-content:center;
    color:var(--paper-dim);flex-shrink:0;
  }
  .link-icon svg{width:16px;height:16px;}
  .link-text{display:flex;flex-direction:column;gap:4px;}
  .link-label{font-family:var(--mono);font-size:10px;letter-spacing:0.08em;color:var(--paper-dim);}
  .link-url{font-size:14px;color:var(--paper);}
  @media (max-width:800px){.contact-grid{grid-template-columns:1fr;}}
  .placeholder{color:var(--paper-dim);font-size:13px;}

  footer{
    border-top:1px solid var(--line);
    padding:22px 0;overflow:hidden;white-space:nowrap;
  }
  .foot-track{
    display:inline-block;font-family:var(--display);font-weight:700;
    text-transform:uppercase;font-size:20px;letter-spacing:0.02em;
    animation:scrollLeft 22s linear infinite;
  }
  .foot-track span{margin:0 28px;color:var(--paper-dim);}
  .foot-track span.hi{color:var(--stamp);}
  .foot-bottom{
    display:flex;justify-content:space-between;padding:20px 0 40px;
    font-family:var(--mono);font-size:11px;color:var(--paper-dim);
  }

  @media (prefers-reduced-motion: reduce){
    *{animation-duration:.01ms !important; animation-iteration-count:1 !important; transition-duration:.01ms !important;}
  }
  a:focus-visible, button:focus-visible{outline:2px solid var(--stamp);outline-offset:3px;}`;

const BODY_CONTENT = `<header>
  <div class="brand">ANKUR /</div>
  <nav>
    <a href="#skills">Skills</a>
    <a href="#work">Projects</a>
    <a href="#approach">Approach</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<section class="hero wrap">
  <div class="hero-grid">
    <div class="hero-left">
      <div class="eyebrow">BUILDING VERIFIABLE AI SYSTEMS</div>
      <h1 class="role">
        <span class="line"><span>SOFTWARE</span></span>
        <span class="line"><span>ENGINEER / AI-ML</span></span>
      </h1>
      <div class="hero-foot">
        <p class="hero-note">Final-year B.Tech CSE (AI/ML) student, Galgotias University. I build <strong>agentic systems that verify before they answer</strong> — RAG pipelines, security review agents, and on-device inference, backed by a Java/Spring Boot foundation.</p>
        <div class="hero-meta">
          LOCATION — GREATER NOIDA
        </div>
      </div>
    </div>

    <div class="hero-right">
      <div class="profile-card">
        <svg class="arc top" viewBox="0 0 120 70" fill="none">
          <path d="M6 60C20 10 70 4 114 8" stroke="#C1441E" stroke-width="2.4" stroke-dasharray="6 7" stroke-linecap="round"/>
        </svg>
        <div class="profile-photo-wrap">
          <img src="/images/profile.jpg" alt="Ankur">
        </div>
        <h3>Ankur Singh</h3>
        <div class="profile-badge">
          <svg viewBox="0 0 24 24" fill="none"><path d="M4 12L10 18L20 6" stroke="#F2EFE6" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <p class="tag">B.Tech CSE (AI/ML) student building agentic AI systems — RAG, code review, and on-device inference.</p>
        <div class="profile-socials">
          <a href="https://github.com/AnkurApex" target="_blank" rel="noopener" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.71 5.4-5.29 5.69.42.36.78 1.07.78 2.16 0 1.56-.02 2.82-.02 3.2 0 .31.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/ankur-singh-b81a41300" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.24 8.25h4.5V23H.24V8.25zM8.5 8.25h4.31v2.01h.06c.6-1.14 2.07-2.34 4.26-2.34 4.55 0 5.39 3 5.39 6.9V23h-4.5v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23H8.5V8.25z"/></svg>
          </a>

        </div>
      </div>
    </div>
  </div>
</section>

<div class="marquee-strip">
  <div class="marquee-track">
    <span>FINLENS</span><span class="hi">/</span><span>RAGSCOPE</span><span class="hi">/</span><span>HELPZY</span><span class="hi">/</span><span>CODEGUARDIAN AI</span><span class="hi">/</span><span>AGRISENSE</span><span class="hi">/</span>
    <span>FINLENS</span><span class="hi">/</span><span>RAGSCOPE</span><span class="hi">/</span><span>HELPZY</span><span class="hi">/</span><span>CODEGUARDIAN AI</span><span class="hi">/</span><span>AGRISENSE</span><span class="hi">/</span>
  </div>
</div>

<section id="skills" class="wrap">
  <div class="sec-head reveal">
    <div>
      <div class="sec-tag">/ 01 — MY STACK</div>
      <div class="sec-title">Skills</div>
    </div>
    <p class="sec-desc">A curated set of tools I reach for to ship reliable, verifiable AI systems — from the JVM up to on-device inference.</p>
  </div>

  <div class="skills-list reveal">
    <div class="skill-row">
      <div class="skill-cat-label">BACKEND</div>
      <div class="skill-items">
        <div class="skill-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 10v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/><path d="M6 10c0 1.66 2.69 3 6 3s6-1.34 6-3-2.69-3-6-3-6 1.34-6 3z"/><path d="M9 15.5c-.5.6-.7 1.1-.7 1.5 0 1 1.6 1.8 3.7 1.8s3.7-.8 3.7-1.8c0-.4-.2-.9-.7-1.5"/></svg><span>Java</span></div>
        <div class="skill-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 4C3 6 3 9 3 12s0 6 3 8"/><path d="M18 4c3 2 3 5 3 8s0 6-3 8"/><path d="M9 9l3-1 3 1M9 15l3 1 3-1"/></svg><span>Spring Boot</span></div>
        <div class="skill-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3c-2 0-3 1-3 3v2h6v1H6c-2 0-3 1-3 3s1 3 3 3h2v-2c0-2 1-3 3-3h4c1 0 2-1 2-2V6c0-2-1-3-3-3h-2z"/><path d="M12 21c2 0 3-1 3-3v-2H9v-1h9c2 0 3-1 3-3s-1-3-3-3h-2v2c0 2-1 3-3 3H9c-1 0-2 1-2 2v2c0 2 1 3 3 3h2z"/></svg><span>Python</span></div>
        <div class="skill-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6"/><path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3"/></svg><span>PostgreSQL</span></div>
      </div>
    </div>

    <div class="skill-row">
      <div class="skill-cat-label">AI / ML</div>
      <div class="skill-items">
        <div class="skill-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M12 7.5L5.8 15.7M12 7.5L18.2 15.7M6.8 18H17.2"/></svg><span>LangGraph</span></div>
        <div class="skill-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="5" rx="7" ry="2.5"/><path d="M5 5v5c0 1.38 3.13 2.5 7 2.5 1.5 0 2.92-.17 4-.47"/><path d="M19 5v5"/><path d="M5 10v5c0 1.38 3.13 2.5 7 2.5.55 0 1.09-.03 1.6-.08"/><path d="M19 10v1.5"/><path d="M12 16l6-6M18 10h-4M18 10v4"/></svg><span>pgvector</span></div>
        <div class="skill-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 18A8 8 0 1 0 4 18"/><path d="M12 18v-5M12 13l4-3"/><circle cx="12" cy="18" r="1.5"/></svg><span>RAGAS</span></div>
        <div class="skill-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3v18h18"/><path d="M7 15l4-4 4 4 5-5"/><circle cx="7" cy="15" r="1.5"/><circle cx="11" cy="11" r="1.5"/><circle cx="15" cy="15" r="1.5"/></svg><span>Langfuse</span></div>
      </div>
    </div>

    <div class="skill-row">
      <div class="skill-cat-label">FRONTEND</div>
      <div class="skill-items">
        <div class="skill-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><ellipse cx="12" cy="12" rx="10" ry="4.2"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/></svg><span>React Native</span></div>
        <div class="skill-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><ellipse cx="12" cy="12" rx="10" ry="4.2"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/></svg><span>React</span></div>
      </div>
    </div>

    <div class="skill-row">
      <div class="skill-cat-label">TOOLS</div>
      <div class="skill-items">
        <div class="skill-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="6" cy="6" r="2.2"/><circle cx="6" cy="18" r="2.2"/><circle cx="18" cy="9" r="2.2"/><path d="M6 8.2V15.8M6 8.2C6 11 8 12 10.5 12H15.8"/></svg><span>Git</span></div>
        <div class="skill-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M8 11l3 3 5-5"/></svg><span>Semgrep</span></div>
        <div class="skill-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg><span>Bandit</span></div>
        <div class="skill-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="7.5" cy="15.5" r="3.5"/><path d="M10.5 12.5l7.5-7.5M16 7l2 2M14.5 8.5l2 2"/></svg><span>Gitleaks</span></div>
      </div>
    </div>
  </div>
</section>

<section id="work" class="wrap">
  <div class="sec-head reveal">
    <div>
      <div class="sec-tag">/ 02 — SELECTED WORK</div>
      <div class="sec-title">Featured Projects</div>
    </div>
    <p class="sec-desc">Five systems — three shipped, two in active build — one throughline: nothing ships an answer without a way to check it.</p>
  </div>

  <div class="project reveal">
    <div class="project-head">
      <div><h3>FinLens</h3><p class="role">Multi-agent RAG for financial filings</p></div>
      <span class="stamp-badge">SHIPPED</span>
    </div>
    <div class="project-body">
      <p>A portfolio-grade financial filing intelligence platform for SEC 10-K/10-Q documents. Uses LangGraph agents with hybrid retrieval (pgvector + BM25 + RRF), routes numeric queries through a dedicated Table Agent, and returns grounded answers with citations while refusing unsupported responses.</p>
      <div class="tags"><span class="tag">LangGraph</span><span class="tag">FastAPI</span><span class="tag">Spring Boot</span><span class="tag">PostgreSQL (pgvector)</span><span class="tag">BM25</span><span class="tag">RAGAS</span><span class="tag">Langfuse</span><span class="tag">Docker</span></div>
    </div>
  </div>

  <div class="project reveal">
    <div class="project-head">
      <div><h3>RAGScope</h3><p class="role">Production RAG evaluation &amp; observability platform</p></div>
      <span class="stamp-badge">SHIPPED</span>
    </div>
    <div class="project-body">
      <p>A production-ready RAG platform for document QA with ingestion, hybrid retrieval, telemetry, hallucination detection, and evaluation dashboards. Tracks retrieval quality, latency, token usage, and groundedness while providing end-to-end observability for RAG pipelines.</p>
      <div class="tags"><span class="tag">Next.js</span><span class="tag">FastAPI</span><span class="tag">PostgreSQL</span><span class="tag">ChromaDB</span><span class="tag">LangChain</span><span class="tag">Google Gemini</span><span class="tag">DeepEval</span><span class="tag">Docker</span></div>
    </div>
  </div>

  <div class="project reveal">
    <div class="project-head">
      <div><h3>Helpzy (LocalPro)</h3><p class="role">Local services marketplace platform</p></div>
      <span class="stamp-badge">SHIPPED</span>
    </div>
    <div class="project-body">
      <p>A full-stack marketplace connecting customers with local service providers. Supports provider discovery, bookings, authentication, profiles, reviews, admin management, and REST APIs with a lightweight SQLite-backed data layer.</p>
      <div class="tags"><span class="tag">Next.js</span><span class="tag">React</span><span class="tag">Tailwind CSS</span><span class="tag">SQLite</span><span class="tag">REST API</span></div>
    </div>
  </div>

  <div class="project reveal">
    <div class="project-head">
      <div><h3>CodeGuardian AI</h3><p class="role">GitHub App for PR security review</p></div>
      <span class="stamp-badge">IN BUILD</span>
    </div>
    <div class="project-body">
      <p>Runs <strong>Semgrep</strong>, <strong>Bandit</strong>, and <strong>Gitleaks</strong> on every pull request, then uses an LLM layer to explain findings in context on a React dashboard.</p>
      <p>Hard rule: every LLM finding must trace back to an actual tool ID — no hallucinated vulnerabilities. Auto-merge is intentionally never implemented; a human stays in the loop.</p>
      <div class="tags"><span class="tag">Semgrep</span><span class="tag">Bandit</span><span class="tag">Gitleaks</span><span class="tag">React</span><span class="tag">GitHub App</span></div>
    </div>
  </div>

  <div class="project reveal">
    <div class="project-head">
      <div><h3>AgriSense</h3><p class="role">Offline-first crop disease detection</p></div>
      <span class="stamp-badge">IN BUILD</span>
    </div>
    <div class="project-body">
      <p>A React Native app running <strong>on-device TFLite</strong> models to detect crop disease without connectivity, paired with a multilingual advisory agent for follow-up guidance.</p>
      <p>Hard rule: no pesticide or treatment advice is ever given without a RAG citation backing it — the agent points to a source, not a guess.</p>
      <div class="tags"><span class="tag">React Native</span><span class="tag">TFLite</span><span class="tag">On-device ML</span><span class="tag">RAG</span></div>
    </div>
  </div>
</section>

<section id="approach" class="wrap">
  <div class="sec-head reveal">
    <div>
      <div class="sec-tag">/ 03 — APPROACH</div>
      <div class="sec-title">How I work</div>
    </div>
    <p class="sec-desc">Four rules, repeated across every project — not a coincidence.</p>
  </div>
  <div class="approach-list reveal">
    <div class="approach-row">
      <span class="idx">01</span>
      <div><h4>Route, don't guess</h4><p>Structured queries go to structured systems. An LLM is the last resort for anything a deterministic path can answer more reliably.</p></div>
    </div>
    <div class="approach-row">
      <span class="idx">02</span>
      <div><h4>Trace every claim</h4><p>An AI-generated finding is only as good as the tool or source it points back to. If it can't be traced, it doesn't ship.</p></div>
    </div>
    <div class="approach-row">
      <span class="idx">03</span>
      <div><h4>Human stays in the loop</h4><p>No auto-merge, no unchecked advice. Automation removes toil, not judgment.</p></div>
    </div>
    <div class="approach-row">
      <span class="idx">04</span>
      <div><h4>AI-assisted, not AI-run</h4><p>I use LLMs to draft phase plans, scaffold boilerplate, and stress-test edge cases during execution — but every architecture call, hard rule, and trace-back requirement is mine. AI speeds up the build; it doesn't replace the judgment behind it.</p></div>
    </div>
  </div>
</section>

<section id="contact" class="contact wrap">
  <div class="contact-head reveal">
    <div class="sec-tag">/ 04 — CONTACT</div>
    <h2 class="contact-big-title">GET IN TOUCH</h2>
    <p class="contact-sub">Open to SDE-1 &amp; AI/ML roles. Always up for a conversation about agentic systems, RAG, or anything I've built.</p>
  </div>

  <div class="contact-grid reveal">
    <div class="contact-left">
      <h3 class="contact-headline">Let's build systems<br>worth <span class="stamp-word">trusting.</span></h3>
      <p class="contact-desc">Open for SDE-1 &amp; AI/ML opportunities, or just a good conversation about how to make LLMs verifiable.</p>
      <div class="contact-btns">
        <a href="/Ankur_Singh_Resume.pdf" target="_blank" rel="noopener" class="btn-solid">Resume ↗</a>
      </div>
    </div>

    <div class="contact-right">
      <a class="link-card" href="https://github.com/AnkurApex" target="_blank" rel="noopener">
        <span class="link-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.71 5.4-5.29 5.69.42.36.78 1.07.78 2.16 0 1.56-.02 2.82-.02 3.2 0 .31.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>
        </span>
        <span class="link-text"><span class="link-label">GITHUB</span><span class="link-url">github.com/AnkurApex</span></span>
      </a>
      <a class="link-card" href="https://www.linkedin.com/in/ankur-singh-b81a41300" target="_blank" rel="noopener">
        <span class="link-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.24 8.25h4.5V23H.24V8.25zM8.5 8.25h4.31v2.01h.06c.6-1.14 2.07-2.34 4.26-2.34 4.55 0 5.39 3 5.39 6.9V23h-4.5v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23H8.5V8.25z"/></svg>
        </span>
        <span class="link-text"><span class="link-label">LINKEDIN</span><span class="link-url">linkedin.com/in/ankur-singh-b81a41300</span></span>
      </a>
      <a class="link-card" href="mailto:ankursinghaf@gmail.com" target="_blank" rel="noopener">
        <span class="link-icon">
          <svg viewBox="0 0 24 24" fill="none"><path d="M3 5h18v14H3z" stroke="currentColor" stroke-width="1.6"/><path d="M3 6l9 7 9-7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
        </span>
        <span class="link-text"><span class="link-label">EMAIL</span><span class="link-url">ankursinghaf@gmail.com</span></span>
      </a>
    </div>
  </div>
</section>

<footer>
  <div class="marquee-strip" style="border:none;padding:0;">
    <div class="foot-track">
      <span class="hi">ANKUR</span><span>SOFTWARE ENGINEER</span><span class="hi">AI/ML</span><span>VERIFY BEFORE YOU ANSWER</span>
      <span class="hi">ANKUR</span><span>SOFTWARE ENGINEER</span><span class="hi">AI/ML</span><span>VERIFY BEFORE YOU ANSWER</span>
    </div>
  </div>
  <div class="wrap foot-bottom">
    <span>© 2026 ANKUR</span>
    <span>BUILT WITH INTENT</span>
  </div>
</footer>

<script>
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); } });
  },{threshold:0.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
</script>`;
