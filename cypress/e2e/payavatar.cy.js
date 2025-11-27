describe('Покупка аватара', function () {

   it('Покупка аватара', function () {
        cy.visit('https://pokemonbattle.ru/login/'); //зашли на сайт Покемоны
       
        cy.get('#k_email').type('Yulechka_podlesnaya@mail.ru'); //ввели верный логин
        cy.get('#k_password').type('041318Daniil'); //ввели верный пароль
        cy.get('.MuiButton-root').click(); //нажал войти
 cy.wait(2000);
 cy.get('.header_interactive_button_link_to_trainers > .interactive_button').click();
 cy.get('#filter_type_search_1').type('Ширшуня');
 cy.get('.header_card_trainer').click();
 cy.wait(2000);
 cy.get('[data-qa="shop"]').click();
 cy.wait(2000);       
        cy.get('.available > button').first().click();  //кликаем Купить у первого доступного аватара

        cy.get('.card_number').type('4620869113632996'); // вводим верный номер карты
        cy.get('.card_csv').type('125');  // вводим верный CVV карты
        cy.get('.card_date').type('1226'); // вводим верный срок действия карты
        cy.get('.card_name').type('NAME'); // вводим верное имя владельца 
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();  // нажимаем кнопку Оплатить

        cy.get('.threeds_number').type('56456'); // вводим верный код подтверждения СМС
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажимаем кнопку Оплатить

        cy.contains('Покупка прошла успешно').should('be.visible'); // проверяем наличие и видимость сообщения об успешной покупке
       

    })

    
})