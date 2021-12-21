const db = require('../../database/connection');

module.exports = {
  find,
  findBy,
  findById,
  add,
  update,
  remove,
};

 function find() {
   return db("movie as m")
    .select("m.id", "m.title", "m.director", "m.metascore", "m.genre","m.description");
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
  
