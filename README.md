# Dhanush Pillay

Source code for my personal portfolio website.

Designed and developed from scratch.

## Branch flow

`feature/*` -> PR -> `staging` (verify on staging URL) -> PR -> `main` (production).

`main` and `staging` are protected: lint, typecheck, build, and Lighthouse
(accessibility + best-practices >= 90) must pass before merge.
