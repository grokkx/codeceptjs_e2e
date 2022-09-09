const { I, Auth } = inject();

Given("I open webpage {word}", (target_url) => {
    I.amOnPage(target_url);
});

Then("I see authentication page", () => {
    I.seeElement(Auth.logo);
    I.seeElement(Auth.authBlock);
    I.seeElement(Auth.login);
    I.seeElement(Auth.password);
    I.seeElement(Auth.passEye);
    I.seeElement(Auth.authBtn);
    I.see('Войти');
    I.seeElement(Auth.resetPassBtn);
    I.see('Восстановить доступ');
    I.seeElement(Auth.switchLangBtn);
    I.see('In English');
    I.seeElement(Auth.aboutBtn);
    I.see('Об Интернет-банке');
    I.seeElement(Auth.passImg);
    I.see('Не сообщайте никому свои пароли');
    I.see('Пароль вводите только на этой странице. Банк никогда не просит вводить пароль через другие каналы.');
    I.seeElement(Auth.alwaysExitImg);
    I.see('Всегда выходите из системы');
    I.see('Выход из системы препятствует доступу других пользователей к вашим счетам.');
    I.seeElement(Auth.safeConnectImg);
    I.see('Безопасное соединение');
    I.see('Всегда используйте зашифрованное соединение. Убедитесь в том, что сертификат в адресной строке с названием Bank Saint Petersburg зеленого цвета.');
    I.seeElement(Auth.copyrightLabel);
    I.see('© 1990 – 2022 ПАО «Банк «Санкт-Петербург»')
    I.seeElement(Auth.copyrightLabel);
    I.see('Генеральная лицензия Банка России на совершение банковских операций №436 от 31.12.2014');
})