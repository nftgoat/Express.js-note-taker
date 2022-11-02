const fs = require('fs');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils')

router.get('/notes', (_req, res) => {
  readFromFile ('./db/db.json', "utf-8").then(function (data) {
    notesData = JSON.parse(data);
    res.json(notesData);
  });
});
