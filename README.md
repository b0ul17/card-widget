# 🔌 Job Widget (Vue 3 Custom Element)

This project provides a lightweight, embeddable job listing widget built with Vue 3 and compiled as a custom element (Web Component). It can be dropped into **any website**, regardless of stack (HTML, WordPress, React, etc.).

---

## 🚀 Features

- 📦 Bundled as a single JavaScript file for CDN use
- 🧱 Renders job ads as clean, responsive cards
- 🔒 Uses Shadow DOM to prevent CSS conflicts
- 🔧 Host websites can pass custom query and result count

---

## 📦 Installation

Build the widget:

```bash
npm install
npm run build
```

Output will be in `dist/job-widget.umd.js`.

---

## 🌐 Usage (On Any Website)

Embed this in your HTML:

```html
<script src="https://yourcdn.com/job-widget.umd.js" data-query="q=frontend" data-count="3"></script>

<div id="job-widget-container"></div>
```

- `data-query`: Query string to filter job ads
- `data-count`: Number of jobs to show (default: `3`)

---

## 🧪 Local Development

Start Vite dev server:

```bash
npm run dev
```

Create an `index.html` in your project root for local testing:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Job Widget</title>
  </head>
  <body>
    <div id="job-widget-container"></div>
    <script type="module" src="/src/main.ts" data-query="q=frontend" data-count="3"></script>
  </body>
</html>
```

Then open `http://localhost:5173` in your browser.

---

## 📁 Project Structure

```
src/
  ├─ JobCard.ce.vue      # Vue component (custom element)
  ├─ main.ts             # Script that mounts widget on load
  ├─ shims-vue.d.ts      # TypeScript Vue file shim
vite.config.js           # Build config for UMD
index.html               # Optional test page
```

---

## 📜 License

MIT
