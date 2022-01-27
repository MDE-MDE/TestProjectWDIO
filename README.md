# TestProjectWDIO

Для запуска проекта должны быть установлены версии пакетов или выше

![Снимок экрана 2022-01-25 131314](https://user-images.githubusercontent.com/52196281/151200763-d8caacb8-fdb3-49f7-9919-ff33c8e6ce85.png)

npm ci - для установки всех зависимостей

Необходимо создать папку (screenshots) в директории test:

![Скриншот 26-01-2022 211110](https://user-images.githubusercontent.com/52196281/151201237-f2b8ce4d-801b-45bf-bd41-d6de643c1a6a.jpg)

npm test - для запуска тестов

Для запуска отдельных тестов необходимо в конфигурационном файле wdio.conf.ts указать путь к тестовому файлу, например: './test/specs/github.specs/singUp*.ts'

![image](https://user-images.githubusercontent.com/52196281/151339374-e7216314-b454-4beb-875f-137264b97f97.png)

Тест-кейсы: https://docs.google.com/spreadsheets/d/1B6_25_9XxdGlKoZyvCvB-x4lFRpFtW4itxwHt9u4Tao/edit?usp=sharing
