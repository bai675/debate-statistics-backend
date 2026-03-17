const debates = [];

// Create a new debate topic
const createDebate = (debate) => {
    debates.push(debate);
    return debate;
};

// Read all debate topics
const getDebates = () => {
    return debates;
};

// Read a single debate by ID
const getDebateById = (id) => {
    return debates.find(debate => debate.id === id);
};

// Update a debate topic
const updateDebate = (id, updatedDebate) => {
    const index = debates.findIndex(debate => debate.id === id);
    if (index !== -1) {
        debates[index] = { ...debates[index], ...updatedDebate };
        return debates[index];
    }
    return null;
};

// Delete a debate topic
const deleteDebate = (id) => {
    const index = debates.findIndex(debate => debate.id === id);
    if (index !== -1) {
        return debates.splice(index, 1);
    }
    return null;
};

// Filter debates by category
const filterDebatesByCategory = (category) => {
    return debates.filter(debate => debate.category === category);
};

module.exports = {
    createDebate,
    getDebates,
    getDebateById,
    updateDebate,
    deleteDebate,
    filterDebatesByCategory
};
