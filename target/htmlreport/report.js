$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/skeleton/scenario4.feature");
formatter.feature({
  "name": "add to cart icon",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "The one where the user moves to cart without adding any item in it",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Alex has registered in to TestMeApp",
  "keyword": "Given "
});
formatter.match({
  "location": "Scenario4.alex_has_registered_in_to_TestMeApp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alex search a particular product like headphones",
  "keyword": "When "
});
formatter.match({
  "location": "Scenario4.alex_search_a_particular_product_like_headphones()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "try to proceed to payment without adding any item in the cart",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario4.try_to_proceed_to_payment_without_adding_any_item_in_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "TestMeApp does not display the cart icon",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario4.testmeapp_does_not_display_the_cart_icon()"
});
formatter.result({
  "status": "passed"
});
});