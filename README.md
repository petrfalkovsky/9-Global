# 9 Global Logistics
Site made with bootstrap technology, desktop and mobile versions

Few rules how to use this repository:
1. Write comment in commit in english
2. Follow the commit [convention](https://www.conventionalcommits.org/en/v1.0.0/)
3. Follow guid [style naming](https://dart.dev/guides/language/effective-dart/style)
4. Follow git branch [naming convention](https://dev.to/couchcamote/git-branching-name-convention-cch)
5. One feature or code area - one commit
6. Pull request must contain all relevant commits
7. Let's try this way dev > test > staging > production(master)

### BEM file struсture:
project
    theme/                      # Implementation of colors, fonts
    common.blocks/              # Basic block implementations
    desktop.blocks/             # Block implementations for desktop browsers
    touch-pad.blocks/           # Block implementations for tablet browsers
    touch-phone.blocks/         # Block implementations for cell mobile phones
    README.md                   # Text description of the project
        common.blocks/
            button/
                __box/
                    _focused/
                        button__box_focused.css              # Basic button implementation

### BEM name convention:
block__element_modifier

<header class=”header”>
  <img class=”header__logo”>
  <form class=”header__search-from”>
    <input class=”header__search-from__input” type=”input”>
    <button class=”header__search-from__button” type=”button”>
  </form>
  <div class=”header__lang-switcher”></div>
</header>