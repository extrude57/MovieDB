const db = require('../../database/connection');




 function find() {
   return db("movie")
    .select("id", "title", "director", "metascore", "genre","description", "favorite");
  }
  
  function findBy(filter) {
    return db("movie").where(filter);
  }
  
  function findById(id) {
    return db("movie").where({ id }).first();
  }
  
  async function add(r) {
    const [id] = await db("movie").insert(r);
    return id;
  }
  
  async function update(id, changes) {
    await db("movie").where({ id }).update(changes);
    return findById(id);
  }
  
  function remove(id) {
    return db("movie").where({ id }).del();
  }
  
  module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
    remove,
  };
