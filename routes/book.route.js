import bodyParser from 'body-parser';
import express from 'express';

// controllers
import BookController from '../controllers/book.controller';


const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.route('/')
  .get(BookController.getAllBooks)
  .post(BookController.saveBook);

export default router;