exports.up = function (knex) {
    return knex.schema  
      .createTable("movie", tbl => {
        tbl.increments();
        tbl.string("title", 34).unique();
        tbl.string("director", 24);
        tbl.integer("metascore").unsigned().defaultTo(0);
        tbl.string("genre", 24);
        tbl.string("description",100);
        tbl.boolean("favorites").defaultTo(false);
  
      });
   
  
    };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("movie");
  };
  

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