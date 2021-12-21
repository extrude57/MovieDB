exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const movies = [
    {
      name: "admin", // will get id 1
    },
    {
      name: "user", // will get id 2
    },
  ];

  return knex("movie")
    .insert(movies)
    .then(() => console.log("\n== Seed data for movie table added. ==\n"));
};
