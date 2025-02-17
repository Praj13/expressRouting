const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


app.use(express.static('public'));


let notes = [
    { id: 1, text: 'Learn Express.js' },
    { id: 2, text: 'Build a cool project' }
];

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

//to post a new note....
app.post('/api/notes', (req, res) => {
    const newNote = { id: notes.length + 1, text: req.body.text };
    notes.push(newNote);
    res.status(201).json(newNote);
});
//delete a note
app.delete('/api/notes/:id', (req, res) => {
    const noteId = parseInt(req.params.id);
    notes = notes.filter(note => note.id !== noteId);
    res.json({ message: `Note ${noteId} deleted` });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
