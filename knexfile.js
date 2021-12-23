require("dotenv").config();

const pgConnection = process.env.DATABASE_URL || 
"postgres://ipqbdwjbuaxnuk:f1c0702d021be3d8f3509872b0bc3ca3cd1e12a7a66b445afd7c6203a232d4a1@ec2-3-228-75-39.compute-1.amazonaws.com:5432/d5nt9r8o8d38go";
// if using a local postgres server, please create the database manually, Knex will not create it autmatically npm install express-session memorystore

module.exports = {
  testing2: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./database/auth.db3",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
  development: {
    client: "pg",
    connection: pgConnection,
    ssl: {
      rejectUnauthorized: true,
  },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
  testing: {
    client: "pg",
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  production: {
    client: "pg",
    connection: pgConnection,
    ssl: {
      rejectUnauthorized: false,
  },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
};
