Feature: Lodgify Contact tests
  
Background: Open Lodgify contact page
    Given I open the contact page

Scenario: Verify that fields are mandatory
    When I click on "Name" element on contact page
    And I click on "Phone" element on contact page
    And I click on "Email" element on contact page
    And I click on "Comment" element on contact page
    And I click on "Guests" element on contact page
    Then I verify that these elements are mandatory
    | Elements |
    | Name     |
    | Comment  |
    | Email    |
    | Phone    |

Scenario: Fill all fields with valid data
    When I enter "testData.name" into "Name" element
    And I enter "testData.phone" into "Phone" element
    And I enter "testData.email" into "Email" element
    And I enter "testData.comment" into "Comment" element
    And I click on Calendar element on contact page
    And I select "April 14" for "arrival" date
    And I select "June 14" for "departure" date
    Then I check that send button is "not" disabled
    And The "arrival" time is "14/04/2023"
    And The "departure" time is "14/06/2023"
    