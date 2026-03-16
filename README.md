# Aerodash

A clean, fast, self-hosted dashboard for your homelab, inspired by [Homepage](https://gethomepage.dev). No frameworks, no dependencies, no build steps. Just download and run.

This project is vibe coded. The heavy lifting is done by LLMs with my oversight and extensive testing. It actually started as kind of a meme, to see how close I could get this dashboard to my previous setup with minimal prompting. To my surprise, the LLM got very close on the first try with an undetailed prompt, so I decided to take it further.

---

## Features

- **Horizontal & vertical layouts**: card-per-row grid or traditional columns
- **24 themes**: 12 dark, 12 light, with matching accents and grid colors
- **Local icons**: download from [selfh.st/icons](https://selfh.st/icons) and drop into `./site/icons/`
- **Persistent settings**: all preferences saved to localStorage
- **Options panel**: theme picker, grid, glow, layout, links, columns, and card width
- **External config**: services and bookmarks live in `config.js`, never touch `index.html`

---

## Screenshots

**Services**

![Services view showing homelab apps in horizontal grid layout](images/services.png)

**Bookmarks**

![Bookmark groups showing external links with icons](images/bookmarks.png)

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
        ├── jellyfin.webp
        ├── sonarr.webp
        └── ...
```

1. Clone the repo: `git clone https://github.com/Aerowinder/aerodash` or `gh repo clone Aerowinder/aerodash`
2. Copy `/site/config.example.js` to `/site/config.js`
3. Edit `/site/config.js` with your services, URLs, and icon paths
4. Download icons from [selfh.st/icons](https://selfh.st/icons) and place them in `./site/icons/`. If you prefer or need favicons, those are also supported.
5. Serve the `site/` folder from any web server (nginx, Apache, Caddy, etc)
6. Open it in your browser

---

## config.js

All your services and bookmarks live here. The engine (`index.html`) never needs to be edited.

```js
const CONFIG = {

  services: [
    {
      group: 'Media',
      items: [
        { name: 'Jellyfin', url: 'http://192.168.1.10:8096', icon: './icons/jellyfin.webp' },
        { name: 'Sonarr',   url: 'http://192.168.1.10:8989', icon: 'https://sonarr.tv/favicon.ico' },
      ]
    },
  ],

  bookmarks: [
    {
      group: 'Dev Tools',
      items: [
        { name: 'GitHub', url: 'https://github.com', icon: './icons/github.webp' },
      ]
    },
  ],

};
```

Icons can be local files (`./icons/name.webp`) or any external URL. If an icon fails to load or isn't provided, a `?` is shown as fallback.

---

## Services

Services are your self-hosted apps — grouped by category, each with a name, URL, and icon. Clicking a card opens the URL in a new tab (or same tab, depending on your Links setting).

---

## Bookmarks

Bookmarks work the same as services — grouped, icon-supported, same fallback behavior.

---

## Icons

Icons are not distributed with Aerodash. Download them from **[selfh.st/icons](https://selfh.st/icons)**. This is a curated icon set for self-hosted apps available in webp, png, svg, and more.

> Icons from selfh.st are licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Attribution: [selfh.st/icons](https://selfh.st/icons).

---

## Updating

Since `/site/config.js` and `/site/icons/` are gitignored, pulling updates will never overwrite your data:

```bash
git pull
```

---

## Options

All settings are saved to `localStorage` and restored on page load.

| Option | Values |
|---|---|
| Theme | 12 dark + 12 light |
| Grid | off, on |
| Glow | off, low, high |
| Mode | horizontal, vertical |
| Links | new tab, same tab |
| Card Cols | 1–10 |
| Card Width | 10–20rem |
