# Segun Emmanuel Ibitoye — Portfolio Site

A static personal/academic portfolio site, styled as an engineering "blueprint" schematic to match a mechanical-engineering / applied-research profile. Plain HTML/CSS/JS — no build step, so it hosts directly on GitHub Pages.

## Structure

```
portfolio/
├── index.html          # all page content
├── css/styles.css       # design system + layout
├── js/main.js            # nav toggle, scroll reveals, footer year
├── assets/favicon.svg   # site icon
└── README.md
```

## 1. Review the content first

The bio, titles, publications, and contact details were compiled from public **LinkedIn** and **Google Scholar** profiles. Please double-check everything in `index.html` before publishing — public profiles can be incomplete, outdated, or (for common names) mixed up with someone else. In particular, verify:

- Job titles and current institution(s) — search "Director, Research & Development" in `index.html`
- The publications list under `id="publications"` — titles/journals are real, but confirm authorship order, exact venue, and add DOIs where missing
- Email addresses under `id="contact"`
- The citation/publication counts in the metric strip near the top of the hero — these change over time; the note under them links to the live Scholar profile

## 2. Add the hero background video

The hero section is wired up for a looping muted background video, but no video file ships in this repo (I can't source or license stock footage on your behalf). To turn it on:

1. Get a short (10–20 second), landscape, no-audio-needed clip. Good royalty-free sources: [Pexels Videos](https://www.pexels.com/videos/), [Mixkit](https://mixkit.co/free-stock-video/), [Coverr](https://coverr.co/). Search something like "manufacturing," "renewable energy," "circuit," or "abstract technology" to match the engineering theme.
2. Export/compress it as **MP4 (H.264)**, ideally under ~8–10 MB so it loads fast — [Handbrake](https://handbrake.fr/) or `ffmpeg` work well:
   ```bash
   ffmpeg -i input.mov -vf scale=1920:-2 -an -c:v libx264 -crf 28 -preset slow assets/hero-bg.mp4
   ```
3. Save it as `assets/hero-bg.mp4` — that exact filename is already referenced in `index.html`.
4. Reload the page. If the file isn't present, the site automatically falls back to the sky-blue gradient background (`assets/hero-poster.svg`) — nothing breaks either way.

The video plays muted/looped/autoplay (required by browsers for autoplay) and sits behind a gradient overlay so the hero text stays readable over any footage.

## 3. Customize

- **Photo**: the design currently uses no photo (an SVG schematic diagram instead). To add one, drop an image into `assets/`, then add an `<img>` in the `.hero-copy` or a new `.hero-photo` block in `index.html`, and style it in `styles.css`.
- **Colors/fonts**: all defined as CSS variables at the top of `css/styles.css` under `:root`.
- **CV/Resume download**: add a PDF to `assets/`, e.g. `assets/cv.pdf`, and link it from the hero `.hero-actions` buttons: `<a href="assets/cv.pdf" class="btn btn-ghost">Download CV</a>`.

## 4. Run it locally

No build tools needed. Either:

- Open `index.html` directly in a browser, or
- Serve it locally for a closer-to-production preview:
  ```bash
  python3 -m http.server 8000
  # then visit http://localhost:8000
  ```

## 5. Publish on GitHub Pages

1. Create a new GitHub repository (e.g. `segun-ibitoye-portfolio`).
2. Push these files to the repository root:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, select `main` and `/ (root)`, then **Save**.
6. Wait a minute, then visit `https://<your-username>.github.io/<repo-name>/`.

### Optional: custom domain

In the same **Settings → Pages** panel, add your domain under **Custom domain** and follow GitHub's DNS instructions (a `CNAME` file will be created automatically).

### Optional: use `<username>.github.io` as the repo name

If you name the repository exactly `<your-username>.github.io`, the site will publish at the root domain `https://<your-username>.github.io/` instead of a subpath.

## Credits

Design direction: blueprint/technical-schematic aesthetic (deep navy + ember/verdigris accents, `Fraunces` display serif, `IBM Plex Mono` for data/labels), chosen to reflect a mechanical-engineering and process-modelling research profile.
