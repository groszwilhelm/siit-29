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
    title: 'Beyond Earth',
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
  const articleElement = document.createElement('article');
  articleElement.classList.add('trending-card');
  
  insertionPoint.appendChild(articleElement);
  
  const imgElement = document.createElement('img');
  imgElement.classList.add('trending-card__image');
  imgElement.setAttribute('src', movieDetails.bgImage);
  imgElement.width = '240';
  imgElement.height = '140';
  
  articleElement.appendChild(imgElement);
  
  const overlayDivElement = document.createElement('div');
  overlayDivElement.classList.add('trending-card__overlay');
  
  articleElement.appendChild(overlayDivElement);
  
  const cardDetailsDivElement = document.createElement('div');
  cardDetailsDivElement.classList.add('trending-card-details');
  
  overlayDivElement.appendChild(cardDetailsDivElement);
  
  const dateSpanElement = document.createElement('span');
  dateSpanElement.classList.add('trending-card__date');
  dateSpanElement.textContent = movieDetails.releaseDate;
  
  cardDetailsDivElement.appendChild(dateSpanElement);
  
  const typeSpanElement = document.createElement('span');
  typeSpanElement.classList.add('trending-card__type');
  typeSpanElement.textContent = movieDetails.genre;
  
  cardDetailsDivElement.appendChild(typeSpanElement);
  
  const iconElement = document.createElement('i');
  for (const iconClass of movieDetails.iconClasses) {
    iconElement.classList.add(iconClass);
  }
  
  typeSpanElement.insertAdjacentElement('afterbegin', iconElement);
  
  if (movieDetails.pg) {
    const pgSpanElement = document.createElement('span');
    pgSpanElement.classList.add('trending-card__rating');
    pgSpanElement.textContent = 'PG';
    
    overlayDivElement.appendChild(pgSpanElement);
  }
  
  const bookmarkSpanElement = document.createElement('span');
  bookmarkSpanElement.classList.add('trending-card__bookmark');
  
  overlayDivElement.appendChild(bookmarkSpanElement);
  
  const iconBookmarkSolidElement = document.createElement('i');
  iconBookmarkSolidElement.classList.add('fa-solid', 'fa-bookmark');
  
  bookmarkSpanElement.appendChild(iconBookmarkSolidElement);
  
  const h3Element = document.createElement('h3');
  h3Element.classList.add('trending-card__title');
  h3Element.textContent = movieDetails.title;
  
  overlayDivElement.appendChild(h3Element);
}

