const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const courseCatagories = require('./data/courseCatagories.json');

app.get('/', (req, res) => {
    res.send('Learning Platform API Running');
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courseCatagories', (req, res) => {
    res.send(courseCatagories);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);

    const selectedCourse = courses.find(n => n.id == id);
    res.send(selectedCourse);
    // console.log(selectedCourse)
})






app.listen(port, () => {
    console.log('Learning Platform Server running on port', port);
})
