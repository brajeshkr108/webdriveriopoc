
     Feature: Performing a login

     Background:
         Given I am on the login page

     Scenario: Login with a dafault user
         When I log in with a dafault user
         Then I shall be on the Flight Finder page 