## Типы полей (kind)

text - Текст

rich_text - HTML

account_file - Файл

collection_list - Список категорий

collection - Категория

select - Выпадающий список

checkbox - Чекбокс


```json
"block_templates": {
  "micro-slider": {
    "name": "Микро слайдер",
    "block_fields": {
      "picture": {
        "kind" : "account_file",
        "name" : "Изображение"
      },
      "color": {
        "kind" : "select",
        "name" : "Цвет заголовка",
        "block_field_options": {
          "is-white": "Белый",
          "is-black": "Черный"
        }
      }
    }
  }
}
```
