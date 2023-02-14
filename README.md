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
    theme                       # Реализация цветов, шрифтов
    common.blocks/              # Базовые реализации блоков
    desktop.blocks/             # Реализации блоков для десктопных браузеров
    touch-pad.blocks/           # Реализации блоков для браузеров планшетов
    touch-phone.blocks/         # Реализации блоков для браузеров мобильных телефонов
    README.md                   # Текстовое описание проекта
