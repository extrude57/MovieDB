# MovieDB
Deployed on https://movie-kdb.herokuapp.com/api

# Endpoints cover
get Movies
post Movie
delete Movie
put Movie


<h2>ENDPOINTS</h2>


| End Point | Description |
| --- | --- |
| `DELETE https://movie-kdb.herokuapp.com/api/movie/:id` | Delete the movie by id number | 
| `POST https://movie-kdb.herokuapp.com/api/movie` | Post the movie shape | 
| `GET https://movie-kdb.herokuapp.com/api/movie` | GET all movies in the database |
| `GET https://movie-kdb.herokuapp.com/api/movie/:id` | Get movie by the id number | 
| `PUT https://movie-kdb.herokuapp.com/api/movie/1` | Update settings of the movie shape based off the id |


# Movie Schema object

    {
      "id" : 5,
      "title" : "Tombstone",
      "director" : "George P. Cosmatos",
      "metascore" : 89,
      "genre" : "Drama",
      "description" : "A successful lawma",
      "favorites" : false
    }