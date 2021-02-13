# interactive-form-v3
 Form interacting with Javascript

I create and added a span element for all the fields that are required.
That shows an example of how a correct field should look like.
I did this to give the user more information as to the way the validation fails for that specific input(if the user does not provide correct data).

This span elements will be display just under "*- required fields" at the top of the page

For the name and email fields, I programmed them to be responsive depending on the error type. For example, if the user types a number for the name, the span associated with that name will say that only letters are allowed for that input. In the same matter, if the user types in the email input and forgets to type a email without the "@", for example, tomas_anotioj.com. The span associated with that email will say that email requires the "@."

