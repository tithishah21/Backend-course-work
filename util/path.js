const path = require('path');
module.exports = path.dirname(require.main.filename);
//dirname returns the directory name
//process is global variable available in all files
//main refers to the main module that started the application, so in our case it is app.js
//hence in summary we will get a path to that file
