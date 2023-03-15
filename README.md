In this project we have written the following test cases- 

TEST CASE 1 

 
 

Favorite an item 

 
 

From the home page search for “Hermès” 

Once you get to the results find the last item on the page and click the heart icon to favorite it. 

You  will need to log in if you haven’t logged in yet. 

Click on the heart in the header and navigate to https://us.vestiairecollective.com/favorites/{id}/ 

ensure that your item shows up as a favorite 

 
 

TEST CASE 2 

 
 

Ensure JSON Data Matches Front End 

 
 

OVERVIEW 

 
 

Users can change the language and currency displayed on the page. 

 
 
 

When the favorites page loads an AJAX call similar to the one listed below is requested:  

 
 

https://api-static-s3.vestiairecollective.com/6/en-US/I18N.json 

 
 

The JSON response for that call will include a summary that includes a key/value pair for “symbol” 

 
 

TEST 

Visit this closet: https://us.vestiairecollective.com/favorites/16999609/ 

Capture the i18n AJAX request and store the value of “symbol”. 

Using the value from the JSON response, assert that the symbol matches the currency symbol on the front end. 

 
 

TEST CASE 3 

 
 

Apply a filter and ensure the items are updated. 

 
 

Go to https://us.vestiairecollective.com/women-bags/shoulder-bags/#gender=Women%231 

On the left hand side there are filters you can apply on the results. Under “Shipped From” click on “Spain”. 

Assert that items displayed on the page all display “Spain” as the location. Arrow here highlights the text you should assert. 