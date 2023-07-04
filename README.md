# Survey App
This app is made to find out which UI layout is best out of the 5 layouts. 
Users will be randomly assigned a layout out of "Like Dislike", "Rating", and"n-AFC (2,4,6)" when a user starts the survey.

## Code Flow
In the src folder, there are 5 pages: Welcome, startForm, Question, endForm, and end page, and all its components are created in it. With the naming conventions, it would be easy to predict the flow of the app.

## Code Description 
    Welcome.tsx:
        The welcome page serves as the initial screen of the application. It displays a welcome message and provides an introduction to the quiz or application. Users can typically find a "Start" button or a similar call-to-action to begin the quiz or proceed to the main content.

    StartForm.tsx:
        The start form page is presented after the welcome screen. It prompts users to provide their name or any other required information before starting the quiz or accessing the main content. Users are typically required to fill in the form and submit it to proceed.

    Question.tsx:
        The question page displays a single question from the quiz or a series of questions. Users can see the question text and may be presented with options or input fields to provide their answers or selections. This page is typically part of a larger set of questions and allows users to navigate through the quiz.

    EndForm.tsx:
        The end form page is shown after the user completes the quiz or reaches the end of the content. It often includes a form where users can provide additional feedback, submit their scores, or perform any required actions. This page allows users to provide their final input before concluding their interaction with the application.

    End.tsx:
        The end page is the final screen of the quiz or application. It displays a closing message, summary of the user's performance or results, and may provide options for sharing the results or taking further actions. This page is usually used to wrap up the user's experience and provide a sense of completion.

## Getting Started with Create React App


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


