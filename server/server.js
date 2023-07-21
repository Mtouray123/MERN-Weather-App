require('dotenv').config();
require('./config/database');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

app.use(logger('dev')); // Logging requests to console
app.use(express.json()); // Parse JSON data in the request body
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded data
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); // Favicon middleware (if you have one)

// Serve static files from the 'build' directory in the client folder
app.use(express.static(path.join(__dirname, 'client', 'build')));
