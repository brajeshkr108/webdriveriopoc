
     Feature: Performing Demo Webshop validation

     Background:
         Given I am on the login page of Demo Webshop

     Scenario: Login with a valid user
         When I log in with a valid user
         Then I shall be on the Demo Webshop home page


    Scenario: verify add-cart functionality
         When User clicks on the Books in the homepage
         And User clicks on the first item 
         And User clicks on the Add to cart
         And User clicks on Shopping Cart
         Then items should added to the shopping cart