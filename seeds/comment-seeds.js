const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Vestibulum in quam molestie, finibus dolor blandit, feugiat neque.',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Vestibulum in quam molestie, finibus dolor blandit, feugiat neque.',
        user_id: 4,
        post_id: 3
    },
    {
        comment_text: 'Vestibulum in quam molestie, finibus dolor blandit, feugiat neque.',
        user_id: 2,
        post_id: 9
    },
    {
        comment_text: 'Vestibulum in quam molestie, finibus dolor blandit, feugiat neque.',
        user_id: 2,
        post_id: 9
    },
    {
        comment_text: 'Vestibulum in quam molestie, finibus dolor blandit, feugiat neque.',
        user_id: 5,
        post_id: 11
    },
    {
        comment_text: 'Vestibulum in quam molestie, finibus dolor blandit, feugiat neque.',
        user_id: 2,
        post_id: 4
    },
    {
        comment_text: 'Vestibulum in quam molestie, finibus dolor blandit, feugiat neque.',
        user_id: 1,
        post_id: 12
    },
    {
        comment_text: 'Vestibulum in quam molestie, finibus dolor blandit, feugiat neque.',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Vestibulum in quam molestie, finibus dolor blandit, feugiat neque.',
        user_id: 1,
        post_id: 8
    },
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;