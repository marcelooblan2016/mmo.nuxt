# Nuxt 4 Project Structure

This project follows the modern Nuxt 4 directory structure with better separation of concerns.

## Root Directory Structure

```
mmo.nuxt/
├── app/                      # 📁 Main application (srcDir)
│   ├── app.vue              # Root component
│   ├── assets/              # Static assets
│   ├── components/          # Reusable components
│   ├── layouts/             # Layout templates
│   ├── pages/               # Page routes (file-based)
│   └── README.md
│
├── shared/                  # 📁 Shared utilities & logic
│   ├── utils/               # Utility functions & mixins
│   │   └── content.js       # All site content and content helpers
│   └── README.md
│
├── server/                  # 📁 Laravel API (contact form)
├── public/                  # Static files (images, icons)
│
├── nuxt.config.ts           # Nuxt configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind CSS config
└── README.md
```

## Key Features

### ✅ `srcDir: './app'`
- All app logic is contained in the `app/` directory
- Cleaner root directory
- Better project organization

### ✅ Path Aliases
```javascript
// In nuxt.config.ts
alias: {
  '@shared': '../shared',    // Access shared directory
  '@utils': '../shared/utils' // Access shared utils
}
```

**Usage in components:**
```javascript
import { content } from '@utils/content.js';
```

### ✅ Auto-imports
- Components in `app/components/` are automatically available
- No need for manual imports in pages
- Supports nested folders with `/` notation

**Example:**
```vue
<!-- No import needed! -->
<HeaderMenu />
<Footer />
<ProjectCard />
```

## Directory Explanations

### `/app` - Main Application
Contains all user-facing application code:
- **`app.vue`** - Root component wrapper
- **`components/`** - Reusable Vue components
  - Folder structure sets the component name (e.g., `Header/Menu.vue` → `HeaderMenu`)
- **`pages/`** - File-based routing
  - `index.vue` → `/`
  - `portfolio.vue` → `/portfolio`
  - `work-experience.vue` → `/work-experience`
- **`layouts/`** - Layout wrappers for pages
  - `default.vue` - Used for all pages by default
- **`assets/`** - CSS and other static assets

### `/shared` - Shared Logic
Centralized place for code used across the application:
- **`utils/`** - Utility functions, mixins, and helpers
  - `content.js` - All site content (profile, portfolio, skills, experience, testimonials)

### `/server` - Laravel API
Standalone Laravel app. The contact form posts to its `POST /api/contact` route.

### `/public` - Static Files
Images, icons, and other static assets served directly.

## File-Based Routing

Routes are automatically generated from files in `app/pages/`:

```
app/pages/
├── index.vue              → / (home)
├── portfolio/index.vue    → /portfolio
├── portfolio/[slug].vue   → /portfolio/:slug (one page per project)
├── skills.vue             → /skills
└── work-experience.vue    → /work-experience
```

## Building & Running

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate

# Regenerate public/sitemap.xml and public/llms.txt after content changes
npm run seo:generate
```

## Migration Notes

This structure was migrated from Nuxt 3 default layout:
- Old `components/` → `app/components/`
- Old `pages/` → `app/pages/`
- Old `layouts/` → `app/layouts/`
- Root `app.vue` → `app/app.vue`

All imports have been updated to use the new `@utils/` alias.

## Best Practices

1. **Use @utils alias** for importing from shared utilities
2. **Keep components small and focused** in `app/components/`
3. **Use page components** only for page-level logic in `app/pages/`
4. **Organize layouts** for different page types in `app/layouts/`
5. **Extract reusable logic** to `shared/utils/`

## Future Improvements

- Implement server middleware in `/server`

