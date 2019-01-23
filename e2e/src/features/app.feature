Feature: User Feature

  Scenario: Home Page
    Given I am on the home page
    When I do nothing
    Then I should see the title

  Scenario: View All Books
    Given I am on the home page
    When I do nothing
    Then I should see 7 books

  Scenario: View all Shelves
    Given I am on the home page
    When I click 'Shelves' button
    Then I should see 2 shelves
