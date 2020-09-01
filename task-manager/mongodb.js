// CRUD  create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne(
    //     {
    //         name: 'Donald',
    //         age: 38
    //     },
    //     (error, result) => {
    //         if (error) {
    //             return console.log('Unable to insert user')
    //         }

    //         console.log(result.ops)
    //     }
    // )

    // db.collection('users').insertMany(
    //     [
    //         {
    //             name: 'Jen',
    //             age: 28
    //         },
    //         {
    //             name: 'Gunther',
    //             age: 27
    //         }
    //     ],
    //     (error, result) => {
    //         if (error) {
    //             console.log('Unable to insert documents!')
    //         }

    //         console.log(result.ops)
    //     }
    // )

    // db.collection('tasks').insertMany(
    //     [
    //         { description: 'Wash dishes', completed: false },
    //         { description: 'Exercise', completed: true },
    //         { description: 'Pack baby lunch', completed: true }
    //     ],
    //     (error, result) => {
    //         if (error) {
    //             return console.log('Unable to insert document!')
    //         }

    //         console.log(result.ops)
    //     }
    // )
})
