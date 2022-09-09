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

Then('I\'m trying to reset password', () => {
    I.seeElement(Auth.resetPassBtn);
    I.click(Auth.resetPassBtn);
    I.waitForVisible(Auth.resetPassDialog);
    I.see('Забыли логин или пароль?');
    I.see('Если вы забыли логин или пароль Интернет-банка, для восстановления обратитесь в контактный центр по телефону в Санкт-Петербурге 8 /812/ 329 5050, в Москве 8 /495/ 228 3838 или в любой офис банка. Воспользуйтесь поиском, чтобы найти ближайший офис.');
    I.see('Если Вы забыли логин и/или пароль для входа в корпоративный Интернет-банк i2B, обратитесь в Службу технической поддержки по телефону 8 /812/ 329 5939 в Санкт-Петербурге, 8 /800/ 500 5939 по России (звонок бесплатный) или в обслуживающее подразделение банка (необходимо предъявить документ, удостоверяющий личность).');
    I.seeElement(Auth.resetPassOfficeLink);
    I.seeElement(Auth.closeResetPassDialog);
    I.click(Auth.closeResetPassDialog);
    I.waitForDetached(Auth.resetPassDialog);
});