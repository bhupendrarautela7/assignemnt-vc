/// <reference types="cypress" />
import 'cypress-iframe';

describe('launch application ', () => {

    
  it('Search the product', () => {
    cy.visit('https://us.vestiairecollective.com')
    cy.wait(2000).then(

      () => {

        //Accepting the dialog comes to accept on page load.
        cy.wrap(window.top.document.querySelector('[title="Das ist OK"]')).click()

    
      }
  
    )
    
    //Cliking on search box icon
    cy.get('button[class = "vc-btn vc-btn--outline header_mainHeader__mobileNavigationButton__z_FQ0"]').click({force: true})
    //Entered the Search term in search box
    cy.get('[data-cy="search_button"]').last().type('Hermès')
    cy.wait(2000)
   //Selected the search sugestion
    cy.get('[href="/search?q=herm%C3%A8s"]').last().click()
    cy.wait(2000)


    const lastFevIcon = cy.get('[class="vc-like_like__button__PtdD4 vc-like_like__button--textHidden__Vkfdo"]').last();
     //Scrolling to the last search item view port.
     lastFevIcon.scrollIntoView();
     // Cliked on the heart icon for last item
     lastFevIcon.click()

     // Filling the user ID input field
     cy.get('[id="welcomeEmail"]').click()
     cy.get('[id="welcomeEmail"]').last().type('bhupendra.rautela@live.com')
     cy.get('[data-testid="welcome_continue_btn"]').click()
     
     // Filling the user password input field

     cy.get('[id="loginPassword"]').click()
     cy.get('[id="loginPassword"]').last().type('Noida@123')
     cy.wait(2000)
      // Submit login credentails

     cy.get('[data-testid="login_submit_connect_btn"]').click({force: true})
     cy.wait(2000)
     

     // NOTE : From here the API request is getting  Fail so unable to proceed here......





  })


})

describe('Favorite Page', () => {
  it('displays currency symbol correctly based on JSON data', () => {
    cy.visit('https://us.vestiairecollective.com/favorites/16999609/')

    // Intercept the i18n AJAX request
    cy.intercept(
      'GET',
      'https://api-static-s3.vestiairecollective.com/6/en-US/I18N.json'
    ).as('i18nRequest')

    // Wait for the request to complete
    cy.wait('@i18nRequest').then((interception) => {
      // Extract the value of "symbol" from the JSON response
      const response = interception.response.body
      const symbol = response.summary.symbol

      // Get the currency symbol from the front end
      const currencySymbol = cy.get('.currency-symbol').invoke('text')

      // Assert that the symbol matches the currency symbol on the front end
      expect(currencySymbol).to.eq(symbol)
    })
  })
})

describe('Filtering items by location', () => {
  it('updates items based on filter selection', () => {
    // Navigate to the shoulder bags page with Women gender and Shipped From filter
    cy.visit('https://us.vestiairecollective.com/women-bags/shoulder-bags/#gender=Women%231');

    // Click on the "Spain" filter
    cy.contains('.facet--shipped-from', 'Spain').click();

    // Assert that all displayed items have "Spain" as the location
    cy.get('.results-list').find('.item').each(($item) => {
      cy.wrap($item).find('.location').should('have.text', 'Spain');
    });
  });
});
