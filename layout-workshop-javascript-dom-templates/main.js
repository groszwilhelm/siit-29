const trendingMovies = [
  {
    title: 'Beyond Earth',
    releaseDate: '2019',
    genre: 'Series',
    pg: true,
    bookmarked: false,
    bgImage: 'https://picsum.photos/240/140',
    iconClasses: ['fa-solid', 'fa-house']
  },
  {
    title: 'Beyond Earth 2',
    releaseDate: '2019',
    genre: 'Series',
    pg: true,
    bookmarked: false,
    bgImage: 'https://picsum.photos/240/140',
    iconClasses: ['fa-solid', 'fa-house']
  },
  {
    title: 'Beyond Earth 3',
    releaseDate: '2019',
    genre: 'Series',
    pg: true,
    bookmarked: false,
    bgImage: 'https://picsum.photos/240/140',
    iconClasses: ['fa-solid', 'fa-house']
  }
];

const recommendedMovies = [
  {
    title: 'Beyond Earth',
    releaseDate: '2019',
    genre: 'Series',
    pg: true,
    bookmarked: false,
    bgImage: 'https://picsum.photos/240/140',
    iconClasses: ['fa-solid', 'fa-house']
  },
  {
    title: 'Beyond Earth',
    releaseDate: '2019',
    genre: 'Series',
    pg: true,
    bookmarked: false,
    bgImage: 'https://picsum.photos/240/140',
    iconClasses: ['fa-solid', 'fa-house']
  },
  {
    title: 'Beyond Earth',
    releaseDate: '2019',
    genre: 'Series',
    pg: true,
    bookmarked: false,
    bgImage: 'https://picsum.photos/240/140',
    iconClasses: ['fa-solid', 'fa-house']
  },
  {
    title: 'Beyond Earth',
    releaseDate: '2019',
    genre: 'Series',
    pg: true,
    bookmarked: false,
    bgImage: 'https://picsum.photos/240/140',
    iconClasses: ['fa-solid', 'fa-house']
  },
  {
    title: 'Beyond Earth',
    releaseDate: '2019',
    genre: 'Series',
    pg: true,
    bookmarked: false,
    bgImage: 'https://picsum.photos/240/140',
    iconClasses: ['fa-solid', 'fa-house']
  },
  {
    title: 'Beyond Earth',
    releaseDate: '2019',
    genre: 'Series',
    pg: true,
    bookmarked: false,
    bgImage: 'https://picsum.photos/240/140',
    iconClasses: ['fa-solid', 'fa-house']
  },
  {
    title: 'Beyond Earth',
    releaseDate: '2019',
    genre: 'Series',
    pg: true,
    bookmarked: false,
    bgImage: 'https://picsum.photos/240/140',
    iconClasses: ['fa-solid', 'fa-house']
  },
  {
    title: 'Beyond Earth',
    releaseDate: '2019',
    genre: 'Series',
    pg: true,
    bookmarked: false,
    bgImage: 'https://picsum.photos/240/140',
    iconClasses: ['fa-solid', 'fa-house']
  },
  {
    title: 'Beyond Earth',
    releaseDate: '2019',
    genre: 'Series',
    pg: true,
    bookmarked: false,
    bgImage: 'https://picsum.photos/240/140',
    iconClasses: ['fa-solid', 'fa-house']
  },
  {
    title: 'Beyond Earth',
    releaseDate: '2019',
    genre: 'Series',
    pg: true,
    bookmarked: false,
    bgImage: 'https://picsum.photos/240/140',
    iconClasses: ['fa-solid', 'fa-house']
  },
  {
    title: 'Beyond Earth',
    releaseDate: '2019',
    genre: 'Series',
    pg: true,
    bookmarked: false,
    bgImage: 'https://picsum.photos/240/140',
    iconClasses: ['fa-solid', 'fa-house']
  },
  {
    title: 'Beyond Earth',
    releaseDate: '2019',
    genre: 'Series',
    pg: true,
    bookmarked: false,
    bgImage: 'https://picsum.photos/240/140',
    iconClasses: ['fa-solid', 'fa-house']
  },
  {
    title: 'Beyond Something test',
    releaseDate: '2019',
    genre: 'Series',
    pg: true,
    bookmarked: false,
    bgImage: 'https://picsum.photos/240/140',
    iconClasses: ['fa-solid', 'fa-house']
  },
];

const trendingSection = document.querySelector('[data-trending]');
const recommendedSection = document.querySelector('[data-recommended]');

for (const movieDetails of trendingMovies) {
  createMovieItem(trendingSection, movieDetails);
}

for (const movieDetails of recommendedMovies) {
  createMovieItem(recommendedSection, movieDetails);
}

function createMovieItem(insertionPoint, movieDetails) {
  const template = document.querySelector('#movie-card');
  const clonedTemplate = template.content.cloneNode(true);

  const img = clonedTemplate.querySelector('[data-card-img]');
  img.src = movieDetails.bgImage;

  const date = clonedTemplate.querySelector('[data-card-date]');
  date.textContent = movieDetails.releaseDate;

  const type = clonedTemplate.querySelector('[data-card-type]');
  type.textContent = movieDetails.genre;
  
  const typeIcon = type.querySelector('[data-card-type-icon]');
  // debugger;
  // for (const iconClass of movieDetails.iconClasses) {
  //   typeIcon.classList.add(iconClass);
  // }
  
  const pg = clonedTemplate.querySelector('[data-card-pg]');
  
  if (!movieDetails.pg) {
    pg.classList.add('hidden');
  }

  const bookmarkIcon = clonedTemplate.querySelector('[data-card-bookmark-icon]');
  // bookmarkIcon.classList.add('fa-solid', 'fa-bookmark');

  const title = clonedTemplate.querySelector('[data-card-title]');
  title.textContent = movieDetails.title;

  insertionPoint.appendChild(clonedTemplate);
}
