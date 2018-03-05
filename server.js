import express from 'express';
import dotenv from 'dotenv';

// routes
import BookRoutes from './routes/book.route';


dotenv.config();

const app = express();
const { PORT } = process.env;

app.use('/books', BookRoutes);

app.use('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'API is healthy!'
  });
});

const server = app.listen(PORT, (err) => {
  err ? console.log(error.message) : console.log(`Server started on ${PORT}`);
});