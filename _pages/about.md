---
layout: single
permalink: /
title: ""
author_profile: true
excerpt: "A personal homepage for research outreach, notes, honors, and long-term growth in AI."
redirect_from:
  - /about/
  - /about.html
---

<section class="home-story">
  <section class="home-welcome" aria-label="Welcome banner">
    <p class="home-welcome__line">
      <span class="home-welcome__word home-welcome__word--1">Hi There</span>
      <span class="home-welcome__wave" aria-hidden="true">👋</span>
      <span class="home-welcome__word home-welcome__word--2">Welcome to my homepage!</span>
    </p>
  </section>

  <section class="home-story__hero home-text-block">
    <h2>About Me</h2>
    <p class="home-story__lead" data-i18n-html="home.about.lead">
      Hello! I am Jinhui Luo, an undergraduate student at
      <a href="https://www.hnust.edu.cn/" target="_blank" rel="noopener">Hunan University of Science and Technology</a>
      (2023-2027). My current academic interests center on artificial intelligence and its related
      research directions. During my undergraduate studies,
      I have been working at the
      <a href="https://baike.baidu.com/item/%E6%9C%8D%E5%8A%A1%E8%AE%A1%E7%AE%97%E4%B8%8E%E8%BD%AF%E4%BB%B6%E6%9C%8D%E5%8A%A1%E6%96%B0%E6%8A%80%E6%9C%AF%E6%B9%96%E5%8D%97%E7%9C%81%E9%87%8D%E7%82%B9%E5%AE%9E%E9%AA%8C%E5%AE%A4/61317819" target="_blank" rel="noopener">Hunan Provincial Key Laboratory of Service Computing and
      New Software Technology</a>
      under the supervision of
      <a href="https://guoshengkang.github.io/" target="_blank" rel="noopener">Prof. Guosheng Kang</a>.
    </p>
    <p data-i18n="home.about.more">
      So far, I have worked on topics including Transformers, GNN, LSTM, RAG and LLM, and have produced several preliminary research outputs in these areas. 
    </p>
  </section>

  <section class="home-section">
    <h3>Research Interests</h3>
    <ul class="home-bullet-list">
      <li>Natural Language Processing</li>
      <li>Large Language Models</li>
      <li>Deep Learning</li>
      <li>Computer Vision</li>
      <li>Time Series Forecasting</li>
      <li>Vision-Language Models</li>
    </ul>
  </section>

  <section class="home-section">
    <h3>Education</h3>
    <div class="home-text-block">
      <p data-i18n-html="home.education.school">
        I am currently an undergraduate student at
        <a href="https://computer.hnust.edu.cn/" target="_blank" rel="noopener">School of Computer Science and Engineering, Hunan University of Science and Technology</a>,
        majoring in Data Science and Big Data Technology and expected to graduate in 2027.
      </p>
      <p data-i18n-html="home.education.lab">
        I work in
        <a href="https://baike.baidu.com/item/%E6%9C%8D%E5%8A%A1%E8%AE%A1%E7%AE%97%E4%B8%8E%E8%BD%AF%E4%BB%B6%E6%9C%8D%E5%8A%A1%E6%96%B0%E6%8A%80%E6%9C%AF%E6%B9%96%E5%8D%97%E7%9C%81%E9%87%8D%E7%82%B9%E5%AE%9E%E9%AA%8C%E5%AE%A4/61317819" target="_blank" rel="noopener">Hunan Provincial Key Laboratory of Service Computing and
      New Software Technology</a>
        as an undergraduate member, where my recent work focuses on predictive process monitoring.
      </p>

      <details class="ppm-disclosure">
        <summary>
          <span class="ppm-disclosure__label">Research Note</span>
          <span class="ppm-disclosure__title">What is Predictive Process Monitoring?</span>
          <span class="ppm-disclosure__hint"></span>
        </summary>

        <div class="ppm-disclosure__body">
          <p class="ppm-disclosure__lead">
            In business process management (BPM), predictive process monitoring (PPM) asks a forward-looking
            question: given the event trace that has already happened in an ongoing case, what is likely to
            happen next? In practice, this means learning from historical process logs to estimate future
            activities, remaining time, outcomes, or risks before the case is completed.
          </p>

          <div class="ppm-figure-grid">
            <figure class="ppm-figure">
              <figcaption>From BPM to prediction</figcaption>
              <div class="ppm-flow">
                <span>Business Process</span>
                <span class="ppm-arrow" aria-hidden="true">→</span>
                <span>Event Log</span>
                <span class="ppm-arrow" aria-hidden="true">→</span>
                <span>Running Prefix</span>
                <span class="ppm-arrow" aria-hidden="true">→</span>
                <span>Future State</span>
              </div>
            </figure>

            <figure class="ppm-figure">
              <figcaption>Typical prediction targets</figcaption>
              <ul class="ppm-mini-list">
                <li>Next activity</li>
                <li>Remaining time</li>
                <li>Outcome and risk</li>
              </ul>
            </figure>

            <figure class="ppm-figure">
              <figcaption>Method evolution</figcaption>
              <div class="ppm-method-track">
                <span>Rules</span>
                <span>ML</span>
                <span>LSTM</span>
                <span>GNN</span>
                <span>Transformer / LLM</span>
              </div>
            </figure>
          </div>

          <section class="ppm-example">
            <div class="ppm-example__intro">
              <h4>An intuitive example</h4>
              <p>
                Consider an order-handling process in BPM. Each event log row records one completed
                action in an ongoing case. At prediction time, we do not see the full case yet: we only
                observe a prefix of the trace, and the model estimates what will happen next.
              </p>
            </div>

            <div class="ppm-log-panel">
              <table class="ppm-log-table">
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Event</th>
                    <th>Resource</th>
                    <th>Action</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="is-observed">
                    <td>1</td>
                    <td>Create Offer</td>
                    <td>User_17</td>
                    <td>Created</td>
                    <td>408.29</td>
                  </tr>
                  <tr class="is-observed">
                    <td>2</td>
                    <td>Created</td>
                    <td>User_17</td>
                    <td>State change</td>
                    <td>408.29</td>
                  </tr>
                  <tr class="is-observed">
                    <td>3</td>
                    <td>Sent mail</td>
                    <td>User_61</td>
                    <td>State change</td>
                    <td>408.29</td>
                  </tr>
                  <tr class="is-target">
                    <td>4</td>
                    <td>Cancelled</td>
                    <td>User_1</td>
                    <td>State change</td>
                    <td>408.29</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Returned</td>
                    <td>User_28</td>
                    <td>Created</td>
                    <td>408.29</td>
                  </tr>
                </tbody>
              </table>

              <p class="ppm-log-note">
                In this toy example, rows 1-3 are the observed prefix. The model is asked to predict
                row 4 before it actually occurs.
              </p>
            </div>

            <figure class="ppm-forecast">
              <figcaption>How the prediction is made</figcaption>
              <div class="ppm-forecast__track">
                <div class="ppm-forecast__card">
                  <span class="ppm-forecast__step">Step 1</span>
                  <strong>Historical event logs</strong>
                  <p>Collect completed process traces from past cases.</p>
                </div>
                <div class="ppm-forecast__arrow" aria-hidden="true">→</div>
                <div class="ppm-forecast__card">
                  <span class="ppm-forecast__step">Step 2</span>
                  <strong>Prefix encoding</strong>
                  <p>Create Offer → Created → Sent mail</p>
                </div>
                <div class="ppm-forecast__arrow" aria-hidden="true">→</div>
                <div class="ppm-forecast__card">
                  <span class="ppm-forecast__step">Step 3</span>
                  <strong>Prediction model</strong>
                  <p>LSTM / GNN / Transformer learns process patterns.</p>
                </div>
                <div class="ppm-forecast__arrow" aria-hidden="true">→</div>
                <div class="ppm-forecast__card is-highlight">
                  <span class="ppm-forecast__step">Output</span>
                  <strong>Next event prediction</strong>
                  <p>Most likely next event: <em>Cancelled</em></p>
                </div>
              </div>
            </figure>
          </section>

          <div class="ppm-topic-grid">
            <section class="ppm-topic">
              <h4>Problem Definition</h4>
              <p>
                Given a partially executed case, predict a future attribute of that case from its observed
                prefix, event sequence, timestamps, and contextual information.
              </p>
            </section>

            <section class="ppm-topic">
              <h4>Classic Methods</h4>
              <p>
                Representative approaches include process-mining features, statistical learning, sequence
                models such as LSTM, graph-based models for richer structural relations, and more recent
                Transformer, RAG, and LLM-enhanced methods.
              </p>
            </section>

            <section class="ppm-topic">
              <h4>Why It Matters</h4>
              <p>
                PPM turns process data into early signals for intervention. It can help organizations
                anticipate delays, optimize resources, improve service quality, and support more proactive
                decision-making in BPM systems.
              </p>
            </section>
          </div>
        </div>
      </details>
    </div>
  </section>

  <!-- <section class="home-section">
    <h3>News</h3>
    <ul class="home-news-list">
      <li>
        <span class="home-news-item__accent">[2026.04]</span>
        Replace this line with your newest update, such as a project milestone, research progress, or homepage revision.
      </li>
      <li>
        <span class="home-news-item__accent">[2026.03]</span>
        Add one concise update about your recent work, study progress, competition, or paper reading direction.
      </li>
      <li>
        <span class="home-news-item__accent">[2026.02]</span>
        You can also use one line here to mention what you are currently focusing on next.
      </li>
    </ul>
  </section> -->

  <section class="home-section">
    <h3>Awards</h3>
    <ul class="home-news-list home-news-list--awards">
      <li>
        <span class="home-news-item__accent">[National]</span>
        Second Prize, Programming Challenge, 7th Chuanzhi Cup National IT Skills Competition.
      </li>
      <li>
        <span class="home-news-item__accent">[National]</span>
        Third Prize, Programming Skills Track, RAICOM Robotics Developer Competition.
      </li>
      <li>
        <span class="home-news-item__accent">[Provincial]</span>
        First Prize, 21st Hunan Provincial Collegiate Programming Contest.
      </li>
      <li>
        <span class="home-news-item__accent">[Provincial]</span>
        Second Prize, 16th Lanqiao Cup Software and Information Technology Talent Competition.
      </li>
    </ul>
  </section>

  <!-- <section class="home-section">
    <h3>Notes & Writing</h3>
    <div class="home-text-block">
      <p>
        I plan to use this homepage as a quiet archive for paper notes, learning routes,
        project reflections, and my evolving understanding of artificial intelligence.
      </p>
      <p>
        The main sections such as Publications, Projects, AI Notes, and CV are already placed in the top navigation,
        so I prefer to keep the homepage itself cleaner and more introduction-oriented.
      </p>
    </div>
  </section> -->

  <!-- <section class="home-section">
    <h3>Interests</h3>
    <div class="home-text-block">
      <p>
        Beyond research and projects, I also want this page to keep a little space for my interests,
        reading taste, aesthetics, and the small details that make a homepage feel human.
      </p>
    </div>
  </section> -->

  <!-- <section class="home-section home-section--last">
    <h3>More Coming Soon</h3>
    <div class="home-text-block">
      <p>
        Later, I would like to add more sections here, such as selected notes, long-term plans,
        project retrospectives, and other parts of my learning journey.
      </p>
    </div>
  </section>
</section> -->
