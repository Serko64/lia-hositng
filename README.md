# LiaScript Kursportal

Dieses Repository ist bewusst in zwei Bereiche getrennt:

- `app/` enthält den technischen Source-Code (Viewer + Portal + Build-System).
- `courses/` enthält nur Kursinhalte (Markdown, `courses.json`, Assets, Styles).

## Zielstruktur

```text
LiaScript/
  .gitlab-ci.yml
  README.md
  app/
    src/
    package.json
    ...
  courses/
    courses.json
    2026-SS/
      00-Einfuehrung.md
      ...
    styles/
    assets/
```

## Rollen

### Lehrende

Lehrende arbeiten nur in `courses/`:

- Neue Kurse als `.md` in einem Semesterordner anlegen (z. B. `courses/2026-SS/`)
- `courses/courses.json` aktualisieren
- Optional kursbezogene Dateien unter `courses/assets/` oder `courses/styles/`

### Technik/Build

Technische Änderungen nur in `app/`.

## Lokaler Build

```bash
cd app
npm ci
npm run build
```

Build-Ausgabe liegt in `app/dist/`.

Wichtig:
- `courses/` ist die **Source of Truth** für Kurse.
- `courses/` wird nicht in `app/dist` gepflegt.

## Lokale Vorschau (wie Deployment)

Damit `/courses/...` funktioniert, müssen App-Dateien und Kurse gemeinsam ausgeliefert werden.

Beispiel:

```bash
rm -rf public
mkdir -p public
cp -R app/dist/. public/
cp -R courses public/courses
npx serve public
```

## GitLab Pages Deployment

Die Pipeline steht in `.gitlab-ci.yml` (im Repo-Root, wie von GitLab erwartet).

Ablauf in CI:

1. `cd app`
2. `npm ci`
3. `npm run build`
4. `app/dist` nach `public/` kopieren
5. Root-`courses/` nach `public/courses/` kopieren
6. `public/` als GitLab Pages Artefakt deployen

Damit ist live:

- `/` -> Portal (`index.html`)
- `/viewer?...` -> LiaScript Viewer
- `/courses/...` -> statische Kursdateien

## Hinweise

- `public/` ist ein temporärer Auslieferungsordner (lokal/CI), kein Pflegeordner.
- Wenn `courses.json` lokal 404 liefert, wird meist nur `app/dist` statt eines kombinierten Web-Roots serviert.
