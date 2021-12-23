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
  