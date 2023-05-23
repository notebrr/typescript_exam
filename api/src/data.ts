const moviesData = [
  {
    title: 'Inception',
    director: 'Christopher Nolan',
    url: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
    description: 'A skilled extractor is offered a chance to regain his old life as payment for a task considered to be impossible.',
  },
  {
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    url: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
  },
  {
    title: 'Interstellar',
    director: 'Christopher Nolan',
    url: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
  },
  {
    title: 'The Matrix',
    director: 'Lana and Lilly Wachowski',
    url: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
  },
  {
    category: 'Action',
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    url: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  },
];

const reviewsData = [
  {
    movieTitle: 'Inception',
    reviews: [
      {
        reviewerName: 'John Doe',
        rating: 5,
        comments: 'Amazing movie!'
      },
      {
        reviewerName: 'Jane Smith',
        rating: 4,
        comments: 'Great plot and visuals.'
      }
    ]
  },
];

const category = [
  {
    name: 'Action',
  },
  {
    name: 'Sci-Fi',
  },
  {
    name: 'Drama',
  },
];
export { moviesData, reviewsData , category};
