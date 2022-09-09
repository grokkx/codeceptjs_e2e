Feature: Authentication


Scenario: login page
    Given I open webpage https://idemo.bspb.ru/
    Then I see authentication page

Scenario: Reset password
    Given I open webpage https://idemo.bspb.ru/
    Then I'm trying to reset password