# movie-genre-test

This project is made of Angular and React variants.

## Angular
Found in `/client-angular`.

To run:

```bash
cd client-angular
yarn
yarn start
```

As my Angular experience is weak, I decided to forgo the full Module system organization and opted
for the newer Angular 15 patterns for a simplified developer experience. I also opted for a folder 
structure that resembles common patterns for React or Vue apps to make the experience simplified as
well.

## React
Found in `/client-react`.

To run:

```bash
cd client-react
yarn
yarn start
```

This portion of the project, I'm hoping demonstrates my work a little more effectively. Given that I'm
using Chakra, the styling looks a lot better. There are a lot of things I'd do differently in a real project,
but I'm hoping the code gives us a starting point for a bigger conversation.


The project is using;
- Redux toolkit
- React Router (newest API... new year, totally new API standards...)
- Chakra-ui
- react-query, with a simulated API request

## Server

Found in `/server`

To run:

To run:

```bash
cd server
yarn
yarn start
```

The server example was made in preparation to connect the clients to an API, but time did not allow.
It's running on a basic NestJs setup, which has a similar module structure to Angular, and uses
a simple REST API (though I prefer GraphQL for client code generation and type safety). I did include
a few simple direct controller API tests, as I absolutely need TDD on the server to check my work.

## Testing
I did not include any unit tests. I'm not very familiar with Angular's testing APIs, but I have 
extensive experience testing React components, hooks, utilities, and e2e testing with Cypress.
