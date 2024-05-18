const movies = [
  {
    "title": "Inception",
    "year": 2010,
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "director": "Christopher Nolan",
    "rating": 9.3,
    "createdAt": "2024-05-12T08:00:00.000Z",
    "updatedAt": "2024-05-12T08:00:00.000Z",
    "similarBestMovie": "60a3b7393d4dcd001c8f4468",
    "scores": {
      "IMDb": 8.8,
      "Metacritic": 74,
      "RottenTomatoes": 87
    },
    "mainActors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
  },
  {
    "title": "The Dark Knight",
    "year": 2008,
    "genre": ["Action", "Crime", "Drama"],
    "director": "Christopher Nolan",
    "rating": 9,
    "createdAt": "2024-05-12T08:00:00.000Z",
    "updatedAt": "2024-05-12T08:00:00.000Z",
    "similarBestMovie": "60a3b7393d4dcd001c8f4469",
    "scores": {
      "IMDb": 9,
      "Metacritic": 84,
      "RottenTomatoes": 94
    },
    "mainActors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
  },
  {
    "title": "Interstellar",
    "year": 2014,
    "genre": ["Adventure", "Drama", "Sci-Fi"],
    "director": "Christopher Nolan",
    "rating": 8.6,
    "createdAt": "2024-05-12T08:00:00.000Z",
    "updatedAt": "2024-05-12T08:00:00.000Z",
    "similarBestMovie": "60a3b7393d4dcd001c8f4470",
    "scores": {
      "IMDb": 8.6,
      "Metacritic": 74,
      "RottenTomatoes": 72
    },
    "mainActors": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
  },
  {
    "title": "The Shawshank Redemption",
    "year": 1994,
    "genre": ["Drama"],
    "director": "Frank Darabont",
    "rating": 9.3,
    "createdAt": "2024-05-12T08:00:00.000Z",
    "updatedAt": "2024-05-12T08:00:00.000Z",
    "similarBestMovie": "60a3b7393d4dcd001c8f4471",
    "scores": {
      "IMDb": 9.3,
      "Metacritic": 80,
      "RottenTomatoes": 91
    },
    "mainActors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
  },
  {
    "title": "Pulp Fiction",
    "year": 1994,
    "genre": ["Crime", "Drama"],
    "director": "Quentin Tarantino",
    "rating": 8.9,
    "createdAt": "2024-05-12T08:00:00.000Z",
    "updatedAt": "2024-05-12T08:00:00.000Z",
    "similarBestMovie": "60a3b7393d4dcd001c8f4472",
    "scores": {
      "IMDb": 8.9,
      "Metacritic": 94,
      "RottenTomatoes": 92
    },
    "mainActors": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
  },
  {
    "title": "Forrest Gump",
    "year": 1994,
    "genre": ["Drama", "Romance"],
    "director": "Robert Zemeckis",
    "rating": 8.8,
    "createdAt": "2024-05-12T08:00:00.000Z",
    "updatedAt": "2024-05-12T08:00:00.000Z",
    "similarBestMovie": "60a3b7393d4dcd001c8f4473",
    "scores": {
      "IMDb": 8.8,
      "Metacritic": 82,
      "RottenTomatoes": 71
    },
    "mainActors": ["Tom Hanks", "Robin Wright", "Gary Sinise"]
  },
  {
    "title": "Fight Club",
    "year": 1999,
    "genre": ["Drama"],
    "director": "David Fincher",
    "rating": 8.8,
    "createdAt": "2024-05-12T08:00:00.000Z",
    "updatedAt": "2024-05-12T08:00:00.000Z",
    "similarBestMovie": "60a3b7393d4dcd001c8f4474",
    "scores": {
      "IMDb": 8.8,
      "Metacritic": 66,
      "RottenTomatoes": 79
    },
    "mainActors": ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
  },
  {
    "title": "The Matrix",
    "year": 1999,
    "genre": ["Action", "Sci-Fi"],
    "director": "Lana Wachowski",
    "rating": 8.7,
    "createdAt": "2024-05-12T08:00:00.000Z",
    "updatedAt": "2024-05-12T08:00:00.000Z",
    "similarBestMovie": "60a3b7393d4dcd001c8f4475",
    "scores": {
      "IMDb": 8.7,
      "Metacritic": 73,
      "RottenTomatoes": 87
    },
    "mainActors": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
  },
  {
    "title": "The Godfather",
    "year": 1972,
    "genre": ["Crime", "Drama"],
    "director": "Francis Ford Coppola",
    "rating": 9.2,
    "createdAt": "2024-05-12T08:00:00.000Z",
    "updatedAt": "2024-05-12T08:00:00.000Z",
    "similarBestMovie": "60a3b7393d4dcd001c8f4476",
    "scores": {
      "IMDb": 9.2,
      "Metacritic": 100,
      "RottenTomatoes": 97
    },
    "mainActors": ["Marlon Brando", "Al Pacino", "James Caan"]
  },
  {
    "title": "The Lord of the Rings: The Return of the King",
    "year": 2003,
    "genre": ["Adventure", "Drama", "Fantasy"],
    "director": "Peter Jackson",
    "rating": 8.9,
    "createdAt": "2024-05-12T08:00:00.000Z",
    "updatedAt": "2024-05-12T08:00:00.000Z",
    "similarBestMovie": "60a3b7393d4dcd001c8f4477",
    "scores": {
      "IMDb": 8.9,
      "Metacritic": 94,
      "RottenTomatoes": 93
    },
    "mainActors": ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"]
  },
  {
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "year": 2001,
    "genre": ["Adventure", "Drama", "Fantasy"],
    "director": "Peter Jackson",
    "rating": 8.8,
    "createdAt": "2024-05-12T08:00:00.000Z",
    "updatedAt": "2024-05-12T08:00:00.000Z",
    "similarBestMovie": "60a3b7393d4dcd001c8f4478",
    "scores": {
      "IMDb": 8.8,
      "Metacritic": 92,
      "RottenTomatoes": 91
    },
    "mainActors": ["Elijah Wood", "Ian McKellen", "Orlando Bloom"]
  },
  {
    "title": "The Lord of the Rings: The Two Towers",
    "year": 2002,
    "genre": ["Adventure", "Drama", "Fantasy"],
    "director": "Peter Jackson",
    "rating": 8.7,
    "createdAt": "2024-05-12T08:00:00.000Z",
    "updatedAt": "2024-05-12T08:00:00.000Z",
    "similarBestMovie": "60a3b7393d4dcd001c8f4479",
    "scores": {
      "IMDb": 8.7,
      "Metacritic": 87,
      "RottenTomatoes": 95
    },
    "mainActors": ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"]
  },
  {
    "title": "Schindler's List",
    "year": 1993,
    "genre": ["Biography", "Drama", "History"],
    "director": "Steven Spielberg",
    "rating": 8.9,
    "createdAt": "2024-05-12T08:00:00.000Z",
    "updatedAt": "2024-05-12T08:00:00.000Z",
    "similarBestMovie": "60a3b7393d4dcd001c8f4480",
    "scores": {
      "IMDb": 8.9,
      "Metacritic": 93,
      "RottenTomatoes": 97
    },
    "mainActors": ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes"]
  },
  {
    "title": "Saving Private Ryan",
    "year": 1998,
    "genre": ["Drama", "War"],
    "director": "Steven Spielberg",
    "rating": 8.6,
    "createdAt": "2024-05-12T08:00:00.000Z",
    "updatedAt": "2024-05-12T08:00:00.000Z",
    "similarBestMovie": "60a3b7393d4dcd001c8f4481",
    "scores": {
      "IMDb": 8.6,
      "Metacritic": 91,
      "RottenTomatoes": 93
    },
    "mainActors": ["Tom Hanks", "Matt Damon", "Tom Sizemore"]
  },
  {
    "title": "The Green Mile",
    "year": 1999,
    "genre": ["Crime", "Drama", "Fantasy"],
    "director": "Frank Darabont",
    "rating": 8.6,
    "createdAt": "2024-05-12T08:00:00.000Z",
    "updatedAt": "2024-05-12T08:00:00.000Z",
    "similarBestMovie": "60a3b7393d4dcd001c8f4482",
    "scores": {
      "IMDb": 8.6,
      "Metacritic": 61,
      "RottenTomatoes": 78
    },
    "mainActors": ["Tom Hanks", "Michael Clarke Duncan", "David Morse"]
  },
  {
    "title": "The Departed",
    "year": 2006,
    "genre": ["Crime", "Drama", "Thriller"],
    "director": "Martin Scorsese",
    "rating": 8.5,
    "createdAt": "2024-05-12T08:00:00.000Z",
    "updatedAt": "2024-05-12T08:00:00.000Z",
    "similarBestMovie": "60a3b7393d4dcd001c8f4483",
    "scores": {
      "IMDb": 8.5,
      "Metacritic": 85,
      "RottenTomatoes": 91
    },
    "mainActors": ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
  },
  {
    "title": "Gladiator",
    "year": 2000,
    "genre": ["Action", "Adventure", "Drama"],
    "director": "Ridley Scott",
    "rating": 8.5,
    "createdAt": "2024-05-12T08:00:00.000Z",
    "updatedAt": "2024-05-12T08:00:00.000Z",
    "similarBestMovie": "60a3b7393d4dcd001c8f4484",
    "scores": {
      "IMDb": 8.5,
      "Metacritic": 67,
      "RottenTomatoes": 77
    },
    "mainActors": ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"]
  },
  {
    "title": "The Silence of the Lambs",
    "year": 1991,
    "genre": ["Crime", "Drama", "Thriller"],
    "director": "Jonathan Demme",
    "rating": 8.6,
    "createdAt": "2024-05-12T08:00:00.000Z",
    "updatedAt": "2024-05-12T08:00:00.000Z",
    "similarBestMovie": "60a3b7393d4dcd001c8f4485",
    "scores": {
      "IMDb": 8.6,
      "Metacritic": 85,
      "RottenTomatoes": 96
    },
    "mainActors": ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"]
  },
  {
    "title": "The Usual Suspects",
    "year": 1995,
    "genre": ["Crime", "Drama", "Mystery"],
    "director": "Bryan Singer",
    "rating": 8.5,
    "createdAt": "2024-05-12T08:00:00.000Z",
    "updatedAt": "2024-05-12T08:00:00.000Z",
    "similarBestMovie": "60a3b7393d4dcd001c8f4486",
    "scores": {
      "IMDb": 8.5,
      "Metacritic": 77,
      "RottenTomatoes": 89
    },
    "mainActors": ["Kevin Spacey", "Gabriel Byrne", "Chazz Palminteri"]
  },
  {
    "title": "American History X",
    "year": 1998,
    "genre": ["Drama"],
    "director": "Tony Kaye",
    "rating": 8.5,
    "createdAt": "2024-05-12T08:00:00.000Z",
    "updatedAt": "2024-05-12T08:00:00.000Z",
    "similarBestMovie": "60a3b7393d4dcd001c8f4487",
    "scores": {
      "IMDb": 8.5,
      "Metacritic": 62,
      "RottenTomatoes": 83
    },
    "mainActors": ["Edward Norton", "Edward Furlong", "Beverly D'Angelo"]
  }
];

module.exports = { movies };