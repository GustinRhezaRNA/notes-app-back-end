/* eslint-disable linebreak-style */
const {
  addNoteHandler,
  getAllNotesHandler,
  getNotesByHandler,
  changeNotesByIDHandller,
  deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNotesByHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: changeNotesByIDHandller,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
