---
layout: single
title: "AI学习路线"
permalink: /notes/ai-learning-roadmap/
date: 2026-04-14
author_profile: true
show_page_title: false
excerpt: "一份面向从零起步读者的人工智能学习路线图，覆盖数学基础、计算机基础、学习工具、Python、机器学习、深度学习与大模型。"
---

<section class="roadmap-note">
  <section class="roadmap-note__hero">
    <p class="roadmap-note__eyebrow">AI Notes / 学习路线</p>
    <h2>AI学习路线</h2>
    <p class="roadmap-note__lead">
      这是一份偏长期主义的 AI 学习路线。它既可以作为从零起步读者的顺序式学习地图，
      也可以作为已经接触过人工智能的同学进行自查与补漏的 checklist。
    </p>
    <div class="roadmap-note__meta">
      <span>适合对象：freshman / junior / senior</span>
      <span>阅读方式：从上到下逐步推进</span>
      <span>核心目标：建立系统化 AI 学习框架</span>
    </div>
  </section>

  <nav class="roadmap-map" aria-label="AI learning roadmap">
    <a href="#before" class="roadmap-map__item">
      <span class="roadmap-map__index">00</span>
      <strong>开始之前</strong>
    </a>
    <a href="#math" class="roadmap-map__item">
      <span class="roadmap-map__index">01</span>
      <strong>数学基础</strong>
    </a>
    <a href="#cs" class="roadmap-map__item">
      <span class="roadmap-map__index">02</span>
      <strong>计算机基础</strong>
    </a>
    <a href="#tools" class="roadmap-map__item">
      <span class="roadmap-map__index">03</span>
      <strong>学习工具</strong>
    </a>
    <a href="#python" class="roadmap-map__item">
      <span class="roadmap-map__index">04</span>
      <strong>人工智能语言</strong>
    </a>
    <a href="#mlcv" class="roadmap-map__item">
      <span class="roadmap-map__index">05</span>
      <strong>机器学习与传统CV</strong>
    </a>
    <a href="#dl" class="roadmap-map__item">
      <span class="roadmap-map__index">06</span>
      <strong>深度学习</strong>
    </a>
    <a href="#ending" class="roadmap-map__item">
      <span class="roadmap-map__index">07</span>
      <strong>后记</strong>
    </a>
  </nav>

  <section class="roadmap-callout">
    <strong>如何使用这篇路线？</strong>
    <p>
      如果你是刚入门的读者，可以把它当作一份顺序式路线图；如果你已经有一定经验，
      可以把它看作一次阶段性盘点，看看还有哪些模块尚未真正补齐。
    </p>
  </section>

  <details class="roadmap-fold" id="before" open>
    <summary>
      <span class="roadmap-fold__index">00</span>
      <span class="roadmap-fold__title">开始之前</span>
      <span class="roadmap-fold__hint">点击展开 / 收起</span>
    </summary>
    <div class="roadmap-fold__body">
      <p>
        该学习路线仅代表笔者对于人工智能领域的理解和观点，也代表着笔者的一次“新生”。
        假设你是一名此前仅接受过高中教育、没有接触过计算机相关内容的大一新生，
        那么你可以按照这里的顺序进行学习；而对于已经有一定积累的人来说，
        这篇内容也可以作为一个 checklist。
      </p>
      <p>
        在决定把哪一门技术作为大学阶段的主要学习方向之前，认真考虑它的利弊、
        未来前景，以及你为什么愿意长期投入，是非常必要的。人工智能是当下最火热、
        也是对现有计算机技术影响最深刻的方向之一，它确实可能重塑很多岗位，
        但这也意味着它对个人能力的要求会更高。
      </p>
      <p>
        对于普通本科生而言，单纯依靠本科学历去竞争顶尖 AI 岗位并不容易，
        但如果你已经明确希望继续读研甚至读博，那么人工智能会成为一个极具优势的方向。
        尤其是在保研、自荐、科研经历构建方面，AI 相关研究往往更容易形成高质量成果，
        也更有利于你申请更高层次的平台。
      </p>
      <p>
        因此，这篇路线并不是在鼓励你盲目追逐热门，而是希望你先想清楚：
        你是否真的愿意沿着这条路长期走下去。如果答案是肯定的，那么下面的内容
        会尽可能帮你少走一些弯路。
      </p>
    </div>
  </details>

  <section class="roadmap-section" id="main-part">
    <div class="roadmap-section__head">
      <p class="roadmap-section__eyebrow">Main Route / 主线</p>
      <h3>正片开始</h3>
    </div>
    <p class="roadmap-section__lead">
      朋友，既然你已经选择了这条路，那么在正式学习任何一门学科之前，
      做好长期规划就显得尤其重要。下面这条路线，是在大学三年的摸索、
      试错与复盘后总结出的一个相对完整的版本。
    </p>
    <p>
      它并不是唯一正确的答案，也可能对个人执行力提出较高要求，但它至少提供了一条
      清晰的主线：从基础，到工具，到编码，到深度学习，再到大模型与科研理解。
      你最终希望抵达的，不只是“会用 AI”，而是能够真正把它变成自己的能力体系。
    </p>
  </section>

  <details class="roadmap-fold" id="math" open>
    <summary>
      <span class="roadmap-fold__index">01</span>
      <span class="roadmap-fold__title">数学基础</span>
      <span class="roadmap-fold__hint">基础中的基础</span>
    </summary>
    <div class="roadmap-fold__body">
      <p>
        对人工智能最密切相关的基础课程是高等数学、线性代数和概率论。
        希望你能在大一阶段认真学好这些课程，并尽量在期末考试中取得较高成绩，
        因为这不仅关系到绩点，也会直接影响你日后阅读论文和理解模型的能力。
      </p>
      <p>
        在辅助资料上，可以结合 B 站的宋浩数学课程以及 3Blue1Brown 的讲解，
        前者更适合补课堂理解，后者更适合建立直观感受。就 AI 学习而言，
        你并不需要把所有数学内容都推到极致，而是优先掌握那些最常反复出现的核心知识：
        多元微积分、矩阵乘法与求逆、概率论中的贝叶斯相关思想等。
      </p>
      <p>
        这些知识已经足以支撑你理解大多数 AI 论文的核心思想。除非你未来进入的是
        对数学推导要求非常高的方向，否则没有必要因为“怕基础不扎实”而无限延长
        预备期。对于很多 AI 学习者来说，数学更重要的不是“学得多深”，而是能否
        在真正需要的时候理解并调用关键概念。
      </p>
      <ul class="roadmap-resource-list">
        <li><a href="https://space.bilibili.com/66607740" target="_blank" rel="noopener">宋浩数学课程</a></li>
        <li><a href="https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" target="_blank" rel="noopener">3Blue1Brown 相关讲解</a></li>
      </ul>
    </div>
  </details>

  <details class="roadmap-fold" id="cs">
    <summary>
      <span class="roadmap-fold__index">02</span>
      <span class="roadmap-fold__title">计算机基础</span>
      <span class="roadmap-fold__hint">先把环境理解清楚</span>
    </summary>
    <div class="roadmap-fold__body">
      <p>
        对刚进入大学的 freshman 来说，没有系统接触过电脑和开发环境是再正常不过的事情。
        在 AI 学习早期，你并不需要为了训练模型立刻购买高端 GPU 电脑，因为很多时候
        算力可以通过如 AutoDL 这样的算力平台进行租用。
      </p>
      <p>
        操作系统方面，建议初学者优先使用 Windows，因为资料最多、上手最稳、办公体验也更轻便。
        当你对开发流程逐渐熟悉后，再进一步接触 macOS 或 Linux，会更加自然。
        对于计算机基础知识，如果没有影响你正常学习与开发，不一定要一开始钻得很深，
        但仍建议系统地补一下整体计算机认知，避免出现非常基础的知识空白。
      </p>
      <ul class="roadmap-resource-list">
        <li><a href="https://www.autodl.com/home" target="_blank" rel="noopener">AutoDL</a></li>
        <li><a href="https://www.criwits.top/missing/" target="_blank" rel="noopener">缺失的那门计算机课</a></li>
      </ul>
    </div>
  </details>

  <details class="roadmap-fold" id="tools">
    <summary>
      <span class="roadmap-fold__index">03</span>
      <span class="roadmap-fold__title">学习工具</span>
      <span class="roadmap-fold__hint">把生产力提前搭起来</span>
    </summary>
    <div class="roadmap-fold__body">
      <p>
        在今天，是否能高效地使用大模型，几乎已经成为学习计算机科学的一项关键能力。
        相较于传统的“查文档、逛论坛、慢慢 debug”的方式，Chat with LLM 对学习效率的提升，
        更像是一种生产力范式的变化。
      </p>
      <p>
        模型选择上，如果条件允许，笔者更推荐使用国外的大模型服务。日常学习和写代码，
        Gemini Pro 已经足够强；如果你进入更深入的科研代码开发，ChatGPT Plus / Pro
        也会更合适。国内模型方面，Qwen、GLM、DeepSeek 也都可以作为备选。
      </p>
      <p>
        开发环境上，推荐尽量把 VS Code 当作你的核心 IDE。相比于为不同语言分别安装
        多个重量级 IDE，VS Code 通过“本地环境 + 插件”的组合方式更轻量也更高效。
        另外，在写代码和记笔记时，Markdown 是非常值得尽早掌握的技能，而 Typora
        则是相对舒服的可视化编辑工具。
      </p>
      <ul class="roadmap-resource-list">
        <li><a href="https://gemini.google.com/" target="_blank" rel="noopener">Gemini Pro</a></li>
        <li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener">Visual Studio Code</a></li>
        <li><a href="https://chatgpt.com/codex" target="_blank" rel="noopener">Codex</a></li>
        <li><a href="https://claude.com/product/claude-code" target="_blank" rel="noopener">Claude Code</a></li>
        <li><a href="https://www.cursor.com/" target="_blank" rel="noopener">Cursor</a></li>
        <li><a href="https://markdown.com.cn/intro.html" target="_blank" rel="noopener">Markdown 官网</a></li>
        <li><a href="https://www.typora.io/" target="_blank" rel="noopener">Typora</a></li>
      </ul>
    </div>
  </details>

  <details class="roadmap-fold" id="python">
    <summary>
      <span class="roadmap-fold__index">04</span>
      <span class="roadmap-fold__title">人工智能语言</span>
      <span class="roadmap-fold__hint">Python 是必修项</span>
    </summary>
    <div class="roadmap-fold__body">
      <p>
        对深度学习和人工智能研究者来说，Python 几乎是唯一的主流选择。
        即便你已经熟悉 C/C++，想真正进入 AI 的训练、推理和论文复现工作流，
        Python 仍然是绕不过去的一门语言。
      </p>
      <p>
        其实 Python 本身并不难，更重要的是理解围绕它形成的 AI 技术栈：
        使用 MiniConda 或 uv 管理环境，用 PyTorch 搭建模型和训练流程，
        对于 LLM、VLM、VLA 等现代方向，则大量依赖 Transformers 库。
        如果你需要部署大模型服务，目前的主流框架之一是 vLLM。
      </p>
      <p>
        与其花太多时间上冗长的 Python 网课，不如在配置好环境后直接开始实践，
        边写边问、边做边查，结合大模型辅助学习，会更高效也更贴近真实工作流。
      </p>
    </div>
  </details>

  <details class="roadmap-fold" id="mlcv">
    <summary>
      <span class="roadmap-fold__index">05</span>
      <span class="roadmap-fold__title">机器学习与传统计算机视觉</span>
      <span class="roadmap-fold__hint">理解它们，但不必困在这里</span>
    </summary>
    <div class="roadmap-fold__body">
      <p>
        机器学习和传统计算机视觉方法在今天并不是 AI 学习路径中的主流终点，
        但它们仍然是很多现代方法的思想来源。在学习路线上，笔者并不建议把这部分
        作为最短路径中的重点，但建议对其核心算法和思维方式有清晰认识。
      </p>
      <p>
        书籍方面，相较于“西瓜书”，笔者更推荐李航老师的《统计学习方法》；
        传统计算机视觉则推荐冈萨雷斯的《数字图像处理》。如果你想看课程，
        可以参考吴恩达的 CS229，但这门课数学推导相对较硬核，更适合数学基础较强、
        且希望从底层理解算法的人。
      </p>
      <p>
        更实际的建议是：了解几种最经典的算法，然后尽快上手做一些小型数据任务，
        比如 Kaggle 上的入门项目。对今天的学习者而言，更重要的是知道这些经典方法
        什么时候仍然有用，而不是花过多时间反复横向比较各种入门视频。
      </p>
      <ul class="roadmap-resource-list">
        <li><a href="https://www.youtube.com/watch?v=jGwO_UgTS7I&list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU" target="_blank" rel="noopener">CS229</a></li>
      </ul>
    </div>
  </details>

  <details class="roadmap-fold" id="dl" open>
    <summary>
      <span class="roadmap-fold__index">06</span>
      <span class="roadmap-fold__title">深度学习</span>
      <span class="roadmap-fold__hint">真正进入 AI 的核心主线</span>
    </summary>
    <div class="roadmap-fold__body">
      <p>
        当你走到深度学习这一步时，实际上就已经正式进入人工智能这门学科的核心地带了。
        这时你需要对神经网络、模型权重、训练流程、损失函数、表征学习等概念形成更系统的理解，
        并逐渐把这些知识串联成整体。
      </p>
      <p>
        在课程选择上，强烈推荐 Stanford 的 CS231n。它虽然以计算机视觉闻名，
        但对于泛深度学习的很多基础内容也讲得非常系统，至今仍然是极好的入门材料。
        如果你希望看中文内容，则可以配合李沐老师的《动手学深度学习》，快速过一遍知识点。
        如果觉得起步偏难，也可以用“小土堆 PyTorch 快速入门”作为一个过渡。
      </p>
      <p>
        在具备现代深度学习基础后，再进一步学习大模型相关课程会更自然。
        这里推荐 Stanford 的 CS336。与此同时，建议你动手做一些小而完整的项目，
        比如手写一个 MNIST 识别器，或者自己实现一个 ViT，用这些练习来真正建立
        “AI + 编码 + 工具链 + 大模型辅助”的完整工作流。
      </p>
      <ul class="roadmap-resource-list">
        <li><a href="https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16" target="_blank" rel="noopener">CS231n</a></li>
        <li><a href="https://www.bilibili.com/video/BV1if4y147hS/" target="_blank" rel="noopener">动手学深度学习</a></li>
        <li><a href="https://www.bilibili.com/video/BV1hE411t7RN/?spm_id_from=333.337.search-card.all.click" target="_blank" rel="noopener">PyTorch 深度学习快速入门</a></li>
        <li><a href="https://www.youtube.com/playlist?list=PLoROMvodv4rOY23Y0BoGoBGgQ1zmU_MT_" target="_blank" rel="noopener">CS336</a></li>
      </ul>
    </div>
  </details>

  <details class="roadmap-fold" id="ending">
    <summary>
      <span class="roadmap-fold__index">07</span>
      <span class="roadmap-fold__title">后记</span>
      <span class="roadmap-fold__hint">写给未来的自己</span>
    </summary>
    <div class="roadmap-fold__body">
      <p>
        写完第一版 AI 学习路线时，笔者正准备开始保研套磁，时间比较紧张，
        所以有些部分还不够细致。后续这篇路线还会继续更新，也可能进一步延伸出
        关于论文、科研和保研准备的更多文章。
      </p>
      <p>
        如果你能认真走完这条路线，那么它给你的不会只是一堆知识点，
        更重要的是一种能够不断自我搭建学习体系的能力。希望你可以坚持下去，
        持续做更有意义的事情。
      </p>
      <p class="roadmap-note__update">Last updated: 2026.04.14</p>
    </div>
  </details>
</section>
