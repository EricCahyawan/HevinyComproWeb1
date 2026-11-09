import express from "express";
import path from "path";
import fs from "node:fs/promises";
import { createServer as createViteServer } from "vite";
import { errorPage, getRequestAction } from "./src/seoRouting";
import { getPageMetadata } from "./src/seo";
import { renderSeoHtml, seoHtmlFile } from "./scripts/seo-html";

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // Health check endpoints for Cloud Run container liveness and readiness probes
  app.get("/api/health", (_req, res) => {
    res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
  });

  app.get("/healthz", (_req, res) => {
    res.status(200).send("OK");
  });

  // Run before static/SPA handlers, so legacy URLs retain real HTTP statuses.
  app.use((req, res, next) => {
    const action = getRequestAction(new URL(req.originalUrl, `${req.protocol}://${req.get('host')}`));
    if (action.kind === 'redirect') return res.redirect(301, action.location);
    if (action.kind === 'error') {
      return res.status(action.status).set('X-Robots-Tag', 'noindex, follow').type('html').send(errorPage(action.status));
    }
    next();
  });

  // Serve public assets explicitly (including katalog-heviny.pdf and images)
  const publicPath = path.join(process.cwd(), "public");
  app.use(express.static(publicPath));

  // Vite middleware in development vs static file serving in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
    app.get('*', async (req, res, next) => {
      try {
        if (!getPageMetadata(req.path) && !['/katalog', '/katalog-pdf', '/unduh-katalog'].includes(req.path)) {
          return res.status(404).set('X-Robots-Tag', 'noindex, follow').type('html').send(errorPage(404));
        }
        const pagePath = getPageMetadata(req.path) ? req.path : '/';
        const template = await fs.readFile(path.join(process.cwd(), 'index.html'), 'utf8');
        const html = await vite.transformIndexHtml(req.originalUrl, renderSeoHtml(template, pagePath));
        res.type('html').send(html);
      } catch (error) {
        next(error);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      const pagePath = getPageMetadata(req.path) ? req.path : '/';
      // Missing static files must return 404 instead of the homepage.
      if (!getPageMetadata(req.path) && !['/katalog', '/katalog-pdf', '/unduh-katalog'].includes(req.path)) {
        return res.status(404).set('X-Robots-Tag', 'noindex, follow').type('html').send(errorPage(404));
      }
      res.sendFile(path.join(distPath, seoHtmlFile(pagePath)));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
