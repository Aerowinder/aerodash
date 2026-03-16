const CONFIG = {

  services: [
    {
      group: 'Media',
      items: [
        { name: 'Jellyfin',        url: '#', icon: './icons/jellyfin.webp' },
        { name: 'Sonarr',          url: '#', icon: './icons/sonarr.webp' },
        { name: 'Radarr',          url: '#', icon: './icons/radarr.webp' },
        { name: 'Navidrome',       url: '#', icon: './icons/navidrome.webp' },
        { name: 'Lidarr',          url: '#', icon: './icons/lidarr.webp' },
        { name: 'Readarr',         url: '#', icon: './icons/readarr.webp' },
        { name: 'Bazarr',          url: '#', icon: './icons/bazarr.webp' },
        { name: 'Overseerr',       url: '#', icon: './icons/overseerr.webp' },
        { name: 'Plex',            url: '#', icon: './icons/plex.webp' },
        { name: 'Tautulli',        url: '#', icon: './icons/tautulli.webp' },
        { name: 'Kavita',          url: '#', icon: './icons/kavita.webp' },
        { name: 'Audiobookshelf',  url: '#', icon: './icons/audiobookshelf.webp' },
        { name: 'Whisparr',        url: '#', icon: './icons/whisparr.webp' },
        { name: 'Prowlarr',        url: '#', icon: './icons/prowlarr.webp' },
      ]
    },
    {
      group: 'Infrastructure',
      items: [
        { name: 'Portainer',       url: '#', icon: './icons/portainer.webp' },
        { name: 'Nginx Proxy',     url: '#', icon: './icons/nginx-proxy-manager.webp' },
        { name: 'Pi-hole',         url: '#', icon: './icons/pi-hole.webp' },
        { name: 'Grafana',         url: '#', icon: './icons/grafana.webp' },
        { name: 'Prometheus',      url: '#', icon: './icons/prometheus.webp' },
        { name: 'Uptime Kuma',     url: '#', icon: './icons/uptime-kuma.webp' },
        { name: 'Traefik',         url: '#', icon: './icons/traefik.webp' },
        { name: 'Authentik',       url: '#', icon: './icons/authentik.webp' },
        { name: 'Netdata',         url: '#', icon: './icons/netdata.webp' },
        { name: 'Watchtower',      url: '#', icon: './icons/watchtower.webp' },
        { name: 'Dozzle',          url: '#', icon: './icons/dozzle.webp' },
        { name: 'Unifi',           url: '#', icon: './icons/unifi.webp' },
        { name: 'AdGuard Home',    url: '#', icon: './icons/adguard-home.webp' },
        { name: 'Cockpit',         url: '#', icon: './icons/cockpit.webp' },
      ]
    },
    {
      group: 'Downloads',
      items: [
        { name: 'qBittorrent',     url: '#', icon: './icons/qbittorrent.webp' },
        { name: 'SABnzbd',         url: '#', icon: './icons/sabnzbd.webp' },
        { name: 'Jackett',         url: '#', icon: './icons/jackett.webp' },
        { name: 'Transmission',    url: '#', icon: './icons/transmission.webp' },
        { name: 'NZBGet',          url: '#', icon: './icons/nzbget.webp' },
        { name: 'Deluge',          url: '#', icon: './icons/deluge.webp' },
        { name: 'ruTorrent',       url: '#', icon: './icons/rutorrent.webp' },
        { name: 'Pyload',          url: '#', icon: './icons/pyload.webp' },
        { name: 'JDownloader',     url: '#', icon: './icons/jdownloader.webp' },
        { name: 'Aria2',           url: '#', icon: './icons/aria2.webp' },
        { name: 'Flaresolverr',    url: '#', icon: './icons/flaresolverr.webp' },
        { name: 'Mylar3',          url: '#', icon: './icons/mylar3.webp' },
        { name: 'Gaps',            url: '#', icon: './icons/gaps.webp' },
        { name: 'Autobrr',         url: '#', icon: './icons/autobrr.webp' },
      ]
    },
    {
      group: 'Home',
      items: [
        { name: 'Home Assistant',  url: '#', icon: './icons/home-assistant.webp' },
        { name: 'Immich',          url: '#', icon: './icons/immich.webp' },
        { name: 'Vaultwarden',     url: '#', icon: './icons/vaultwarden.webp' },
        { name: 'Nextcloud',       url: '#', icon: './icons/nextcloud.webp' },
        { name: 'Paperless-ngx',   url: '#', icon: './icons/paperless-ngx.webp' },
        { name: 'Grocy',           url: '#', icon: './icons/grocy.webp' },
        { name: 'Mealie',          url: '#', icon: './icons/mealie.webp' },
        { name: 'Firefly III',     url: '#', icon: './icons/firefly-iii.webp' },
        { name: 'Actual Budget',   url: '#', icon: './icons/actual-budget.webp' },
        { name: 'Linkding',        url: '#', icon: './icons/linkding.webp' },
        { name: 'Silverbullet',    url: '#', icon: './icons/silverbullet.webp' },
        { name: 'Tandoor',         url: '#', icon: './icons/tandoor.webp' },
        { name: 'HOME-GRANITERIDGE', url: '#' },
        { name: 'Stirling PDF',    url: '#', icon: './icons/stirling-pdf.webp' },
      ]
    },
  ],

  bookmarks: [
    {
      group: 'Dev Tools',
      items: [
        { name: 'GitHub',          url: 'https://github.com',            icon: './icons/github.webp' },
        { name: 'Stack Overflow',  url: 'https://stackoverflow.com',     icon: './icons/stack-overflow.webp' },
        { name: 'MDN Docs',        url: 'https://developer.mozilla.org', icon: './icons/mdn-web-docs.webp' },
        { name: 'Docker Hub',      url: 'https://hub.docker.com',        icon: './icons/docker.webp' },
        { name: 'Can I Use',       url: 'https://caniuse.com',           icon: './icons/can-i-use.webp' },
        { name: 'Regex101',        url: 'https://regex101.com',          icon: './icons/regex101.webp' },
      ]
    },
    {
      group: 'News & Reading',
      items: [
        { name: 'Hacker News',     url: 'https://news.ycombinator.com',  icon: './icons/hacker-news.webp' },
        { name: 'Lobsters',        url: 'https://lobste.rs',             icon: './icons/lobsters.webp' },
        { name: 'Ars Technica',    url: 'https://arstechnica.com',       icon: './icons/ars-technica.webp' },
        { name: 'r/selfhosted',    url: 'https://reddit.com/r/selfhosted', icon: './icons/reddit.webp' },
        { name: 'LWN.net',         url: 'https://lwn.net',               icon: './icons/lwn.webp' },
        { name: 'TLDP',            url: 'https://tldp.org',              icon: './icons/tldp.webp' },
      ]
    },
    {
      group: 'Utilities',
      items: [
        { name: 'Speedtest',       url: 'https://speedtest.net',         icon: './icons/speedtest.webp' },
        { name: 'Excalidraw',      url: 'https://excalidraw.com',        icon: './icons/excalidraw.webp' },
        { name: 'Cloudflare',      url: 'https://cloudflare.com',        icon: './icons/cloudflare.webp' },
        { name: '1.1.1.1 DNS',     url: 'https://1.1.1.1',              icon: './icons/cloudflare-1-1-1-1.webp' },
        { name: 'Tailscale',       url: 'https://tailscale.com',         icon: './icons/tailscale.webp' },
        { name: 'My IP',           url: 'https://whatismyipaddress.com', icon: './icons/whatismyipaddress.webp' },
      ]
    },
    {
      group: 'Reference',
      items: [
        { name: 'Arch Wiki',       url: 'https://wiki.archlinux.org',    icon: './icons/arch-linux.webp' },
        { name: 'Docker Docs',     url: 'https://docs.docker.com',       icon: './icons/docker.webp' },
        { name: 'LinuxServer.io',  url: 'https://linuxserver.io',        icon: './icons/linuxserver-io.webp' },
        { name: 'selfh.st',        url: 'https://selfh.st',              icon: './icons/selfhst.webp' },
        { name: 'Awesome Selfhosted', url: 'https://awesome-selfhosted.net', icon: './icons/awesome-selfhosted.webp' },
        { name: 'Noted.lol',       url: 'https://noted.lol',             icon: './icons/noted.webp' },
      ]
    },
  ],

};
