const fs = require('fs');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils')

router.get('/notes', (_req, res) => {
  readFromFile('./db/db.json', "utf-8").then(function (data) {
    notesData = JSON.parse(data);
    res.json(notesData);
  });
});

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );