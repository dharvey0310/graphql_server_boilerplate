GraphQL Server Boilerplate
===================


A GraphQL Server boilerplate for an express server with support for mongoDB, postgreSQL and SQL Server

----------


Get Started
-------------

Clone this repo using your choice of command line interface with: 

    git clone https://github.com/dharvey0310/graphql_server_boilerplate.git

Install the dependencies required with: 

**npm**

    npm i

**yarn**

    yarn

Start by removing the comment tags in the /server/index.js file to activate the database of your choice.

*It is possible to use more than one database type if you require to pull back data from different sources in your server*

Insert the required connection strings in the files in the config folder.


Create your schema and types beginning in the schema/index.js file and expanding into files you create in the types sub-directory (again removing comment tags to activate your chosen database(s).


Create your database queries in the relevant files in the database folder calling humps.camelizeKeys on the result if you are querying a SQL database to make the column names return in camel case.

To start your server run:

    npm start

    // or

    yarn start

open your browser and navigate to `http://localhost:3000/api` to begin querying your GraphQL server using GraphiQL.