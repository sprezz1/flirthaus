# Noir Romance Design System
## FlirtHaus Marketing Site

**Version:** 1.0.0
**Date:** October 30, 2025
**Designer:** Sally (UX Designer)

---

## 🎨 Design Philosophy

**Noir Romance** positions FlirtHaus as the Chanel of OnlyFans chatting services. This design system embodies:

- **Confidence**: Bold use of black and burgundy signals authority
- **Luxury**: Rich colors, generous spacing, serif typography
- **Sophistication**: Refined details and elegant interactions
- **Modernity**: Clean lines, contemporary components

With $20M in revenue, FlirtHaus has earned the right to be bold. This design system helps you own that position.

---

## 🎭 Color Palette

### Primary Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Rich Black** | `#121212` | `rgb(18, 18, 18)` | Headers, navigation, primary text, hero backgrounds |
| **Deep Burgundy** | `#7C1D3C` | `rgb(124, 29, 60)` | CTAs, links, accents, premium features |

### Accent Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Copper** | `#B87761` | `rgb(184, 119, 97)` | Secondary CTAs, hover states, warm highlights |
| **Pearl** | `#F8F4F0` | `rgb(248, 244, 240)` | Soft backgrounds, cards, subtle sections |

### Neutral Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Light Gray** | `#FAFAFA` | `rgb(250, 250, 250)` | Main background |
| **Warm Gray** | `#3D3D3D` | `rgb(61, 61, 61)` | Body text |
| **White** | `#FFFFFF` | `rgb(255, 255, 255)` | Text on dark backgrounds, card backgrounds |

### Color Psychology

- **Rich Black**: Power, elegance, mystery, confidence
- **Deep Burgundy**: Passion, luxury, boldness, sensuality
- **Copper**: Warmth, premium quality, modern sophistication
- **Pearl**: Refinement, purity, gentle luxury

---

## ✍️ Typography

### Font Families

**Headings:** `Playfair Display` (Serif)
- Download: [Google Fonts](https://fonts.google.com/specimen/Playfair+Display)
- Weights: 400 (Regular), 700 (Bold), 900 (Black)
- Usage: All headings, display text, brand moments

**Body:** `Inter` (Sans-serif)
- Download: [Google Fonts](https://fonts.google.com/specimen/Inter)
- Weights: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)
- Usage: Body text, buttons, forms, UI elements

### Type Scale

| Name | Size | Line Height | Use Case |
|------|------|-------------|----------|
| `7xl` | 72px / 4.5rem | 1.1 | Hero headlines |
| `6xl` | 60px / 3.75rem | 1.1 | Page headlines |
| `5xl` | 48px / 3rem | 1.2 | Section headlines |
| `4xl` | 36px / 2.25rem | 1.2 | Large headings |
| `3xl` | 30px / 1.875rem | 1.3 | Medium headings |
| `2xl` | 24px / 1.5rem | 1.3 | Small headings |
| `xl` | 20px / 1.25rem | 1.5 | Lead text |
| `lg` | 18px / 1.125rem | 1.7 | Emphasized body |
| `base` | 16px / 1rem | 1.7 | Body text |
| `sm` | 14px / 0.875rem | 1.6 | Small text |
| `xs` | 12px / 0.75rem | 1.5 | Caption text |

### Typography Guidelines

1. **Always use Playfair Display for headings** - adds luxury and sophistication
2. **Always use Inter for body text** - ensures readability and modernity
3. **Maintain generous line-height** (1.6-1.8) for body text
4. **Use font weight strategically**:
   - Regular (400) for body
   - Semi-bold (600) for emphasis
   - Bold (700) for headings

---

## 📐 Spacing System

Based on a **4px base unit** for perfect consistency.

### Spacing Scale

| Token | Value | Pixels | Common Usage |
|-------|-------|--------|--------------|
| `space-1` | 0.25rem | 4px | Tiny gaps |
| `space-2` | 0.5rem | 8px | Small gaps, tight spacing |
| `space-3` | 0.75rem | 12px | Input padding, compact elements |
| `space-4` | 1rem | 16px | Default spacing, button padding |
| `space-5` | 1.25rem | 20px | Comfortable spacing |
| `space-6` | 1.5rem | 24px | Section spacing |
| `space-8` | 2rem | 32px | Generous spacing, card padding |
| `space-10` | 2.5rem | 40px | Large gaps |
| `space-12` | 3rem | 48px | Section padding (small) |
| `space-16` | 4rem | 64px | Section padding (medium) |
| `space-20` | 5rem | 80px | Section padding (standard) |
| `space-24` | 6rem | 96px | Section padding (large) |

### Spacing Philosophy

- **Generous whitespace creates luxury** - don't be afraid of space
- **Consistent rhythm** - use the scale, don't make up values
- **Sections need breathing room** - minimum 80px vertical padding
- **Mobile adjustments** - reduce spacing by ~40% on small screens

---

## 🔘 Components

### Buttons

#### Button Variants

**Primary** (`.btn-primary`)
- Background: Deep Burgundy `#7C1D3C`
- Text: White
- Use for: Main CTAs, most important actions

**Secondary** (`.btn-secondary`)
- Background: Copper `#B87761`
- Text: White
- Use for: Secondary actions, alternative paths

**Outline** (`.btn-outline`)
- Background: Transparent
- Border: Rich Black `#121212`
- Text: Rich Black
- Use for: Tertiary actions, less emphasis

**Ghost** (`.btn-ghost`)
- Background: Transparent
- Text: Deep Burgundy
- Use for: Subtle actions, navigation links

#### Button Sizes

**Large** (`.btn-lg`)
- Padding: 16px 32px
- Font size: 18px
- Use for: Hero CTAs, important actions

**Regular** (`.btn`)
- Padding: 12px 24px
- Font size: 16px
- Use for: Standard buttons

**Small** (`.btn-sm`)
- Padding: 8px 16px
- Font size: 14px
- Use for: Inline actions, compact spaces

#### Button States

- **Hover**: Slight lift (`translateY(-2px)`) + shadow increase
- **Active**: Slightly darker background
- **Disabled**: 50% opacity, no pointer events
- **Focus**: Ring effect for accessibility

#### HTML Example

```html
<!-- Primary button -->
<button class="btn btn-primary">Get Started</button>

<!-- Secondary button, large -->
<button class="btn btn-secondary btn-lg">Learn More</button>

<!-- Outline button, small -->
<button class="btn btn-outline btn-sm">Details</button>
```

---

### Form Elements

#### Input Fields

**Text Input** (`.input`)
- Border: 2px solid `#E0E0E0`
- Focus border: Deep Burgundy `#7C1D3C`
- Padding: 12px 16px
- Border radius: 8px

**Textarea** (`.textarea`)
- Same styling as input
- Minimum height: 120px

**Select** (`.select`)
- Same styling as input
- Custom arrow icon recommended

#### Labels

**Label** (`.label`)
- Font size: 14px
- Font weight: 600
- Color: Rich Black
- Margin bottom: 8px

#### Form Groups

**Form Group** (`.form-group`)
- Contains label + input + helper text
- Margin bottom: 24px

**Helper Text** (`.form-helper`)
- Font size: 14px
- Color: Warm Gray with 70% opacity
- Margin top: 8px

**Error Message** (`.form-error`)
- Font size: 14px
- Color: Red `#DC2626`
- Margin top: 8px

#### HTML Example

```html
<div class="form-group">
  <label class="label">Email Address</label>
  <input type="email" class="input" placeholder="you@example.com">
  <p class="form-helper">We'll never share your email</p>
</div>

<div class="form-group">
  <label class="label">Message</label>
  <textarea class="textarea" placeholder="Tell us about your needs"></textarea>
</div>
```

---

### Cards

#### Standard Card (`.card`)
- Background: White
- Padding: 32px
- Border radius: 16px
- Shadow: `0 4px 12px rgba(18, 18, 18, 0.15)`
- Hover: Lift + shadow increase

#### Bordered Card (`.card-bordered`)
- Adds subtle border: 1px solid Pearl
- Softer alternative to shadow-only

#### Card Structure

**Card Title** (`.card-title`)
- Font: Playfair Display
- Size: 24px
- Weight: 700
- Color: Rich Black

**Card Content** (`.card-content`)
- Font: Inter
- Size: 16px
- Line height: 1.7
- Color: Warm Gray

**Card Footer** (`.card-footer`)
- Margin top: 24px
- Padding top: 24px
- Border top: 1px solid Pearl

#### HTML Example

```html
<div class="card">
  <h3 class="card-title">Premium Service</h3>
  <p class="card-content">
    Dedicated account manager, 24/7 support, and white-glove service for your OnlyFans chatting needs.
  </p>
  <div class="card-footer">
    <a href="#" class="link">Learn more →</a>
  </div>
</div>
```

---

### Badges

#### Badge Variants

**Default** (`.badge`)
- Background: Pearl `#F8F4F0`
- Text: Rich Black

**Secondary** (`.badge-secondary`)
- Background: Deep Burgundy `#7C1D3C`
- Text: White

**Copper** (`.badge-copper`)
- Background: Copper `#B87761`
- Text: White

#### Badge Style
- Padding: 4px 12px
- Font size: 12px
- Font weight: 600
- Text transform: uppercase
- Letter spacing: 0.5px
- Border radius: 9999px (fully rounded)

#### HTML Example

```html
<span class="badge">New</span>
<span class="badge badge-secondary">Premium</span>
<span class="badge badge-copper">Featured</span>
```

---

### Links

#### Link Variants

**Standard Link** (`.link`)
- Color: Deep Burgundy `#7C1D3C`
- Font weight: 600
- Hover: Darker burgundy + underline
- Transition: 150ms

**Copper Link** (`.link-copper`)
- Color: Copper `#B87761`
- Hover: Darker copper + underline

#### HTML Example

```html
<a href="#" class="link">Learn more about our services →</a>
<a href="#" class="link-copper">Explore features →</a>
```

---

## 🎭 Section Backgrounds

### Background Classes

**Dark Background** (`.bg-dark`)
- Background: Rich Black `#121212`
- Text: White

**Burgundy Background** (`.bg-burgundy`)
- Background: Deep Burgundy `#7C1D3C`
- Text: White

**Pearl Background** (`.bg-pearl`)
- Background: Pearl `#F8F4F0`
- Text: Warm Gray

**Light Background** (`.bg-light`)
- Background: Light Gray `#FAFAFA`
- Text: Warm Gray

### Section Spacing

**Standard Section** (`.section`)
- Padding top/bottom: 80px

**Small Section** (`.section-sm`)
- Padding top/bottom: 48px

**Large Section** (`.section-lg`)
- Padding top/bottom: 96px

### HTML Example

```html
<section class="bg-dark section">
  <div class="container">
    <h2 class="heading-lg" style="color: white;">
      Premium OnlyFans Chatting
    </h2>
    <p style="color: #F8F4F0;">
      White-glove service for elite creators and agencies.
    </p>
  </div>
</section>
```

---

## 📦 Layout System

### Containers

**Standard Container** (`.container`)
- Max width: 1280px
- Padding: 24px horizontal
- Centered

**Narrow Container** (`.container-narrow`)
- Max width: 960px
- For focused content

**Wide Container** (`.container-wide`)
- Max width: 1440px
- For expansive layouts

---

## ✨ Shadows & Elevations

### Shadow Scale

```css
--shadow-sm: 0 1px 3px rgba(18, 18, 18, 0.12)
--shadow-md: 0 4px 12px rgba(18, 18, 18, 0.15)
--shadow-lg: 0 10px 30px rgba(18, 18, 18, 0.2)
--shadow-xl: 0 20px 40px rgba(18, 18, 18, 0.25)
```

### Usage Guidelines

- **sm**: Subtle elevation, badges, small cards
- **md**: Standard cards, buttons
- **lg**: Hover states, prominent cards
- **xl**: Modals, popovers, dramatic emphasis

---

## 🔄 Transitions & Animations

### Transition Speeds

```css
--transition-fast: 150ms ease
--transition-base: 250ms ease
--transition-slow: 350ms ease
```

### Usage Guidelines

- **Fast** (150ms): Color changes, small movements
- **Base** (250ms): Standard interactions, button hovers
- **Slow** (350ms): Large movements, complex state changes

### Animation Principles

1. **Subtle by default** - don't distract from content
2. **Purposeful** - every animation should have a reason
3. **Consistent** - use the same speeds across similar interactions
4. **Luxury feel** - smooth, elegant, never jarring

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) {
  /* Reduce font sizes */
  /* Reduce spacing by ~40% */
  /* Stack layouts vertically */
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  /* Adjust container widths */
  /* Optimize for touch */
}

/* Desktop */
@media (min-width: 1025px) {
  /* Full experience */
  /* Hover effects */
}
```

---

## 🎯 Implementation

### CSS Variables

All design tokens are available as CSS variables in `src/styles/global.css`:

```css
/* Colors */
var(--color-primary)
var(--color-secondary)
var(--color-accent-pearl)
var(--color-accent-copper)

/* Spacing */
var(--space-4)
var(--space-8)
var(--space-12)

/* Typography */
var(--font-size-lg)
var(--font-serif)
var(--font-sans)

/* Shadows */
var(--shadow-md)
var(--shadow-lg)

/* Transitions */
var(--transition-base)
```

### Tailwind Config

All tokens are also configured in `tailwind.config.js` for utility-first development:

```javascript
// Colors
bg-primary
text-secondary
bg-accent-copper

// Spacing
p-8
mt-12
gap-6

// Typography
text-4xl
font-serif
font-sans
```

### Using the Design System

**Option 1: CSS Classes**
```html
<button class="btn btn-primary btn-lg">Get Started</button>
<div class="card">...</div>
```

**Option 2: Tailwind Utilities**
```html
<button class="bg-secondary text-white px-8 py-4 rounded-md font-semibold">
  Get Started
</button>
```

**Option 3: Custom Components (Astro, Vue, etc.)**
```astro
---
import Button from './components/Button.astro'
---
<Button variant="primary" size="lg">Get Started</Button>
```

---

## 🎨 Brand Guidelines

### Voice & Tone

- **Confident**: We know we're the best
- **Sophisticated**: High-end without being pretentious
- **Direct**: No fluff, get to the point
- **Empowering**: Help clients feel powerful

### Imagery

- **Editorial quality**: Professional, high-resolution
- **Lifestyle over stock**: Real scenarios, authentic moments
- **Minimal composition**: Uncluttered, focused
- **Dark & moody**: Match the Noir Romance aesthetic

### Do's

✅ Use generous whitespace
✅ Pair serif headings with sans body text
✅ Keep interactions smooth and elegant
✅ Use burgundy for primary CTAs
✅ Maintain high contrast for accessibility
✅ Let the black and burgundy dominate

### Don'ts

❌ Overcrowd the layout
❌ Mix too many fonts
❌ Use bright, jarring colors
❌ Add unnecessary animations
❌ Compromise on image quality
❌ Dilute the bold color palette

---

## 🚀 Quick Start

1. **Fonts**: Add Google Fonts to your HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet">
```

2. **CSS**: Import the global styles in your layout:
```css
@import "/src/styles/global.css";
```

3. **Start Building**: Use the component classes:
```html
<section class="bg-dark section">
  <div class="container">
    <h1 class="heading-xl">Welcome to FlirtHaus</h1>
    <p class="text-lg">Premium OnlyFans chatting services</p>
    <button class="btn btn-primary btn-lg">Get Started</button>
  </div>
</section>
```

---

## 📚 Resources

- **Live Component Showcase**: `/design-system.html`
- **Color Palette Comparison**: `/color-palette-comparison.html`
- **CSS Source**: `/src/styles/global.css`
- **Tailwind Config**: `/tailwind.config.js`

---

## 💎 Final Thoughts

This design system gives FlirtHaus a bold, confident identity that matches your $20M success. The Noir Romance palette - with its rich blacks, deep burgundies, and warm coppers - positions you as the Chanel of OnlyFans chatting services.

Use it consistently, trust the luxury positioning, and let the sophistication speak for itself.

**Welcome to Noir Romance.** 🖤
