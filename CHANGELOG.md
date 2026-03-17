# 2026.03.17c - BREAKING CHANGES
* **BREAKING CHANGE**: config.js has had elements renamed. `pages` is now `tabs`, `services` is now `cards`, and `bookmarks` have been merged into `cards`.
* Replaced Services with Cards.
* Bookmarks have been removed entirely, now merged with Cards.
* Options panel reorganized into labeled sections (THEME / DISPLAY / LAYOUT)
* Added slider option to adjust Card height.
* Expanded existing count and width sliders to accomodate more setups.
* Added divider support as a visual aid to separate cards. To use, specify `{ divider: true },` between card groups in the `cards:` array in `config.js`
* Tweaked glow setting, making it more pronounced.
* Corrected issues with themes using incorrect accent colors.
* Significant code cleanup, orphaned code removed, ~100 lines removed

# 2026.03.17b
* Reduced number of themes from 24 to 12.
* Themes are now more saturated/colorful and more distinct from each other.
* Made some changes to improve performance by reducing repeated function calls, particularly when resizing the browser window.

# 2026.03.17a
* Cleaned up rendering code in an effort to prevent occasional improper loading.

# 2026.03.16c
* Added favicon.
* Cleaned up rendering code in an effort to prevent occasional improper loading.

# 2026.03.16b
* Cleaned up rendering code in an effort to prevent occasional improper loading.
* Code cleanup in areas to improve code readability and efficiency.

# 2026.03.16a - BREAKING CHANGES
* **BREAKING CHANGE**: config.js has been restructured to allow multiple pages (tabs). All existing configurations must be updated to match the new design. 
* Added a multiple tab system that is enabled automatically by having more than 1 page in `config.js`. The example config and the readme have been updated to reflect this change and to provide examples.
* Added option to disable animations.
* Multiple bug fixes and code cleanup.

# 2026.03.15b
* Added option to disable icons.
* Multiple bug fixes and code cleanup.

# 2026.03.15a
* Initial release
