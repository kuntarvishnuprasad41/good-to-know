const express = require('express');
const app = express();
const cors = require('cors');

app.use((cors()))

app.get('/', (req, res) => {
    res.send('Hello World!')
});




app.get('/todos', (req, res) => {

    const todo = [
        { id: 1, text: 'Task 1', completed: false },
        { id: 2, text: 'Task 2', completed: false },
        { id: 3, text: 'Task 3', completed: false },
    ]



    res.send(todo)
});


app.get('/todo/:id', (req, res) => {
    const todo = [
        { id: 1, text: 'Task 1', completed: false },
        { id: 2, text: 'Task 2', completed: false },
        { id: 3, text: 'Task 3', completed: false },
    ]
    const id = req.params.id;
    const todos = todo.find(todo => todo.id == id);
    res.send(todos)
})


app.listen(8000, (err) => {
    if (!err) {
        console.log('Server is running on port 8000')
    }
    else console.log(err);

})