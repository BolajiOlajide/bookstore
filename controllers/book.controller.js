import firebase from '../db';
import shortid from 'shortid';


/**
 * @class GroupController
 */
class BookController {
  /**
   * @static
   * @param {object} request
   * @param {object} response
   * @memberOf BookController
   */
  static saveBook(req, res) {
    const reqId = shortid.generate();

    if (Object.keys(req.body) < 1) {
      return res.status(400).send({
        status: 'error',
        message: 'Payload cannot be empty'
      });
    }
    console.log(`Request ID: ${reqId}. Book saving in progress`);
    const database = firebase.database();
    database.ref('books').push().set(req.body)
      .then(() => {
        console.log(`Request ID: ${reqId}. Book successfully saved!`);
        return res.status(201).send({
          status: 'success',
          message: 'Book details successfully saved.'
        });
      })
      .catch((error) => {
        console.log(`Request ID: ${reqId}. Error saving book!`);
        return res.status(500).send({
          status: 'error',
          message: 'Error saving book!'
        });
      });

  }

  /**
   * @static
   * @param {object} request
   * @param {object} response
   * @memberOf BookController
   */
  static getAllBooks(req, res) {
    const reqId = shortid.generate();
    console.log(req.headers);
    const database = firebase.database();

    console.log(`Request ID: ${reqId}. Fetching all books in the database`);

    database.ref('books').once('value')
      .then((snapshot) => {
        console.log(`Request ID: ${reqId}. Books successfully fetched!`);
        return res.status(200).send({
          status: 'success',
          data: snapshot
        });
      })
      .catch((error) => {
        console.log(`Request ID: ${reqId}. Error fetching books from the database!`);
        return res.status(500).send({
          status: 'error',
          message: 'Error fetching books from the database'
        });
      });
  }
}

export default BookController;