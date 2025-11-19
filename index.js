import express from "express";
import axios from "axios";
import ejs from "ejs";

const app = express();
const port = process.env.PORT || 3000;
const status = ["100","101","102","103",
    "200","201","202","203","204","205","206","207","208","214","226",
    "300","301","302","303","304","305","307","308",
    "400","401","402","403","404","405","406","407","408","409","410",
    "500","501","502","503","504","510"];
var randomStatus;

app.use(express.static("public"));

function getRandomStatus(_ ,__ , next){
    randomStatus = status[Math.floor(Math.random() * status.length)];
    next();
}
app.use(getRandomStatus);

app.get("/", async (_, res, next) => {
    console.log(randomStatus);
    var result = await axios.get("https://v2.jokeapi.dev/joke/Programming?type=twopart");
    console.log(result.data.setup);
    console.log(result.data.delivery);
    res.render("index.ejs", { 
        question: result.data.setup,
        answer: result.data.delivery,
        status: randomStatus
    });
});

app.listen(port, () => {
    console.log(`Server is running at ${port}.`);
});
