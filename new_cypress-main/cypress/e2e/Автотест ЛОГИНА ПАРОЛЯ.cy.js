describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
       cy.visit('https://login.qa.studio/');             //зашли на сайт
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки Забыли пароль

       cy.get('#mail').type('Rooll2134@yandex.ru');       //ввели верный логин
       cy.get('#pass').type('Shevtsiv2905');          //ввели верный пароль
       cy.get('#loginButton').click();                   //нажал Войти

       cy.wait(1000);   //Команда подождать еще 1 секунду

       cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что после авторизации вижу текст.
       cy.get('#messageHeader').should('be.visible');                   // Проверяю что текст виден пользователю
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Есть крестик и он виден для пользователя

       })

       it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');             //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки Забыли пароль
 
        cy.get('#mail').type('Rooll2134@yandex.ru');       //ввели верный логин
        cy.get('#pass').type('Shevtsiv29058976');          //ввели НЕверный пароль
        cy.get('#loginButton').click();                   //нажал Войти
 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после НЕ авторизации вижу текст.
        cy.get('#messageHeader').should('be.visible');                   // Проверяю что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Есть крестик и он виден для пользователя
 
        })

        it('Неверный логин и верный пароль', function () {
            cy.visit('https://login.qa.studio/');             //зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки Забыли пароль
     
            cy.get('#mail').type('Rooooollll213342134@yandex.ru');       //ввели Неверный логин
            cy.get('#pass').type('Shevtsiv2905');          //ввели верный пароль
            cy.get('#loginButton').click();                   //нажал Войти
     
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после НЕ авторизации вижу текст.
            cy.get('#messageHeader').should('be.visible');                   // Проверяю что текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Есть крестик и он виден для пользователя
     
            })

        it('Проверка, что в логине есть @', function () {
            cy.visit('https://login.qa.studio/');             //зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки Забыли пароль
     
            cy.get('#mail').type('Rooll2134yandex.ru');       //ввел логин без @
            cy.get('#pass').type('Shevtsov2905');          //ввел верный пароль
            cy.get('#loginButton').click();                   //нажал Войти
     
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю, что после авторизации вижу текст.
            cy.get('#messageHeader').should('be.visible');                   // Проверяю что текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Есть крестик и он виден для пользователя
     
            })

            it('Проверка восстановления пароля', function () {
                cy.visit('https://login.qa.studio/');             //зашли на сайт
                cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки Забыли пароль
         
                cy.get('#forgotEmailButton').click();                   //нажал Забыли пароль?
                cy.get('#mailForgot').type('Rooll2134@yandex.ru');        // ввел валидную почту
                cy.get('#restoreEmailButton').click();                  // нажал на кнопку отправить код
         
                cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяю, что после нажатия отправить код вижу текст.
                cy.get('#messageHeader').should('be.visible');                   // Проверяю что текст виден пользователю
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Есть крестик и он виден для пользователя
         
                })

                it('Проверка на приведение к строчным буквам в логине', function () {
                    cy.visit('https://login.qa.studio/');             //зашли на сайт
                    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки Забыли пароль
             
                    cy.get('#mail').type('RoOlL2134@YAndEx.ru');       //ввели логин
                    cy.get('#pass').type('Shevtsov2905');          //ввели верный пароль
                    cy.get('#loginButton').click();                   //нажал Войти
             
                    cy.wait(1000);   //Команда подождать еще 1 секунду
             
                    cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что после авторизации вижу текст.
                    cy.get('#messageHeader').should('be.visible');                   // Проверяю что текст виден пользователю
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Есть крестик и он виден для пользователя
             
                    })

})
