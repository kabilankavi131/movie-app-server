const express = require('express');
const { router } = require('./Router/router');
const cors = require('cors')
const app = express();
app.use(express.json());
// app.use(cors({
//     origin: "https://kabilan-movie-app.vercel.app/",
//     methods: ['GET', 'POST'],
// }))
app.use(cors({
    origin: "*"
}))
app.use('/', router);
app.listen(5000, () => {
    console.log("The server is running in port 5000");
})