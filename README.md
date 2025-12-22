# CS465-Full_Stack_Development_I

## Architecture

For this project, I used two different frontend approaches depending on the user's needs. For the public-facing website, I used *Express with Handlebars*. I found this ideal for rendering static content quickly, which keeps the site lightweight. For the admin side, I built a *Single-Page Application (SPA)* using Angular. I chose an SPA here because it provides a much richer experience for the user. Features like conditional rendering and state management made Angular the right choice for handling interactive tasks like CRUD operations.

On the backend, I went with a *NoSQL MongoDB database*. I like MongoDB because its JSON-like structure aligns naturally with how the frontend consumes data. It makes development move faster, especially when using *Mongoose* to handle schema validation and queries.

## Functionality

I used *JSON* as the primary format for exchanging data between the Angular frontend and the Express backend. Even though JSON looks like JavaScript, I had to keep in mind that it’s strictly for data and doesn't include functions.

During development, I focused on refactoring my code to make it more efficient:

-   **Reusable Components:** I refactored the `TripCardComponent` and `TripListingComponent` in Angular to modularize the UI. This cut down on code duplication and kept the design consistent.
    
-   **API Services:** I centralized all the API calls into a `TripDataService`. This made the code a lot more readable and will make it much easier to maintain or update in the future.
    

## Testing

Testing was a big part of making sure the application was both functional and secure.

-   **Backend:** I used *Postman* to test the API endpoints. I ran success and error scenarios and made sure the **JWT** authentication was working correctly in the authorization headers.
    
-   **Frontend:** I did a lot of manual testing on the Angular components. I specifically checked that the admin features, like the "Add Trip" button, only rendered when a valid user was logged in.
    
-   **Security:** I tested the authentication layers to ensure that invalid or expired tokens were handled gracefully to prevent unauthorized access.
    

I’ve learned that a solid full-stack app relies on understanding how *HTTP methods* (GET, POST, PUT, DELETE) map to database interactions and ensuring that those endpoints are secured behind JWT-based authentication.

## Reflection
This course was really helpful for my career goal of working in data analytics and database management. Even though I’m focused on the data side, building a full-stack application helped me see the broader picture of how information flows from a user interface down into a database. I found the hands-on work with *MongoDB* and *Mongoose* especially useful for understanding data scaling and schema validation.

Using *JSON* and *Postman* also taught me a lot about maintaining data integrity and ensuring that data is passed securely between systems. Overall, this experience has made me a more versatile developer. I feel much more confident in my ability to manage complex data environments and contribute to a professional development team.
