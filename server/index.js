const {nodeEnv} = require('./util')
console.log(`Server running in ${nodeEnv} mode`)

// Remove these comment tags to use postgreSQL
/* 
const pg = require('pg')
const pgConfig = require('../config/pg')[nodeEnv]
const pgPool = new pg.Pool(pgConfig)
*/

// Remove these comment tags to use SQL Server
/*
const sql = require('mssql')
const sqlConfig = require('../config/mssql')[nodeEnv]
sql.connect(sqlConfig)
*/

const app = require('express')()

const schema = require('../schema')
const graphqlHTTP = require('express-graphql')

// Remove these comment tags to use mongodb
/*
const {MongoClient} = require('mongodb')
const assert = require('assert')
const mConfig = require('../config/mongo')[nodeEnv]

MongoClient.connect(mConfig.url, (err, mPool) => {
    assert.equal(err, null)
    */

    app.use('/api', graphqlHTTP({
        schema: schema,
        graphiql: true,
        // select appropriate context for the required database
        // context: {pgPool, mPool}
    }))

    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`)
    })
// })
