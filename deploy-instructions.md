
# Инструкция по развертыванию

## Быстрый деплой на Vercel
1. Зарегистрируйтесь на [vercel.com](https://vercel.com)
2. Подключите GitHub репозиторий
3. Выберите проект и нажмите Deploy
4. Ваш сайт будет доступен по ссылке типа: `your-project.vercel.app`

## Быстрый деплой на Netlify  
1. Зарегистрируйтесь на [netlify.com](https://netlify.com)
2. Перетащите папку `dist` после `npm run build`
3. Или подключите GitHub репозиторий
4. Ваш сайт будет доступен по ссылке типа: `your-project.netlify.app`

## Подключение собственного домена
- В настройках Vercel/Netlify добавьте свой домен
- Настройте DNS записи у регистратора домена
- Получите бесплатный SSL сертификат автоматически

## Команды для сборки
```bash
npm run build     # Сборка для продакшена
npm run preview   # Предпросмотр сборки
```

🎯 После деплоя вы получите персональную ссылку на ваш сайт!
