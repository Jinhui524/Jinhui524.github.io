---
layout: archive
title: "CV / 简历"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div class="archive-note">
  <p>
    这份 CV 页面面向保研与科研联系场景，优先呈现我当前的研究兴趣、项目积累和公开材料。
    它会随着论文、项目和 AI 随笔的更新持续补充，不会停留在一次性完成的静态版本。
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

我希望这个主页不仅能展示我当前已经完成的内容，也能展示我之后会如何继续学习、思考和积累。
对我来说，AI 并不是短期热点，而是一条希望长期走下去的路线。

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
    <p>当前还没有正式公开的论文条目。</p>
    <p>后续会把可以展示的论文、课程研究成果或预印本逐步补到这里。</p>
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
    <p>项目内容正在整理中。</p>
    <p>我会把更能代表自己能力的项目、实现过程和阶段性总结逐步补进来。</p>
  </div>
{% endif %}

AI Notes and Direction
======

- 我会持续记录自己对人工智能的理解、学习路线、论文阅读与方法反思。
- 这个主页希望更像一个“持续生长的个人工作台”，而不是一份只用于投递的静态简历。
- 未来也会逐渐加入兴趣爱好、阅读偏好与更个人化的表达，让老师看到更真实的我。
