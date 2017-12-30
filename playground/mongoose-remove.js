const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.finOneAndRemove({_id: '5a47cd8dd24ae0f283c05637'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5a47cd8dd24ae0f283c05637').then((todo) => {
    console.log(todo);
});
