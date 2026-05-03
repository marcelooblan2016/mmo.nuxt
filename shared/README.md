# Shared Directory

This directory contains shared logic, utilities, and composables that can be used across the application.

## Structure

```
shared/
└── utils/
    └── global.js    # Global mixin with shared data and methods
```

## Contents

### `utils/global.js`
A Vue mixin containing:
- **Menu configuration** - Navigation menu items
- **Footer data** - Social links and footer information
- **User data** - Personal information (name, title, summary, etc.)
- **Skills** - Technical skills organized by category
- **Work experience** - Professional experience history
- **Portfolio items** - Project portfolio with details and photos
- **Social links** - GitHub, LinkedIn, email, etc.
- **Testimonials** - Client testimonials
- **Helper methods**:
  - `findMenuBySlug(slug)` - Find menu item by slug
  - `getPortfolioDateFromAndTo(portfolio)` - Format portfolio dates
  - `frontPhoto(photos)` - Get front photo from portfolio

## Usage

In any Vue component:

```javascript
import global from '@utils/global.js';

export default {
  mixins: [global],
  setup() {
    return {};
  }
}
```

## Access Data

All data from the mixin is available in components:

```vue
<template>
  <div>
    <h1>{{ person.fullName }}</h1>
    <p>{{ person.title }}</p>
    <!-- Access any data from global.js -->
  </div>
</template>
```

## Future Enhancements

Consider migrating shared data to:
- Pinia stores (state management)
- Composables (functional approach)
- JSON files (configuration)

