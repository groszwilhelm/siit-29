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

  const genre = document.createTextNode(movieDetails.genre);
  type.appendChild(genre);
  
  const typeIcon = clonedTemplate.querySelector('[data-card-type-icon]');

  for (const iconClass of movieDetails.iconClasses) {
    typeIcon.classList.add(iconClass);
  }
  
  const pg = clonedTemplate.querySelector('[data-card-pg]');
  
  if (!movieDetails.pg) {
    pg.classList.add('hidden');
  }

  const bookmarkIcon = clonedTemplate.querySelector('[data-card-bookmark-icon]');
  bookmarkIcon.classList.add('fa-regular', 'fa-bookmark')
  
  bookmarkIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    
    if (bookmarkIcon.classList.contains('fa-regular')) {
      bookmarkIcon.classList.remove('fa-regular');
      bookmarkIcon.classList.add('fa-solid');
    } else {
      bookmarkIcon.classList.remove('fa-solid');
      bookmarkIcon.classList.add('fa-regular');
    }
    // alternative to the above code
    // bookmarkIcon.classList.toggle('fa-solid');
    // bookmarkIcon.classList.toggle('fa-regular');
  });

  const title = clonedTemplate.querySelector('[data-card-title]');
  title.textContent = movieDetails.title;

  insertionPoint.appendChild(clonedTemplate);
}

document.addEventListener('click', () => {
  console.log('I have been clicked');
})
