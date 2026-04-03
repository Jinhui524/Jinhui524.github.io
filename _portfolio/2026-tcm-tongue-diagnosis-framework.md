---
title: "望舌观体: A Multi-Platform TCM Tongue Diagnosis Framework Based on ESP32 and Deep Learning"
permalink: /projects/tcm-tongue-diagnosis-framework/
excerpt: "A national-level undergraduate innovation project on intelligent tongue diagnosis using ESP32 and deep learning."
project_level: "National Undergraduate Innovation Project"
project_role: "Core Member"
priority: 1
tech_keywords: "YOLOv11, U²-Net, ResNet50, Optuna, ESP32, Deep Learning, TCM Tongue Diagnosis"
overview: >-
  This project focuses on tongue diagnosis in traditional Chinese medicine and develops a
  multi-platform intelligent framework that integrates constitution theory with deep learning.
  To address the limitations of traditional tongue inspection, including strong dependence on
  practitioner experience, inconsistent standards, and sensitivity to lighting conditions,
  the system combines YOLOv11-based tongue detection, U²-Net image segmentation, and
  ResNet50-based constitution classification. It also builds a standardized dataset of 3,000
  tongue images collected under different lighting conditions across nine constitution types,
  providing a practical path toward more objective and standardized tongue diagnosis and
  exploring its potential for mobile-assisted diagnostic applications.
contribution: >-
  I was mainly responsible for the core deep learning component of the project. I completed
  tongue-image annotation and classification, defined the labeling scheme, and split the
  3,000 samples into training and test sets. I then applied YOLOv11, U²-Net, and ResNet50
  to the three major modules of detection, segmentation, and constitution classification,
  respectively, and further improved performance through automated hyperparameter tuning
  with Optuna. In addition, I conducted systematic experimental evaluation using metrics
  such as mAP50, Precision, and Recall to validate the overall framework under complex scenarios.
---

## Project Overview

This project focuses on tongue diagnosis in traditional Chinese medicine and develops a
multi-platform intelligent framework that integrates constitution theory with deep learning.
To address the limitations of traditional tongue inspection, including strong dependence on
practitioner experience, inconsistent standards, and sensitivity to lighting conditions,
the system combines YOLOv11-based tongue detection, U²-Net image segmentation, and
ResNet50-based constitution classification.

It also builds a standardized dataset of 3,000 tongue images collected under different
lighting conditions across nine constitution types, providing a practical path toward more
objective and standardized tongue diagnosis and exploring its potential for mobile-assisted
diagnostic applications.

## My Contribution

I was mainly responsible for the core deep learning component of the project. I completed
tongue-image annotation and classification, defined the labeling scheme, and split the
3,000 samples into training and test sets.

I then applied YOLOv11, U²-Net, and ResNet50 to the three major modules of detection,
segmentation, and constitution classification, respectively, and further improved performance
through automated hyperparameter tuning with Optuna. In addition, I conducted systematic
experimental evaluation using metrics such as mAP50, Precision, and Recall to validate the
overall framework under complex scenarios.
