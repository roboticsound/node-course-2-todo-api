// const Mongoclient = require('mongodb').Mongoclient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete - deletes and returns what waqs deleted
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a3e8524b90fe488812a539b')}).then((result) => {
        console.log(result);
    });

    //then not needed
    db.collection('Users').deleteMany({name: 'Kyo'});

    client.close();
});
