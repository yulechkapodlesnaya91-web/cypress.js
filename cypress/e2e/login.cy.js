describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки восстоновить пароль

        cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
        cy.get('#pass').type('qa_one_love1'); //ввели верный пароль
        cy.get('#loginButton').click(); //нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно');  // Проверяю, что после авт.вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя

    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки восстоновить пароль

        cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
        cy.get('#pass').type('qa_one_love17'); //ввели неверный пароль
        cy.get('#loginButton').click(); //нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет');  // Проверяю, что после авт.вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя

    })

     it('Приведение к строчным Неверный логин  и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки восстоновить пароль

        cy.get('#mail').type('German@dolnikov.ru'); //ввели неверный логин с большой буквы
        cy.get('#pass').type('qa_one_love1'); //ввели верный пароль
        cy.get('#loginButton').click(); //нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно');  // Проверяю, что после авт.вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя

    })

    it('Неверный логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки восстоновить пароль

        cy.get('#mail').type('germandolnikov.ru'); //ввели неверный логин, без @
        cy.get('#pass').type('qa_one_love1'); //ввели верный пароль
        cy.get('#loginButton').click(); //нажал войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  // Проверяю, что после авт.вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя

    })

    it('Проверка восстоновления пароля', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки восстоновить пароль

        cy.get('#forgotEmailButton').click(); //нажимаю кнопку забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввели верную почту
        cy.get('#restoreEmailButton').click(); //нажал кнопку отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');  // Проверяю, что после вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя

    })
})