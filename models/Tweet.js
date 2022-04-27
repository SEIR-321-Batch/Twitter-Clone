const mongoose = require('mongoose');

tweetSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    likes: {
        type: Number,
    },
    retweets: {
        type: Number,
    },
    
},
    {
        timestamps: true,
    }
)

const Tweet = mongoose.model('Tweet', tweetSchema)

module.exports = Tweet;