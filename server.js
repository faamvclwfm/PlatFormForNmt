// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const app = express();
const db = new sqlite3.Database('./nmt_test.db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use(express.static('public'));

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS results (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        score INTEGER,
        date TEXT,
        test_id INTEGER,
        FOREIGN KEY(user_id) REFERENCES users(id)
    )`);
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], err => {
        if (err) return res.status(400).send('User already exists');
        res.sendStatus(200);
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, user) => {
        if (user) {
            req.session.userId = user.id;
            res.sendStatus(200);
        } else {
            res.status(401).send('Invalid credentials');
        }
    });
});

app.post('/submit', (req, res) => {
    if (!req.session.userId) return res.status(403).send('Not logged in');
    const { score } = req.body;
    const date = new Date().toISOString();
    db.run('INSERT INTO results (user_id, score, date, test_id) VALUES (?, ?, ?, ?)', [req.session.userId, score, date, test_id], err => {
        if (err) return res.sendStatus(500);
        res.sendStatus(200);
    });
});

app.get('/history', (req, res) => {
    if (!req.session.userId) return res.status(403).send('Not logged in');
    db.all('SELECT score, date FROM results WHERE user_id = ?', [req.session.userId], (err, rows) => {
        res.json(rows);
    });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
