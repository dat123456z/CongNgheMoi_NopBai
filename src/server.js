import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoute from './route/web';
import connectDB from './config/configdb';
require('dotenv').config();

let app = express();
//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);
connectDB();
initWebRoute(app);


let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server is running on the port: " + port);
});