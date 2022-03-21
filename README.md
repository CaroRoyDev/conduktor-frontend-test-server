# Conduktor frontend test - Server

My personnal tryouts for the [Conduktor front-end test](https://github.com/conduktor/conduktor-coding-challenge/tree/main/frontend-developers)

This server's purpose is to enable GraphQL requests to a dirty API made online, with [Respoint.io](https://restpoint.io/).
Since this solution was not fullfilling my expectations, the server simply mock datas using [Faker](https://www.npmjs.com/package/@faker-js/faker)

Client side will now be able to requests Topics with GraphQL syntax using Apollo Client hooks. Mutation to add topic is partially implemented...

## How to use this repo

### Server side

To get started:

1. Run `npm install`.
1. Run `npm start`.

This will start the GraphQL API server on `localhost:4000`

You can then explore the Schemas, try requests and mutations with a nice GUI at [Apollo Studio](https://studio.apollographql.com)

### Client side

1. Clone the client from this [repo](https://github.com/CaroRoyDev/conduktor-frontend-test-client)
1. Run `npm install`.
1. Run `npm start`.

This will open up `localhost:8000` in your web browser.
