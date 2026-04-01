---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div class="archive-note">
  <p>
    This CV page is meant for graduate outreach and research contact.
    It focuses on my current interests, project accumulation, and public materials,
    and will keep evolving alongside my publications, projects, and AI notes.
  </p>
</div>

<div class="cv-grid">
  <div class="cv-card">
    <span class="cv-card__label">Name</span>
    <strong>{{ site.author.name }}</strong>
  </div>
  <div class="cv-card">
    <span class="cv-card__label">Affiliation</span>
    <strong>{{ site.author.employer }}</strong>
  </div>
  <div class="cv-card">
    <span class="cv-card__label">Location</span>
    <strong>{{ site.author.location }}</strong>
  </div>
  <div class="cv-card">
    <span class="cv-card__label">Contact</span>
    <strong><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></strong>
  </div>
</div>

Profile
======

I want this homepage to show not only what I have already done, but also how I plan to keep learning, thinking, and growing.
For me, AI is not a short-lived trend. It is a long path I want to keep walking.

Research Interests
======

- Artificial Intelligence
- Large Language Models
- Machine learning and intelligent systems
- Project-based learning, note-taking, and research-oriented growth

Selected Publications
======

{% if site.publications.size > 0 %}
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
{% else %}
  <div class="outreach-empty">
    <p>There are no public publication entries here yet.</p>
    <p>I will gradually add papers, course research, or preprints that can be shared openly.</p>
  </div>
{% endif %}

Selected Projects
======

{% if site.portfolio.size > 0 %}
  <ul class="cv-links">
    {% for post in site.portfolio reversed %}
      <li>
        <a href="{{ base_path }}{{ post.url }}">{{ post.title }}</a>
        {% if post.excerpt %} - {{ post.excerpt | strip_html | strip_newlines }}{% endif %}
      </li>
    {% endfor %}
  </ul>
{% else %}
  <div class="outreach-empty">
    <p>Project entries are still being curated.</p>
    <p>I will gradually add the projects, implementation process, and stage-by-stage reflections that represent me best.</p>
  </div>
{% endif %}

AI Notes and Direction
======

- I plan to keep writing about my understanding of AI, learning routes, paper reading, and method reflections.
- I want this homepage to feel like a growing personal workspace, not just a static CV page.
- Over time I also want to add hobbies, reading taste, and more personal expression so the site feels more human and more honest.
