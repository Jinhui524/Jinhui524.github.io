---
layout: splash
permalink: /
title: "Jinhui Luo"
author_profile: false
excerpt: "A personal AI-themed homepage for publications, projects, notes, and a growing CV."
redirect_from:
  - /about/
  - /about.html
---

<section class="outreach-home">
  <section class="outreach-hero">
    <div class="outreach-hero__content">
      <p class="outreach-kicker">AI RESEARCH OUTREACH / PERSONAL HOMEPAGE</p>
      <h1>Jinhui Luo</h1>
      <p class="outreach-hero__lead">
        I am building this site as a lightweight personal homepage for graduate outreach:
        a place where professors can quickly browse my publications, projects, AI notes, and CV,
        while also getting a sense of how I think, learn, and grow.
      </p>
      <p class="outreach-hero__sublead">
        It is not meant to be a stiff academic profile. I want it to feel more personal, more alive,
        and a little more memorable.
      </p>

      <div class="outreach-hero__meta">
        <span>{{ site.author.employer }}</span>
        <span>{{ site.author.location }}</span>
        <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>
      </div>

      <div class="outreach-actions">
        <a class="btn outreach-home__btn" href="{{ '/cv/' | relative_url }}">View CV</a>
        <a class="btn outreach-home__btn outreach-home__btn--ghost" href="{{ '/projects/' | relative_url }}">See Projects</a>
      </div>
    </div>

    <aside class="outreach-hero__panel">
      <div class="outreach-portrait-shell">
        <img
          src="{{ '/images/kiyana.jpg' | relative_url }}"
          alt="{{ site.author.name }}"
          class="outreach-portrait"
        >
      </div>
      <div class="outreach-field-note">
        <span class="outreach-field-note__label">Field Note</span>
        <p>
          I like learning AI by building, reading, and writing in public.
          This homepage will keep track of that process.
        </p>
      </div>
    </aside>
  </section>

  <section class="outreach-dock">
    <a class="outreach-dock__card" href="{{ '/publications/' | relative_url }}">
      <span class="outreach-dock__index">01</span>
      <h2>Publications</h2>
      <p>Research papers, course projects, preprints, and any formal writing I can share.</p>
      <span class="outreach-dock__arrow">Explore</span>
    </a>

    <a class="outreach-dock__card" href="{{ '/projects/' | relative_url }}">
      <span class="outreach-dock__index">02</span>
      <h2>Projects</h2>
      <p>Things I built, how I built them, and what they taught me about systems and ideas.</p>
      <span class="outreach-dock__arrow">Explore</span>
    </a>

    <a class="outreach-dock__card" href="{{ '/notes/' | relative_url }}">
      <span class="outreach-dock__index">03</span>
      <h2>AI Notes</h2>
      <p>My reading logs, AI reflections, learning routes, and evolving thoughts about the field.</p>
      <span class="outreach-dock__arrow">Explore</span>
    </a>

    <a class="outreach-dock__card" href="{{ '/cv/' | relative_url }}">
      <span class="outreach-dock__index">04</span>
      <h2>CV</h2>
      <p>A concise overview of my background, interests, public materials, and current direction.</p>
      <span class="outreach-dock__arrow">Explore</span>
    </a>
  </section>

  <section class="outreach-duo">
    <article class="outreach-note-card outreach-note-card--warm">
      <p class="outreach-kicker">CURRENT INTERESTS</p>
      <h2>What I am growing into</h2>
      <p>
        My main interests are artificial intelligence, machine learning, large language models,
        and project-driven learning. I am especially drawn to the kind of work that connects
        theory, implementation, and reflection.
      </p>
    </article>

    <article class="outreach-note-card outreach-note-card--tilted">
      <p class="outreach-kicker">WHY THIS SITE</p>
      <h2>Not just a CV mirror</h2>
      <p>
        I want this homepage to show more than a list of achievements.
        It should also reveal how I study, what I care about, and why I want to keep walking deeper into AI.
      </p>
    </article>
  </section>

  <section class="outreach-strip">
    <div class="outreach-strip__text">
      <p class="outreach-kicker">NEXT</p>
      <h2>What will grow here next</h2>
      <p>
        More AI notes, more project write-ups, more reading trails, and a clearer long-term roadmap.
        I want this site to keep evolving with me.
      </p>
    </div>
    <div class="outreach-actions">
      <a class="btn outreach-home__btn outreach-home__btn--light" href="{{ '/notes/' | relative_url }}">Read Notes</a>
      <a class="btn outreach-home__btn outreach-home__btn--ghost-light" href="mailto:{{ site.author.email }}">Contact Me</a>
    </div>
  </section>
</section>
