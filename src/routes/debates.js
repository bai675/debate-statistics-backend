const express = require('express');
const router = express.Router();

// Mock database for debates
dlet debates = [];

// POST /debates - Create a new debate
router.post('/', (req, res) => {
    const newDebate = { id: debates.length + 1, ...req.body };
    debates.push(newDebate);
    res.status(201).json(newDebate);
});

// GET /debates - List all debates or filter
router.get('/', (req, res) => {
    const { title } = req.query;
    if (title) {
        const filteredDebates = debates.filter(debate => debate.title.includes(title));
        return res.json(filteredDebates);
    }
    res.json(debates);
});

// GET /debates/:id - Get a debate by ID
router.get('/:id', (req, res) => {
    const debate = debates.find(d => d.id === parseInt(req.params.id));
    if (!debate) return res.status(404).send('Debate not found');
    res.json(debate);
});

// PUT /debates/:id - Update a debate by ID
router.put('/:id', (req, res) => {
    const debate = debates.find(d => d.id === parseInt(req.params.id));
    if (!debate) return res.status(404).send('Debate not found');
    Object.assign(debate, req.body);
    res.json(debate);
});

// DELETE /debates/:id - Delete a debate by ID
router.delete('/:id', (req, res) => {
    const debateIndex = debates.findIndex(d => d.id === parseInt(req.params.id));
    if (debateIndex === -1) return res.status(404).send('Debate not found');
    debates.splice(debateIndex, 1);
    res.status(204).send();
});

module.exports = router;