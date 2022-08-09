Feature: Lodgify Pricing tests
  
  Background: Open Lodgify pricing page
    Given I open the pricing page

  Scenario: Verify prices for 50 rentals
    When I enter "50" into number of rentals input
    Then I verify that prices are
    | starter      | $64  |
    | professional | $375 |
    | ultimate     | $525 |
  
  Scenario: Verify changing the currency functionality
    When I enter "50" into number of rentals input
    And I select "£ GBP" currency
    Then I verify that prices are
    | starter      | £51  |
    | professional | £294 |
    | ultimate     | £414 |
    When I select "€ EUR" currency
    Then I verify that prices are
    | starter      | 60€  |
    | professional | 330€ |
    | ultimate     | 466€ |
    When I select "$ USD" currency
    Then I verify that prices are
    | starter      | $64  |
    | professional | $375 |
    | ultimate     | $518 |