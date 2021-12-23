
exports.seed = function(knex) {
  // Deletes ALL existing entries
  const movie = [
    {
      id: 0,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      metascore: 100,
      genre: "Drama",
      description: "War hero fuckssdfasdv",
      favorites:false
    },
    {
      id: 1,
      title: "Star Wars",
      director: "George Lucas",
      metascore: 92,
      genre: "Scifi",
      description: "Luke Skywalker ",
      favorites:false
    },
    {
      id: 2,
      title: "The Lord of the Rings",
      director: "Peter Jackson",
      metascore: 92,
      genre: "Fantasy",
      description: "A meek Hobbit",
      favorites:false
    },
    {
      id: 3,
      title: "Terminator 2: Judgement Day",
      director: "James Cameron",
      metascore: 94,
      genre: "Action",
      description: "A cyborg",
      favorites:false
    },
    {
      id: 4,
      title: "Dumb and Dumber",
      director: "The Farely Brothers",
      metascore: 76,
      genre: "Comedy",
      description: "After a ",
      favorites:false
    },
    {
      id: 5,
      title: "Tombstone",
      director: "George P. Cosmatos",
      metascore: 89,
      genre: "Drama",
      description: "A successful lawma",
      favorites:false
    }
  ];
  return knex('movie').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie').insert(
        movie
      );
    });
};



 