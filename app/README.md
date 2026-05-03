# App Directory

This is the main application directory for the Nuxt 4 application.

## Structure

```
app/
├── app.vue              # Root component
├── assets/              # Static assets (CSS, images, etc.)
│   └── css/            # CSS files
├── components/         # Reusable Vue components
│   ├── Footer/        # Footer sub-components
│   ├── Header/        # Header sub-components
│   ├── Portfolio.vue  # Portfolio component
│   ├── Testimonials.vue # Testimonials component
│   └── Test.vue       # Test component
├── layouts/           # Layout components
│   └── default.vue    # Default layout
└── pages/             # Page components (auto-routed)
    ├── index.vue      # Home page
    ├── portfolio.vue  # Portfolio page
    ├── skills.vue     # Skills page
    └── work-experience.vue # Work experience page
```

## Auto-imports

Components in this directory are automatically imported by Nuxt. You can use them without explicit imports in pages.

### Example:
```vue
<template>
  <Header.Menu />
  <Footer />
</template>
```

## Assets

CSS files are auto-imported according to `nuxt.config.ts` configuration. Files in `assets/` can be imported or referenced in templates.

