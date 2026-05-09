# g3n3sis3.github.io — Portfolio

Personal portfolio of **Miguel Robledo Fernández** (@g3n3sis3), Cybersecurity Analyst.

Live at → [g3n3sis3.github.io](https://g3n3sis3.github.io)

---

## Stack

- **React + Vite** — UI and build
- **JetBrains Mono** — typography
- **GitHub Actions** — CI/CD auto-deploy on push to `main`

## Structure

```
src/
├── components/
│   ├── atoms/        # EffectsBackground, ScrambleText, ProjectModal...
│   └── layout/       # ExperienceRow, CertRow, ProjectCard...
├── data/
│   └── portfolio.json  # ← edit this to update all content
└── styles/
    └── global.css
public/
├── avatar2.png
└── cv.pdf
```

## Updating content

All personal data lives in **`src/data/portfolio.json`** — experience, skills, certifications, projects, bio. Edit that file and push; the site deploys automatically.

To add a new project, add a block to the `projects` array:

```json
{
  "id": "project-id",
  "code": "P-02",
  "name_es": "Nombre en español",
  "name_en": "Name in English",
  "summary_es": "Resumen corto.",
  "summary_en": "Short summary.",
  "desc_es": "Descripción larga.",
  "desc_en": "Long description.",
  "tags": ["Tag1", "Tag2"],
  "stack": ["Tool1", "Tool2"],
  "github_url": "https://github.com/g3n3sis3/project-id",
  "year": "2026"
}
```

## Local development

```bash
npm install
npm run dev
```

## Deploy

Automatic on every push to `main` via `.github/workflows/deploy.yml`.
