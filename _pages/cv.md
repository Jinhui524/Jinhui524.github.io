---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
show_page_title: false
redirect_from:
  - /resume
---

{% include base_path %}

{% assign sorted_publications = site.publications | sort: "priority" %}
{% assign sorted_projects = site.portfolio | sort: "priority" %}

<section class="cv-page">
  <section class="cv-hero">
    <p class="cv-kicker">Graduate Outreach / Academic CV</p>
    <h2>{{ site.author.name }}</h2>
    <p class="cv-summary">
      Undergraduate student at Hunan University of Science and Technology (2023-2027), currently
      working at the Hunan Provincial Key Laboratory of Service Computing and New Software Technology
      under the supervision of Prof. Guosheng Kang. My research focuses on artificial intelligence,
      predictive process monitoring, graph learning, retrieval-augmented generation, and large
      language models.
    </p>

    <div class="cv-actions">
      <a class="cv-action" href="mailto:{{ site.author.email }}">Email</a>
      <a class="cv-action" href="{{ base_path }}/publications/">Publications</a>
      <a class="cv-action" href="{{ base_path }}/projects/">Projects</a>
      <a class="cv-action" href="{{ base_path }}/notes/">AI Notes</a>
    </div>
  </section>

  <div class="cv-grid">
    <div class="cv-card">
      <span class="cv-card__label">Affiliation</span>
      <strong>
        {% if site.author.employer_uri %}
          <a href="{{ site.author.employer_uri }}" target="_blank" rel="noopener noreferrer">{{ site.author.employer }}</a>
        {% else %}
          {{ site.author.employer }}
        {% endif %}
      </strong>
    </div>
    <div class="cv-card">
      <span class="cv-card__label">Laboratory</span>
      <strong>Hunan Provincial Key Laboratory of Service Computing and New Software Technology</strong>
    </div>
    <div class="cv-card">
      <span class="cv-card__label">Research Focus</span>
      <strong>AI, Process Prediction, Graph Learning, RAG, LLMs</strong>
    </div>
    <div class="cv-card">
      <span class="cv-card__label">Contact</span>
      <strong><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></strong>
    </div>
  </div>

  <section class="cv-section">
    <div class="cv-section__head">
      <p class="cv-section__eyebrow">Academic Focus</p>
      <h3>Research Interests</h3>
    </div>
    <div class="cv-chip-list">
      <span class="cv-chip">Natural Language Processing</span>
      <span class="cv-chip">Large Language Models</span>
      <span class="cv-chip">Deep Learning</span>
      <span class="cv-chip">Computer Vision</span>
      <span class="cv-chip">Time Series Forecasting</span>
      <span class="cv-chip">Vision-Language Models</span>
    </div>
  </section>

  <section class="cv-section">
    <div class="cv-section__head">
      <p class="cv-section__eyebrow">Research Output</p>
      <h3>Selected Publications</h3>
    </div>
    {% if sorted_publications.size > 0 %}
      <div class="cv-publication-list">
        {% for post in sorted_publications %}
          {% include archive-publication-compact.html %}
        {% endfor %}
      </div>
    {% else %}
      <div class="outreach-empty">
        <p>There are no public publication entries here yet.</p>
        <p>I will gradually add papers, course research, or preprints that can be shared openly.</p>
      </div>
    {% endif %}
  </section>

  <section class="cv-section">
    <div class="cv-section__head">
      <p class="cv-section__eyebrow">Implementation</p>
      <h3>Selected Projects</h3>
    </div>
    {% if sorted_projects.size > 0 %}
      <div class="cv-project-list">
        {% for post in sorted_projects %}
          <article class="cv-project-card">
            <h4 class="cv-project__title">
              <a href="{{ base_path }}{{ post.url }}">{{ post.title }}</a>
            </h4>

            {% if post.project_level or post.project_role %}
              <p class="cv-project__meta">
                {% if post.project_level %}
                  <span class="project-summary__tag">{{ post.project_level }}</span>
                {% endif %}
                {% if post.project_role %}
                  <span class="project-summary__tag">{{ post.project_role }}</span>
                {% endif %}
              </p>
            {% endif %}

            {% if post.excerpt %}
              <p class="cv-project__excerpt">{{ post.excerpt | strip_html | strip_newlines }}</p>
            {% endif %}

            {% if post.tech_keywords %}
              <p class="cv-project__keywords">
                <strong>Keywords:</strong> {{ post.tech_keywords }}
              </p>
            {% endif %}
          </article>
        {% endfor %}
      </div>
    {% else %}
      <div class="outreach-empty">
        <p>Project entries are still being curated.</p>
        <p>I will gradually add the projects, implementation process, and stage-by-stage reflections that represent me best.</p>
      </div>
    {% endif %}
  </section>

  <section class="cv-section">
    <div class="cv-section__head">
      <p class="cv-section__eyebrow">Recognition</p>
      <h3>Awards</h3>
    </div>
    <ul class="cv-award-list">
      <li class="cv-award-item">
        <span class="cv-award__title">Second Prize, Programming Challenge, 7th Chuanzhi Cup National IT Skills Competition</span>
        <span class="cv-award__meta">National Level</span>
      </li>
      <li class="cv-award-item">
        <span class="cv-award__title">Third Prize, Programming Skills Track, RAICOM Robotics Developer Competition</span>
        <span class="cv-award__meta">National Level</span>
      </li>
      <li class="cv-award-item">
        <span class="cv-award__title">First Prize, 21st Hunan Provincial Collegiate Programming Contest</span>
        <span class="cv-award__meta">Provincial Level</span>
      </li>
      <li class="cv-award-item">
        <span class="cv-award__title">Second Prize, 16th Lanqiao Cup Software and Information Technology Talent Competition</span>
        <span class="cv-award__meta">Provincial Level</span>
      </li>
    </ul>
  </section>
</section>
