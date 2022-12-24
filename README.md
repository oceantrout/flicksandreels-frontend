#Project front-end
Home page - display the movie titles
-it will show two main boxes ( free access and registered user access)

For free access:
- it will retrieve from public API https://ott-details.p.rapidapi.com/advancedsearch about recent movie title
- user can only see titles and plot

For registed users access:
- It will route to "Sign-in" page
- User enter the email account /password
- once validated (using Firebase ), it will show " You are logged in", and re-direct link to "Display page"
- It will include a link for "Sign-up", for Sign-up: user can create account and the form will have validation to the input field

For Display page
- it will show all the titles, and reviews from the back-end mongoDatabase
- User can click "Add Review" to route to the next review page


Individual review page

- it will show the title, image, description
- it will show the recent comments
- For registered users- it can add the comments
- Once added, the updated review will show on the review page

Navigation bar 
- Admin Access: only admin account can access 
- It will pupulate a table with all the reviews
- Click delete button, the review can be deleted 
