# My To Do App

![Login](https://raw.githubusercontent.com/DavidUrS/trello/master/login.png)

This [app](http://duribe-challenge.s3-website-sa-east-1.amazonaws.com) is done in MERN stack (Mongo, Express, React and Node), can help us to manage our tasks in different work spaces, like our home, or in the office, this means, that several work spaces can be created and each space has its own tasks, these tasks currently have 3 states `Pending` `In Progress` and `Done`.

![Tasks](https://raw.githubusercontent.com/DavidUrS/trello/master/workSpaces.png)

This application has a Backend and a FrontEnd.

### Backend

The **Backend** was built in **NodeJs** with **Express**, as database was used **MongoDb** in **MongoAtlas**, some additional packages were used for functionality, such as `@hapi`, `bcrypt`, `dotenv`, `jsonwebtoken`, `mongoose`, among others.

### Frontend

For the **Frontend**, we used **ReactJs**, and we used some complementary technologies like `Redux`, `Redux-Forms`, `Redux-Saga`, `Material-Ui`, `Axios`, `markdown-react-js` among others.


## Deploy

### Backend

Currently this project is running on an **EC2 instance of AWS**, for the project to run, you need to create a file inside the `api` folder, this file must be called `.env` and will contain sensitive information, this file must have the following environment variables `JWT_SECRET`, `SALT_ROUDS`, `PORT` and `MONGO_URI`, the file to be executed with node is the `index.js`

### Frontend

Currently the `build` of our project is displayed in a **S3 Bucket of AWS**, to generate this build, we also need a file called `.env`, this file must be located in the `webapp` folder and must contain the following variable `REACT_APP_API_URL`, which will contain the URL where you are listening to our `API`.


## Infrastructure

![Architecture](https://raw.githubusercontent.com/DavidUrS/trello/master/infrastructure.png)
