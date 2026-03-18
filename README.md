# Aerodash

A clean, fast, self-hosted dashboard for your homelab, inspired by [Homepage](https://gethomepage.dev). No frameworks, no dependencies, no build steps. Just download and run.

This project is vibe coded. The heavy lifting is done by LLMs with my oversight and extensive testing. It actually started as kind of a meme, to see how close I could get this dashboard to my previous setup with minimal prompting. To my surprise, the LLM got very close on the first try with an undetailed prompt, so I decided to take it further.

---

## Features

- **Cards**: all your apps and links, grouped and organized your way
- **Multi-page support**: separate tabs for home, work, or whatever you need
- **Horizontal & vertical layouts**: card-per-row grid or traditional column view
- **Responsive**: column count automatically adjusts to fit your screen width
- **12 themes**: 6 dark, 6 light, paired by color family
- **Local icon support**: download links provided below, or use external URLs like favicons
- **Per-item icon control**: omit the icon field on any item to display it without an icon slot
- **Global icon optional**: disable icons entirely for a cleaner text-only look across the entire page
- **Persistent settings**: layout, theme, and display preferences saved across sessions
- **Separate config**: your cards live in `config.js`, never touched by updates

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

The `OPTIONS` button is at the bottom center of the page. Click it to reveal all settings. Everything is saved to `localStorage` and restored on page load.

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

- **Tabs** are pages. If you only have one page, the tab bar is hidden automatically.
- **Cards** are groups of links within a page, each with a title and a list of items.
- **Items** are individual links — a name, URL, and optional icon.
- **Dividers** are optional visual separators between card groups. Use `{ divider: true }` between any two groups.

A fully populated `config.example.js` is included in the repo. Here's a minimal example showing all the concepts:

```js
const CONFIG = {

  tabs: [
    {
      name: 'Home',
      cards: [
        {
          group: 'Media',
          items: [
            { name: 'Jellyfin',   url: 'http://jellyfin.local',  icon: './icons/jellyfin.svg'  },
            { name: 'Sonarr',     url: 'http://sonarr.local',    icon: './icons/sonarr.svg'    },
          ]
        },
        {
          group: 'Infrastructure',
          items: [
            { name: 'Portainer',  url: 'http://portainer.local', icon: './icons/portainer.svg' },
          ]
        },
        { divider: true }, /* Create a thin divider for visual separation of cards. */
        {
          group: 'Links',
          items: [
            { name: 'GitHub',     url: 'https://github.com',     icon: './icons/github.svg'    },
            { name: 'Speedtest',  url: 'https://speedtest.net', }, /* icon: property removed. Card will appear with no icon. */
          ]
        },
      ]
    },
    {
      name: 'Work',
      cards: [
        {
          group: 'Tools',
          items: [
            { name: 'Gitea',      url: 'http://gitea.local',     icon: './icons/invalid-path.svg'     }, /* This icon path does not exist. Card will appear with no icon. */
          ]
        },
      ]
    },
  ]

};
```

---

## Updating

Updating is simple, and updates will never overwrite your configuration:

```bash
git pull
```

After the pull, just refresh the browser window. You don't need to do anything else.