# Marketing Website with Astro + Vue + GSAP

A modern marketing website built with Astro, featuring scroll animations, an interactive pricing calculator, and a built-in blog.

## Features

- ✅ **Scroll Animations** - GSAP ScrollTrigger for smooth, performant animations
- ✅ **Interactive Calculator** - Vue component island for dynamic pricing calculations
- ✅ **Blog** - Built-in blog with Markdown/MDX support
- ✅ **100/100 Lighthouse Performance** - Optimized for speed and SEO
- ✅ **Tailwind CSS** - Modern, utility-first styling
- ✅ **SEO-Friendly** - Canonical URLs, OpenGraph, Twitter cards, sitemap, and robots.txt
- ✅ **RSS Feed** - Automatic RSS feed generation
- ✅ **TypeScript** - Type-safe development

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎬 Using Scroll Animations

The site includes a custom `ScrollAnimation` component powered by GSAP ScrollTrigger. Use it to animate any content as users scroll:

```astro
---
import ScrollAnimation from '../components/ScrollAnimation.astro';
---

<ScrollAnimation animation="fadeIn">
  <h2>This fades in on scroll</h2>
</ScrollAnimation>

<ScrollAnimation animation="slideLeft" delay={0.2}>
  <div>This slides in from the left with a delay</div>
</ScrollAnimation>
```

**Available animations:**
- `fadeIn` - Fade in with subtle upward movement
- `slideLeft` - Slide in from the left
- `slideRight` - Slide in from the right
- `slideUp` - Slide up from below
- `scaleUp` - Scale up from smaller size

**Props:**
- `animation` - Animation type (default: 'fadeIn')
- `delay` - Delay in seconds (default: 0)
- `duration` - Animation duration in seconds (default: 1)
- `class` - Additional CSS classes

## 🧮 Interactive Calculator

The pricing calculator is a Vue component that demonstrates Astro's island architecture. Only the calculator loads JavaScript, keeping the rest of the site static and fast:

```astro
---
import PricingCalculator from '../components/PricingCalculator.vue';
---

<!-- Load only when visible in viewport -->
<PricingCalculator client:visible />
```

**Client directives:**
- `client:load` - Load immediately on page load
- `client:visible` - Load when component is visible
- `client:idle` - Load when browser is idle
- `client:only="vue"` - Only render on client side

## 📝 Adding Blog Posts

Add new blog posts in `src/content/blog/`:

```markdown
---
title: 'My New Post'
description: 'This is my new blog post'
pubDate: '2024-01-15'
heroImage: '/blog-placeholder.jpg'
---

Your content here...
```

## 🎨 Customization

1. **Update site info:** Edit `src/consts.ts`
2. **Change colors:** Modify Tailwind classes or add custom CSS
3. **Add pages:** Create new `.astro` files in `src/pages/`
4. **Customize calculator:** Edit `src/components/PricingCalculator.vue`
5. **Update site URL:** Change `site` in `astro.config.mjs` and `public/robots.txt`

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
