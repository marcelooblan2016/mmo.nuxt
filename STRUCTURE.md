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
│   │   └── global.js        # Global mixin (shared data)
│   └── README.md
│
├── server/                  # 📁 Server routes & logic
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
import global from '@utils/global.js';
// Instead of: import global from '~/mixins/global.js';
```

### ✅ Auto-imports
- Components in `app/components/` are automatically available
- No need for manual imports in pages
- Supports nested folders with `/` notation

**Example:**
```vue
<!-- No import needed! -->
<Header.Menu />
<Footer.Index />
<Portfolio />
```

## Directory Explanations

### `/app` - Main Application
Contains all user-facing application code:
- **`app.vue`** - Root component wrapper
- **`components/`** - Reusable Vue components
  - Folder structure creates dot-notation naming (e.g., `Header/Menu.vue` → `Header.Menu`)
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
  - `global.js` - Global mixin with portfolio, skills, and testimonial data

### `/server` - Backend Routes
Server-side logic and API routes (currently empty but ready for use).

### `/public` - Static Files
Images, icons, and other static assets served directly.

## File-Based Routing

Routes are automatically generated from files in `app/pages/`:

```
app/pages/
├── index.vue              → / (home)
├── portfolio.vue          → /portfolio
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
```

## Migration Notes

This structure was migrated from Nuxt 3 default layout:
- Old `components/` → `app/components/`
- Old `pages/` → `app/pages/`
- Old `layouts/` → `app/layouts/`
- Old `mixins/global.js` → `shared/utils/global.js`
- Root `app.vue` → `app/app.vue`

All imports have been updated to use the new `@utils/` alias.

## Best Practices

1. **Use @utils alias** for importing from shared utilities
2. **Keep components small and focused** in `app/components/`
3. **Use page components** only for page-level logic in `app/pages/`
4. **Organize layouts** for different page types in `app/layouts/`
5. **Extract reusable logic** to `shared/utils/`

## Future Improvements

- Consider migrating from mixins to Vue 3 Composables
- Move global data to Pinia store
- Create specific composables for features
- Implement server middleware in `/server`

