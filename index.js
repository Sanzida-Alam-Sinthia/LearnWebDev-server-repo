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

// app.get('/courses/:id', (req, res) => {
//     const id = req.params.id;
//     if (id === '08') {
//         res.send(news);
//     }
//     else {
//         const category_news = news.filter(n => n.category_id === id);
//         res.send(category_news);
//     }
// })

// app.get('/news', (req, res) => {
//     res.send(news);
// });

// app.get('/news/:id', (req, res) => {
//     const id = req.params.id;
//     const selectedNews = news.find(n => n._id === id);
//     res.send(selectedNews);
// });



app.listen(port, () => {
    console.log('Learning Platform Server running on port', port);
})
