const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull
} = require('graphql')

// pgdb is used to call db queries if using postgreSQL
// const pgdb = require('../database/pgdb')

// mdb is used to call db queries if using mongodb
// const mdb = require('../database/mdb')

// sqldb is used to call db queries if using SQL Server
// const sqldb = require('../databse/sqldb')

const SomeType = require('./types') // update const and path to reference your types

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',

    // The root query in the fields object can be named anything you choose
    fields: {
        root: {
            type: SomeType, // Reference the Type you create here
            description: "insert a description of your query type here",
            // args are the arguments passed in to your query to specify data to search for
            args: {
                key: {type: newGraphQLNonNull(GraphQLString)}
            },
            // resolve is used to call your database query and return the result of this
            resolve: (obj, args, {pgPool, mPool}) => {
                // call db query here and return the result
                // e.g. return pgdb(pgPool).queryDatabase(args) would run a postgreSQL query and return the result
            }
        }
    }
})

const schema = newGraphQLSchema({
    query: RootQueryType
})

module.exports = schema