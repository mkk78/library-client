Feature: Go the the home
  Display the title

  Scenario: Home Page
    Given I am on the home page
    When I do nothing
    Then I should see the title

  Scenario: View All Book
    Given I am on the home page
    When I do nothing
    Then I should see 7 books
