# **Frontend Mentor Challenge - Intro section with dropdown navigation**

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5 "https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5").

## Table of contents

- [Overview](#overview)

- [My process](#my-process)

   - [Built with](#built-with)

   - [What I learned](#what-i-learned)

      - [Accordion collapse/expand animation](#accordion-collapseexpand-animation)

- [Resources](#resources)

## Overview

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links

- View the optimal layout for the content depending on their device's screen size

- See hover states for all interactive elements on the page

Links:

- GitHub Repo: <https://github.com/xup60521/intro-section-with-dropdown-navigation>

- Website: <https://xup60521.github.io/intro-section-with-dropdown-navigation/>

```bash
# install dependencies
pnpm install
# start vite dev server
pnpm run dev
# build (output path /dist)
pnpm run build
```

## My process

### Built with

- Semantic HTML5 markup

- TailwindCSS

- Vite - for bundling assets

- GSAP - for animation

### What I learned

#### Accordion collapse/expand animation

GSAP conveniently provides a way to animate the height change, which is not trivial when it comes to vanilla JS & CSS keyframes.

```ts
if (mobileNavCompanyAccordian.style.height === "1.5rem") {
    arrowImg.src = ArrowUpImg
    gsap.to(mobileNavCompanyAccordian,
            {height: "auto", duration: 0.5, ease: "power2.out"})
} else {
    arrowImg.src = ArrowDownImg
    gsap.to(mobileNavCompanyAccordian, 
            {height: "1.5rem", duration: 0.5, ease: "power2.out"})
}
```

## Resources

- TailwindCSS Docs - <https://tailwindcss.com/docs>

- Google Fonts - <https://fonts.google.com>

- GSAP docs - <https://gsap.com/docs/v3/>