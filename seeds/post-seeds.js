const { Post } = require('../models');

const postdata = [
    {
        title: 'Nulla facilisi.',
        content: 'Phasellus gravida vestibulum bibendum. Maecenas nec mi ut erat tempus fringilla id ac enim. Praesent posuere finibus erat viverra cursus. Pellentesque nec vehicula metus. In tempor varius sapien fermentum aliquam. Aenean mauris elit, finibus ut finibus sed, iaculis at erat.',
        user_id: 3
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Phasellus gravida vestibulum bibendum. Maecenas nec mi ut erat tempus fringilla id ac enim. Praesent posuere finibus erat viverra cursus. Pellentesque nec vehicula metus. In tempor varius sapien fermentum aliquam. Aenean mauris elit, finibus ut finibus sed, iaculis at erat.',
        user_id: 4
    },
    {
        title: 'Curabitur varius, velit a sagittis maximus, nisi ex sodales mi, at rutrum libero arcu at ex.',
        content: 'Phasellus gravida vestibulum bibendum. Maecenas nec mi ut erat tempus fringilla id ac enim. Praesent posuere finibus erat viverra cursus. Pellentesque nec vehicula metus. In tempor varius sapien fermentum aliquam. Aenean mauris elit, finibus ut finibus sed, iaculis at erat.',
        user_id: 1
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Phasellus gravida vestibulum bibendum. Maecenas nec mi ut erat tempus fringilla id ac enim. Praesent posuere finibus erat viverra cursus. Pellentesque nec vehicula metus. In tempor varius sapien fermentum aliquam. Aenean mauris elit, finibus ut finibus sed, iaculis at erat.',
        user_id: 1
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Phasellus gravida vestibulum bibendum. Maecenas nec mi ut erat tempus fringilla id ac enim. Praesent posuere finibus erat viverra cursus. Pellentesque nec vehicula metus. In tempor varius sapien fermentum aliquam. Aenean mauris elit, finibus ut finibus sed, iaculis at erat.',
        user_id: 2
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Phasellus gravida vestibulum bibendum. Maecenas nec mi ut erat tempus fringilla id ac enim. Praesent posuere finibus erat viverra cursus. Pellentesque nec vehicula metus. In tempor varius sapien fermentum aliquam. Aenean mauris elit, finibus ut finibus sed, iaculis at erat.',
        user_id: 1
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Phasellus gravida vestibulum bibendum. Maecenas nec mi ut erat tempus fringilla id ac enim. Praesent posuere finibus erat viverra cursus. Pellentesque nec vehicula metus. In tempor varius sapien fermentum aliquam. Aenean mauris elit, finibus ut finibus sed, iaculis at erat.',
        user_id: 2
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Phasellus gravida vestibulum bibendum. Maecenas nec mi ut erat tempus fringilla id ac enim. Praesent posuere finibus erat viverra cursus. Pellentesque nec vehicula metus. In tempor varius sapien fermentum aliquam. Aenean mauris elit, finibus ut finibus sed, iaculis at erat.',
        user_id: 5
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Phasellus gravida vestibulum bibendum. Maecenas nec mi ut erat tempus fringilla id ac enim. Praesent posuere finibus erat viverra cursus. Pellentesque nec vehicula metus. In tempor varius sapien fermentum aliquam. Aenean mauris elit, finibus ut finibus sed, iaculis at erat.',
        user_id: 1
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Phasellus gravida vestibulum bibendum. Maecenas nec mi ut erat tempus fringilla id ac enim. Praesent posuere finibus erat viverra cursus. Pellentesque nec vehicula metus. In tempor varius sapien fermentum aliquam. Aenean mauris elit, finibus ut finibus sed, iaculis at erat.',
        user_id: 4
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Phasellus gravida vestibulum bibendum. Maecenas nec mi ut erat tempus fringilla id ac enim. Praesent posuere finibus erat viverra cursus. Pellentesque nec vehicula metus. In tempor varius sapien fermentum aliquam. Aenean mauris elit, finibus ut finibus sed, iaculis at erat.',
        user_id: 3
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Phasellus gravida vestibulum bibendum. Maecenas nec mi ut erat tempus fringilla id ac enim. Praesent posuere finibus erat viverra cursus. Pellentesque nec vehicula metus. In tempor varius sapien fermentum aliquam. Aenean mauris elit, finibus ut finibus sed, iaculis at erat.',
        user_id: 1
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Phasellus gravida vestibulum bibendum. Maecenas nec mi ut erat tempus fringilla id ac enim. Praesent posuere finibus erat viverra cursus. Pellentesque nec vehicula metus. In tempor varius sapien fermentum aliquam. Aenean mauris elit, finibus ut finibus sed, iaculis at erat.',
        user_id: 1
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Phasellus gravida vestibulum bibendum. Maecenas nec mi ut erat tempus fringilla id ac enim. Praesent posuere finibus erat viverra cursus. Pellentesque nec vehicula metus. In tempor varius sapien fermentum aliquam. Aenean mauris elit, finibus ut finibus sed, iaculis at erat.',
        user_id: 2
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Phasellus gravida vestibulum bibendum. Maecenas nec mi ut erat tempus fringilla id ac enim. Praesent posuere finibus erat viverra cursus. Pellentesque nec vehicula metus. In tempor varius sapien fermentum aliquam. Aenean mauris elit, finibus ut finibus sed, iaculis at erat.',
        user_id: 5
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Phasellus gravida vestibulum bibendum. Maecenas nec mi ut erat tempus fringilla id ac enim. Praesent posuere finibus erat viverra cursus. Pellentesque nec vehicula metus. In tempor varius sapien fermentum aliquam. Aenean mauris elit, finibus ut finibus sed, iaculis at erat.',
        user_id: 3
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Phasellus gravida vestibulum bibendum. Maecenas nec mi ut erat tempus fringilla id ac enim. Praesent posuere finibus erat viverra cursus. Pellentesque nec vehicula metus. In tempor varius sapien fermentum aliquam. Aenean mauris elit, finibus ut finibus sed, iaculis at erat.',
        user_id: 4
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Phasellus gravida vestibulum bibendum. Maecenas nec mi ut erat tempus fringilla id ac enim. Praesent posuere finibus erat viverra cursus. Pellentesque nec vehicula metus. In tempor varius sapien fermentum aliquam. Aenean mauris elit, finibus ut finibus sed, iaculis at erat.',
        user_id: 4
    },
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;