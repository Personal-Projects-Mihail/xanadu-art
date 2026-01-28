# Project content reference (folder-per-project)

This repo stores project content in:

```text
content/
  projects/
    <slug>/
      project.mk.json
      project.en.json

public/
  projects/
    <slug>/
      cover.jpg
      01.jpg
      02.jpg
      ...
```

Notes:
- The JSON files are **bilingual** (MK + EN) but **share the same keys**.
- Media lives under `public/` so it can be served by Next.js. Use absolute public paths like:
  - `/projects/<slug>/cover.jpg`

## JSON shape (matches `app/project/[slug]/page.tsx`)

Required keys:
- `title` (string)
- `year` (string)
- `category` (string)
- `location` (string)
- `participants` (string)
- `description` (string) — short summary
- `fullDescription` (string) — long text, split into paragraphs with blank lines
- `objectives` (string[])
- `results` (string[])
- `images` (string[]) — `images[0]` is treated as the main/hero image
- `partners` (string[])

Recommended:
- `slug` (string) — duplicates folder name, but makes JSON self-contained

## Copy-paste templates

### `content/projects/<slug>/project.mk.json`

```json
{
  "slug": "my-project-slug",
  "title": "Наслов на проект",
  "year": "2024",
  "category": "Категорија",
  "location": "Охрид, Македонија",
  "participants": "20 млади учесници",
  "description": "Краток опис (се користи во херото и metadata).",
  "fullDescription": "Подолг опис.\n\nВтор параграф.\n\nТрет параграф (опционално).",
  "objectives": [
    "Цел 1",
    "Цел 2"
  ],
  "results": [
    "Резултат 1",
    "Резултат 2"
  ],
  "images": [
    "/projects/my-project-slug/cover.jpg",
    "/projects/my-project-slug/01.jpg",
    "/projects/my-project-slug/02.jpg"
  ],
  "partners": [
    "Партнер 1",
    "Партнер 2"
  ]
}
```

### `content/projects/<slug>/project.en.json`

```json
{
  "slug": "my-project-slug",
  "title": "Project title",
  "year": "2024",
  "category": "Category",
  "location": "Ohrid, North Macedonia",
  "participants": "20 young participants",
  "description": "Short summary (used in the hero section and metadata).",
  "fullDescription": "Long description.\n\nSecond paragraph.\n\nThird paragraph (optional).",
  "objectives": [
    "Objective 1",
    "Objective 2"
  ],
  "results": [
    "Result 1",
    "Result 2"
  ],
  "images": [
    "/projects/my-project-slug/cover.jpg",
    "/projects/my-project-slug/01.jpg",
    "/projects/my-project-slug/02.jpg"
  ],
  "partners": [
    "Partner 1",
    "Partner 2"
  ]
}
```

