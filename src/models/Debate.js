const mongoose = require('mongoose');

const debateSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['事实类', '价值类', '政策类'],
        required: true,
    },
    arguments: {
        pro: [{
            type: String,
            required: true,
        }],
        con: [{
            type: String,
            required: true,
        }],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Debate = mongoose.model('Debate', debateSchema);

module.exports = Debate;