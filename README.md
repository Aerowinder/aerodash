# Aerodash

Aerodash is a clean, fast, self-hosted dashboard for your homelab, inspired by [Homepage](https://gethomepage.dev). Organize your apps and links into card groups across multiple tabs, choose between horizontal and vertical layouts, and pick from 12 carefully tuned themes; 6 dark and 6 light. Icons can be set per-item or disabled globally for a cleaner look. Stealth Mode hides card backgrounds and borders at rest, leaving only the content visible until you hover over it. Everything is highly configurable, including options like glow, grid, animations, card sizing, and more. All settings are saved across sessions. Your card config lives in `config.js` and is never directly modified by updates.

This project is vibe coded. The heavy lifting is done by LLMs with my oversight and extensive testing. It actually started as kind of a meme, to see how close I could get this dashboard to my previous setup with minimal prompting. To my surprise, the LLM got very close on the first try with an undetailed prompt, so I decided to take it further.

> **Browser requirement:** Aerodash uses `color-mix()` for theming, which requires Chrome 111+, Firefox 113+, or Safari 16.2+.

---

## Screenshots

**Cards**

![Cards showing homelab apps in horizontal grid layout](images/cards.png)

**Options**

![Options panel showing theme swatches and settings](images/options.png)

---

## Getting Started

```
aerodash/
└── site/
    ├── index.html
    ├── config.js          ← your config (gitignored)
    ├── config.example.js
    └── icons/             ← your icons (gitignored)
        ├── jellyfin.svg
        ├── sonarr.svg
        └── ...
```

1. Clone the repo: `git clone https://github.com/Aerowinder/aerodash` or `gh repo clone Aerowinder/aerodash`
2. Copy `/site/config.example.js` to `/site/config.js`
3. Edit `/site/config.js` with your services, URLs, and icon paths
4. Download icons from the links below and place them in `./site/icons/`. Favicons are also supported. This step is optional — icons can be hidden entirely if you prefer.
5. Serve the `site/` folder from any web server (nginx, Apache, Caddy, etc.)
6. Open it in your browser

---

## Options

The options sit behind the gear icon in the top right corner of the page. Click it to reveal all settings. Everything is saved to `localStorage` and restored on page load.

## Icons

Icons can be local files (`./icons/name.svg`) or any external URL. If an icon fails to load or isn't provided, no icon slot is shown.

Icons are not distributed with Aerodash. The best places to find them are:

- Site: [selfh.st/icons](https://selfh.st/icons) · GitHub: [selfhst/icons](https://github.com/selfhst/icons)
- Site: [Dashboard Icons](https://dashboardicons.com) · GitHub: [homarr-labs/dashboard-icons](https://github.com/homarr-labs/dashboard-icons)

> Icons from selfh.st are licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

> Icons from Dashboard Icons are licensed under [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0).

---

## config.js

All your content lives here. The structure is:

- **Tabs** are pages. If you only have one page, tab buttons are hidden.
- **Groups** are collections of cards within a page, each with a name.
- **Cards** are individual links that have a name, URL, and optional icon.
- **Dividers** are optional visual separators between groups. Use `{ divider: true }` between any two groups.

A fully populated `config.example.js` is included in the repo. Here's a minimal example showing all the concepts:

```js
const CONFIG = {

  tabs: [
    {
      name: 'Home',
      groups: [
        {
          name: 'Media',
          cards: [
            { name: 'Jellyfin',   url: 'http://jellyfin.local',  icon: './icons/jellyfin.svg'  },
            { name: 'Sonarr',     url: 'http://sonarr.local',    icon: './icons/sonarr.svg'    },
          ]
        },
        {
          name: 'Infrastructure',
          cards: [
            { name: 'Portainer',  url: 'http://portainer.local', icon: './icons/portainer.svg' },
          ]
        },
        { divider: true },
        {
          name: 'Links',
          cards: [
            { name: 'GitHub',     url: 'https://github.com',     icon: './icons/github.svg'    },
            { name: 'Speedtest',  url: 'https://speedtest.net',  icon: './icons/speedtest.svg' },
          ]
        },
      ]
    },
    {
      name: 'Work',
      groups: [
        {
          name: 'Tools',
          cards: [
            { name: 'Gitea',      url: 'http://gitea.local',     icon: './icons/gitea.svg'     },
          ]
        },
      ]
    },
  ]

};
```

---

## Updating

Since `/site/config.js` and `/site/icons/` are gitignored, pulling updates will never overwrite your data:

```bash
git pull
```
