const { I, Auth } = inject();

Given('Я открываю браузер и авторизирусь как пользователь', () => {
    I.amOnPage('https://idemo.bspb.ru/');
    I.seeElement(Auth.login);
});