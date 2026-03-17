const CONFIG = {

  tabs: [
    {
      name: 'Home',
      cards: [
        {
          group: 'Media',
          items: [
            { name: 'Jellyfin',           url: '#', icon: './icons/jellyfin.svg' },
            { name: 'Sonarr',             url: '#', icon: './icons/sonarr.svg' },
            { name: 'Radarr',             url: '#', icon: './icons/radarr.svg' },
            { name: 'Navidrome',          url: '#', icon: './icons/navidrome.svg' },
            { name: 'Lidarr',             url: '#', icon: './icons/lidarr.svg' },
            { name: 'Readarr',            url: '#', icon: './icons/readarr.svg' },
            { name: 'Bazarr',             url: '#', icon: './icons/bazarr.svg' },
            { name: 'Overseerr',          url: '#', icon: './icons/overseerr.svg' },
            { name: 'Plex',               url: '#', icon: './icons/plex.svg' },
            { name: 'Tautulli',           url: '#', icon: './icons/tautulli.svg' },
            { name: 'Kavita',             url: '#', icon: './icons/kavita.svg' },
            { name: 'Audiobookshelf',     url: '#', icon: './icons/audiobookshelf.svg' },
            { name: 'Prowlarr',           url: '#', icon: './icons/prowlarr.svg' },
          ]
        },
        {
          group: 'Infrastructure',
          items: [
            { name: 'Portainer',          url: '#', icon: './icons/portainer.svg' },
            { name: 'Nginx Proxy',        url: '#', icon: './icons/nginx-proxy-manager.svg' },
            { name: 'Pi-hole',            url: '#', icon: './icons/pi-hole.svg' },
            { name: 'Grafana',            url: '#', icon: './icons/grafana.svg' },
            { name: 'Prometheus',         url: '#', icon: './icons/prometheus.svg' },
            { name: 'Uptime Kuma',        url: '#', icon: './icons/uptime-kuma.svg' },
            { name: 'Traefik',            url: '#', icon: './icons/traefik.svg' },
            { name: 'Authentik',          url: '#', icon: './icons/authentik.svg' },
            { name: 'Netdata',            url: '#', icon: './icons/netdata.svg' },
            { name: 'Watchtower',         url: '#', icon: './icons/watchtower.svg' },
            { name: 'Dozzle',             url: '#', icon: './icons/dozzle.svg' },
            { name: 'Unifi',              url: '#', icon: './icons/unifi.svg' },
            { name: 'AdGuard Home',       url: '#', icon: './icons/adguard-home.svg' },
            { name: 'Cockpit',            url: '#', icon: './icons/cockpit.svg' },
          ]
        },
        {
          group: 'Downloads',
          items: [
            { name: 'qBittorrent',        url: '#', icon: './icons/qbittorrent.svg' },
            { name: 'SABnzbd',            url: '#', icon: './icons/sabnzbd.svg' },
            { name: 'Jackett',            url: '#', icon: './icons/jackett.svg' },
            { name: 'Transmission',       url: '#', icon: './icons/transmission.svg' },
            { name: 'Deluge',             url: '#', icon: './icons/deluge.svg' },
            { name: 'Autobrr',            url: '#', icon: './icons/autobrr.svg' },
          ]
        },
        {
          group: 'Home',
          items: [
            { name: 'Home Assistant',     url: '#', icon: './icons/home-assistant.svg' },
            { name: 'Immich',             url: '#', icon: './icons/immich.svg' },
            { name: 'Vaultwarden',        url: '#', icon: './icons/vaultwarden.svg' },
            { name: 'Nextcloud',          url: '#', icon: './icons/nextcloud.svg' },
            { name: 'Paperless-ngx',      url: '#', icon: './icons/paperless-ngx.svg' },
            { name: 'Grocy',              url: '#', icon: './icons/grocy.svg' },
            { name: 'Mealie',             url: '#', icon: './icons/mealie.svg' },
            { name: 'Firefly III',        url: '#', icon: './icons/firefly-iii.svg' },
            { name: 'Stirling PDF',       url: '#', icon: './icons/stirling-pdf.svg' },
          ]
        },
      ]
    },
    {
      name: 'Links',
      cards: [
        {
          group: 'Dev Tools',
          items: [
            { name: 'GitHub',             url: 'https://github.com',              icon: './icons/github.svg' },
            { name: 'Stack Overflow',     url: 'https://stackoverflow.com',       icon: './icons/stack-overflow.svg' },
            { name: 'MDN Docs',           url: 'https://developer.mozilla.org',   icon: './icons/mdn-web-docs.svg' },
            { name: 'Docker Hub',         url: 'https://hub.docker.com',          icon: './icons/docker.svg' },
            { name: 'Regex101',           url: 'https://regex101.com',            icon: './icons/regex101.svg' },
          ]
        },
        {
          group: 'News & Reading',
          items: [
            { name: 'Hacker News',        url: 'https://news.ycombinator.com',    icon: './icons/hacker-news.svg' },
            { name: 'Lobsters',           url: 'https://lobste.rs',               icon: './icons/lobsters.svg' },
            { name: 'Ars Technica',       url: 'https://arstechnica.com',         icon: './icons/ars-technica.svg' },
            { name: 'r/selfhosted',       url: 'https://reddit.com/r/selfhosted', icon: './icons/reddit.svg' },
          ]
        },
        {
          group: 'Reference',
          items: [
            { name: 'Arch Wiki',          url: 'https://wiki.archlinux.org',      icon: './icons/arch-linux.svg' },
            { name: 'Docker Docs',        url: 'https://docs.docker.com',         icon: './icons/docker.svg' },
            { name: 'LinuxServer.io',     url: 'https://linuxserver.io',          icon: './icons/linuxserver-io.svg' },
            { name: 'selfh.st',           url: 'https://selfh.st',                icon: './icons/selfhst.svg' },
            { name: 'Awesome Selfhosted', url: 'https://awesome-selfhosted.net',  icon: './icons/awesome-selfhosted.svg' },
          ]
        },
        { divider: true },
        {
          group: 'Utilities',
          items: [
            { name: 'Speedtest',          url: 'https://speedtest.net',           icon: './icons/speedtest.svg' },
            { name: 'Tailscale',          url: 'https://tailscale.com',           icon: './icons/tailscale.svg' },
            { name: 'My IP',              url: 'https://whatismyipaddress.com',   icon: './icons/whatismyipaddress.svg' },
          ]
        },
      ]
    },
  ],

};
