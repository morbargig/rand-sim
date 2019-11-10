# Goal
In this simulation the goal is to convert a messy code base into a clean one using clean code principles.

# Connect to Server
- Make sure you have [this separate repo](https://github.com/Elevationacademy/rnd-server-simulation) cloned.
- Run `git checkout minified` in your terminal in order to checkout to the `minified` branch.
- Run `npm install` and then run the server with `node server.js`.
- Run `mongod`.
- Now open fork this current repo and clone it onto your computer.
- Run `npm install`.
- Start the react app by running `npm start`.
- You have a file attached called Architecture.pdf that explains the architecture of the application, use it!
- Note: This is a front end exercise and therefore you will only be working on the `React` part of this app. Don't worry about the server side for now.

# To Do

### Clean Up The Code

- Seperate all the components in `App.js` to separate files according to the provided component tree.
- In the `PhotoSection` component, instead of calling the `renderData` function, create a separate component for that code and load it from the `PhotoSection` component.
- Create a separate component for the `likes-sections`
- Convert all components that don't have `state` or `internal functions` to functional components.
- Delete any dead code that isn't being used (console logs, comments, functions that aren't being used, etc...).
- Create some helper functions for the `requestPhotos` function in the `App` component.

### Known Bugs

- When clicking the search button the app crashes.

### Extra Features

- Create a "Load More" button at the bottom of the page to load more images underneath the already loaded images. You can paginate by adding `?page={pageNumber}` to the end of your API request.
- If the user receives a 500 error message from the server you should display a notification that notifies the user that an error occurred.
- Allow the user to click 'Enter' on the keyboard to search for images.

# Reminder
Don't forget to add imports and exports for any new files you create.

Good luck!