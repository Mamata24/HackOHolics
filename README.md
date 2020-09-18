# Revvsales Hackathon

## Rental Management System

### Revvsales APIs used:

1. **Login API** - To authenticate before creating a document
2. **Create a Doc API** - To create a document based on a maintenance template

### Additional tools:

1. Puppeteer

### Action Flow:

1. A renter gets a maintenance issue in their home.
2. They login to the rental management system.
3. Fill up a maintenance form.
4. On submit puppeteer the form data is sent to the server
5. Server first gets an access token from the **Revvsales Login API**
6. Then the server uses **Create a Doc API** to create document with a preset template and save it into the maintenance request folder. The title of the document is auto generated based on the house number and the type of request. The maintenance ticket number is also auto generated using the document number.
7. Next puppeteer takes over and fills the document created in Step 6.
8. and emails are sent both to the maintenance team and also to the person who raised the request.
9. All the step from Step 5. to Step 8. happens in the background and the user recieves a "Request sent" notification at the end of these steps.

### Steps to run the App

1. Run npm install to install dependencies
2. Install express.js, puppeteer and nodemon
3. Navigate to backend folder and run nodemon server.js to launch the server
4. run npm start to launch the app
5. The app runs on localhost:3000 port
6. The server runs on localhost:5000 port
