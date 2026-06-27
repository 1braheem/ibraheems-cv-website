This is the folder structure of the whole application

.
├── README.md
├── app
│ ├── (root)
│ │ ├── contact
│ │ │ └── page.tsx
│ │ ├── contributions
│ │ │ └── page.tsx
│ │ ├── experience
│ │ │ ├── [expId]
│ │ │ │ └── page.tsx
│ │ │ └── page.tsx
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ ├── projects
│ │ │ ├── [projectId]
│ │ │ │ └── page.tsx
│ │ │ └── page.tsx
│ │ ├── resume
│ │ │ └── page.tsx
│ │ └── skills
│ │ └── page.tsx
│ ├── api
│ │ └── contact
│ │ └── route.ts
│ ├── favicon.ico
│ ├── globals.css
│ ├── layout.tsx
│ └── manifest.ts
├── assets
│ └── fonts
│ ├── CalSans-SemiBold.ttf
│ ├── CalSans-SemiBold.woff
│ ├── CalSans-SemiBold.woff2
│ ├── Inter-Bold.ttf
│ └── Inter-Regular.ttf
├── components
│ ├── common
│ │ ├── analytics.tsx
│ │ ├── animated-section.tsx
│ │ ├── icons.tsx
│ │ ├── main-nav.tsx
│ │ ├── mobile-nav.tsx
│ │ ├── mode-toggle.tsx
│ │ ├── page-container.tsx
│ │ ├── page-header.tsx
│ │ ├── site-footer.tsx
│ │ └── theme-provider.tsx
│ ├── contact
│ │ └── github-redirect-card.tsx
│ ├── contributions
│ │ └── contribution-card.tsx
│ ├── experience
│ │ ├── experience-card.tsx
│ │ └── timeline.tsx
│ ├── projects
│ │ ├── exp-description.tsx
│ │ └── project-card.tsx
│ ├── forms
│ │ └── contact-form.tsx
│ ├── modals
│ │ └── custom-modal.tsx
│ ├── skills
│ │ ├── rating.tsx
│ │ └── skills-card.tsx
│ └── ui
│ ├── accordion.tsx
│ ├── button.tsx
│ ├── card.tsx
│ ├── chip-container.tsx
│ ├── chip.tsx
│ ├── custom-tooltip.tsx
│ ├── dialog.tsx
│ ├── dropdown-menu.tsx
│ ├── form.tsx
│ ├── input.tsx
│ ├── label.tsx
│ ├── modal.tsx
│ ├── tabs.tsx
│ ├── textarea.tsx
│ ├── toast.tsx
│ ├── toaster.tsx
│ ├── tooltip.tsx
│ └── use-toast.ts
├── components.json
├── config
│ ├── constants.ts
│ ├── contributions.ts
│ ├── experience.ts
│ ├── pages.ts
│ ├── projects.ts
│ ├── routes.ts
│ ├── site.ts
│ ├── skills.ts
│ └── socials.ts
├── hooks
│ ├── use-lock-body.ts
│ └── use-modal-store.ts
├── lib
│ └── utils.ts
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── providers
│ └── modal-provider.tsx
├── public
│ ├── Ibraheem-Aziz-CV.pdf
│ ├── profile-img.jpg
│ ├── next.svg
│ └── vercel.svg
├── tailwind.config.js
└── tsconfig.json
