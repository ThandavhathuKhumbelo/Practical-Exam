Given the user is logged in the mobile app 
And has valid South African nummber 
And their wallet has sufficient balance 
When the user goes to the sell page
And inputs the valid South African phone number using the input-phone id
And select product type bundle using id select-product 
And select Vodacom provider using the select-id provider id
And  click on R29 on quick selection amount using id quick-R29
And they check box using the check-terms id to confirm the sale
And clicks on process sale button to process sale 
Then the user will recieve the Sale Processed successfully 
And verify the receipt reference using the id receipt-id
And the bundle will be loaded of their phone