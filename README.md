# Rorschach

The Rorschach test, or inkblot test, is a psychological test in which subjects view inkblots and report their interpretation of what they see. These tests are used by psychologists to evaluate the person's mental state or personality. The test is named after Hermann Rorschach. [(more info)](https://en.wikipedia.org/wiki/Rorschach_test)

In this application, one of the original inkblots are presented to the user for them to fill out and afterwards can compare their answers to other users that have previously answered.

This application is using the MERN-stack worflow using `react-app` along with Node.js and Express for routing, and MongoDB atlas for data storage.

<img src="/rorschach_readme.jpg">

### Starting locally
You must have Node.js installed
1. Clone repository
2. Run `npm install`
3. Create .env file and add Mongodb API key.
4. Navigate to server.js and run `node server.js` to spin up routing server.
5. Return to main directory and run `npm start`
6. Server should be started on `localhost:3000`

### Tasks
- [x] Build react application
- [x] Create MongoDB schema
- [x] Create routers to MongoDB, CRUD application
- [x] Select inkblot tests, and store previous answers
