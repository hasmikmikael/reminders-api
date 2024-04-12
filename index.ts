import express from 'express';
import remindersRouter  from './routers/reminders';

const app = express();

app.use('/reminders', remindersRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(4000, () => console.log('Server started'));