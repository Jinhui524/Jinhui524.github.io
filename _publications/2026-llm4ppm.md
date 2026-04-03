---
title: "LLM4PPM: Pre-Trained and Fine-Tuned Large Language Model for Predictive Process Monitoring"
date: 2026-01-01
venue: "IEEE World Congress on Services (ICWS)"
excerpt: "First-author conference paper on predictive process monitoring with large language models."
citation: 'Jinhui Luo, Jiayi Long, Jiawei Chen, Guosheng Kang*, Yiping Wen, Buqing Cao. "LLM4PPM: Pre-Trained and Fine-Tuned Large Language Model for Predictive Process Monitoring." IEEE World Congress on Services, 2026.'
category: conferences
priority: 1
shortvenue: "ICWS"
level: "CCF B"
status: "Under Review"
framework_variant: "llm4ppm"
framework_caption: "A two-stage LLM pipeline that first learns process semantics from cross-domain stories and then adapts lightweight predictive heads for downstream monitoring tasks."
framework_image: "/images/publications/frameworks/llm4ppm.png"
framework_alt: "Framework of LLM4PPM"
framework_figure_label: "Original framework figure of LLM4PPM."
---

### Overview

This paper proposes **LLM4PPM**, the first foundation large language model for predictive process monitoring with both **zero-shot prediction ability** and **multi-task support**. It addresses two key limitations of existing work: the inability to fully exploit the rich semantics hidden in event data, and the lack of a unified cross-domain large model for predictive process monitoring. The paper is currently **under review at ICWS**.

### My Contribution

I standardized **13 structured event-log datasets** and transformed them into semantic stories to build a large-scale cross-domain corpus. I then implemented the core foundation-model pipeline, including **continuous pre-training** and **multi-task fine-tuning with LoRA**, and further took responsibility for experimental design and the writing of the full paper.
