# 2026.03.20a
* Changed wrapping behavior of tabs. They now wrap like card groups (mobile use improvement).
* Adjusted vertical space of most items throughout the project. UI is now slightly more compact.

# 2026.03.19b
* Optimization pass.

# 2026.03.19a
* Renamed all themes to more evocative names: Midnight, Navy, Ember, Forest, Crimson, Amethyst, Fog, Sky, Sand, Sage, Blush, Lavender.
* Tuned all theme colors and updated swatches to better represent each theme.

# 2026.03.18d
* Theming overhauled (again) to make it easier to make changes to them in future. Change the base color and everything follows suit
* Theme renames: Slate to Gray, Teal to Green, Rose to Red. Colors adjusted for these themes.
* Added a medium glow level simnilar to the old high. Increased high glow significantly.

# 2026.03.18c - BREAKING CHANGES
* **BREAKING CHANGE**: `config.js` structure has changed. `cards` (the group container) is now `groups`, and `items` (individual links) is now `cards`. See the updated `config.example.js` and readme for the new structure.
* Version and GitHub link moved into the OPTIONS flyout header.
* Various code cleanup and optimizations.

# 2026.03.18b
* Completely overhauled theming system. Colors are more cohesive and balanced across all 12 themes.
* Added Stealth Mode. Cards are invisible at rest, with only a border appearing on hover.
* Fixed a bug in vertical layout where a group with many items could push subsequent groups onto a new row.
* Various code cleanup and optimizations.

# 2026.03.18a
* Updated light theme color swatches to be more visible.
* Changed icon behavior. Instead of diplaying a `?` if an icon fails to load, the card will be shown without the spacing for an icon. You can utilize this feature if you want only some cards to not have an icon. The readme explains how to accomplish this task.
* Unified font size across main page.
* Fixed card group titles being forced uppercase. Will now accept whatever case you specify in `config.js`.
* Continued optimization passes.

# 2026.03.17c - BREAKING CHANGES
* **BREAKING CHANGE**: config.js has had elements renamed. `pages` is now `tabs`, `services` is now `cards`, and `bookmarks` have been merged into `cards`.
* Replaced Services with Cards.
* Bookmarks have been removed entirely, now merged with Cards.
* Options panel reorganized into labeled sections (THEME / DISPLAY / LAYOUT)
* Added slider option to adjust Card height, icon size will scale with the card size.
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
