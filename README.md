# tny-books

tny-books is a web app used to search for books by title and author, with a detailed view to show additional information about each title. It leverages [React](https://react.dev) on the front-end and [Express](https://expressjs.com) on the back-end, with the data being stored in a SQLite database. 

### Requirements
You’ll need [Node](https://nodejs.org/en), [NPM](https://www.npmjs.com/), [NVM](https://github.com/nvm-sh/nvm/tree/master), and [sqlite3](https://www.sqlite.org/cli.html).

### Running Locally

```
nvm use
npm install --workspaces
```

Seed the SQLite database:
```
npm run seed:db
```

In separate terminals, start the server:
```
npm run start:server
```
and the client:
```
npm run start:client
```

The server should be accessible at [http://localhost:3001](http://localhost:3001) and the client should be accessible at [http://localhost:3000](http://localhost:3000).