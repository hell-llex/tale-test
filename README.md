# Sloggi Landing Page Clone

### Описание
Тестовое задание для верстки первых трёх экранов сайта [Sloggi](https://uk.sloggi.com/). Проект выполнен с использованием методологии **Mobile-first**, с применением **SCSS** для стилизации. Верстка семантичная, отзывчивая, кроссбраузерная и валидная. 

### Функционал
- Семантичная разметка с использованием HTML5.
- Отзывчивая верстка с подходом **Mobile-first**.
- Использованы карусели:
  - **Bootstrap Carousel** для первой карусели.
  - **OwlCarousel2** для второй карусели (возможны ограничения по функционалу по сравнению с оригинальным сайтом).
- Стилизация с помощью препроцессора **SCSS**.
- Кроссбраузерная поддержка.
- Поддержка различных устройств (мобильные, планшеты, десктопы).

### Используемые технологии
- **HTML5**: Для разметки страницы.
- **SCSS**: Для стилизации и улучшения структуры CSS.
- **Bootstrap**: Использован для реализации первой карусели.
- **OwlCarousel2**: Использован для второй карусели.
- **Git**: Для управления версиями.

### Структура проекта
```
/css             # Готовый файл стилей CSS
/scss            # Исходные файлы стилей SCSS
/images          # Изображения для проекта
/js              # Скрипты (включая библиотеки для каруселей)
/index.html      # Главный файл страницы
```

### Установка и запуск
1. Склонируйте репозиторий:
   ```bash
   git clone https://github.com/hell-llex/tale-test.git
   ```

2. Перейдите в папку проекта:
   ```bash
   cd tale-test
   ```

3. Откройте `index.html` в браузере для просмотра страницы.

### Адаптивность
- Верстка адаптирована для различных устройств (мобильные, планшеты, десктопы). Основной упор сделан на мобильные устройства с последующим масштабированием до больших экранов.

### Карусели
- Для первой карусели использован **Bootstrap Carousel**.
- Для второй карусели использован **OwlCarousel2**, что может накладывать определённые ограничения по сравнению с оригинальным сайтом (например, в функционале или стиле).

### Кроссбраузерная поддержка
- Тестировалась на последних версиях **Chrome**, **Firefox**, **Safari**.
- Для старых браузеров рекомендуется провести дополнительное тестирование.

### Автор
- **Александр Демещенко**
