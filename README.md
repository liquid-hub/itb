# Сборщик шаблонов для InSales

- Возможность переноса компонентов между проектами

- Подключение плагинов/шрифтов простым переносом файлов в папку

- Удобная работа с scss переменными

- Встроенный insales-uploader


## Установка

```
npm i itb -g
```

> Для Mac и Linux не забывайте подставлять *sudo*

## Работа с проектом

Нужно скачать содержимое репозитория. 

Запустить команду `itb b`.

Содержимое собранной директории theme, завернуть в zip архив и загрузить себе в аккаунт.

Далее указываем в itb-config id темы и доступы к api.

Настройка готова, можно запускать `itb w`


## Команды

Для справки доступных команд, введите в консоли `itb -h`.

| Имя команды   | Назначение                                       |
|--------------|--------------------------------------------------|
| init|i |  Инициализировать проект |
| build|b      | Собрать тему |
| watch|w      | Отслеживание изменений |
| setup|s | Установить базовый проект |
| create [components...]  | Создать компоненты   |
| push|p| Отправить тему на сервер |

Например

```
itb create logotype
```

```
itb b
```

```
itb w
```

## Инициализация

В папке для проекта нужно выполнить команду

```
itb init
```

После данной команды будет создан файл настроек, в котором нужно указать настройки для [InSales uploader](https://github.com/insales/insales-uploader)


## Назначение директорий

| Имя директории | Назначение                                    |
|----------------|-----------------------------------------------|
| `components`     | Компоненеты которые будут включаться в шаблон |
| `components/*/*.scss` | Стили которые собираются в theme.scss                                |
| `components/*/ui.scss` | Стили которые собираются в ui.scss                                |
| `components/*/plugins/*/*` | Js/css плагины                                |
| `components/*/media` | медиа для компонентов                                |
| `components/*/setup.json` | setup.json для компонента                                |
| `scss_import/variables`    | Переменные для scss                           |
| `templates`      | Шаблоны                                       |
| `fonts`         | Шрифты                                        |
| `media`          | Медиа файлы для шаблона                       |
| `config`         | Конфиги для темы                              |
| `theme`          | Директория темы                               |
| `bundles`        | Бандлы (css/js), содержимое директорий конкатенируется   |

## Шрифты

Для генерации шрифтов с готовым файлом стилей хорошо подходит ресурс [transfonter](https://transfonter.org/).
