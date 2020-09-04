// CRUD  create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    const updatePromise = db.collection('users').updateOne(
        {
            _id: new ObjectID('5f4da7dbf02d1eef4fe46845')
        },
        {
            $set: {
                name: 'Mike'
            }
        }
    )

    updatePromise
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
})
