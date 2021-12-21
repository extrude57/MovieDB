exports.up = function (knex) {
  return knex.schema
    // .createTable("roles", tbl => {
    //   tbl.increments();

    //   tbl.string("name", 128).notNullable().unique();
    // })
    // .createTable("users", tbl => {
    //   tbl.increments();

    //   tbl.string("username", 128).notNullable().unique().index();
    //   tbl.string("password", 256).notNullable();

    //   tbl
    //     .integer("role")
    //     .unsigned()
    //     .references("roles.id")
    //     .onDelete("RESTRICT")
    //     .onUpdate("CASCADE")
    //     .defaultTo(2);
    // });

    .createTable("movie", tbl => {
      tbl.increments();
      tbl.string("title", 64).notNullable().unique();
      tbl.string("director", 24);
      tbl.integer("metascore",100).defaultTo(0);
      tbl.string("genre", 24);
      tbl.string("description",164);
      tbl.bool("favorites",false);

    });
 

  };

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("movie");
};
