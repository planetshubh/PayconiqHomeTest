# PAYCONIQ QA Automation Test

This is a Javascript and TestCafe based solution for Swag Labs applicaiton.

### Framework Features:
Support browsers - Safari, Chrome and Firefox.
Creates a Test report (reports/report.txt) after the execution with details about Passed tests and failures (if any).
Screenshots will be captured in case of any failures of test.

### Scenarios: 
I have covered the following scenarios as part of the test.

-  1. Login with a valid user
-  2. Login with locked out user
-  3. Logout from account after logging in
-  4. Navigate to the shopping cart without adding any products
-  5. Add single item to the shopping cart and verify same product is added in the cart, 
      then click Remove against the product and verify it is removed from cart too.
-  6. Add multiple items to the shopping cart and verify same products are added in the cart
-  7. Validate the purchase of product without providing checkout info.
-  8. End to End - user can select multiple products in cart, provide checkout details and completes the purchase


### How to run the project

1. Clone this repository.
2. Install the node packages (``npm i``)
3. Run the below scripts to start execution- 

    ```console
    // Runs the automation in Google Chrome 
    npm run test-all-chrome
    ```

    ```console
    // Runs the automation in all the available browsers installed in the computer 
    npm run test-all
    ```
4. Use following commands to run the tests in a single browser-
    
    ```console

    **Note:** These commands will not generate report 

    // Safari
    testcafe safari page_model/tests/  

    // Chrome
    testcafe chrome page_model/tests/ 

    // Firefox
    testcafe firefox page_model/tests/  
    ``` 