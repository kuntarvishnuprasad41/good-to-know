const express = require('express');
const app = express();
const cors = require('cors');

app.use((cors()))

app.get('/', (req, res) => {
    res.send('Hello World!')
});


app.get('/notifications', (req, res) => {


    const notifications = {
        "network": 7,
        "jobs": 8,
        "messaging": 9,
        "notifications": 5
    }

    res.send(notifications)
});

app.listen(8000, (err) => {
    if (!err) {
        console.log('Server is running on port 8000')
    }
    else console.log(err);

})