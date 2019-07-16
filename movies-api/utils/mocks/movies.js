const moviesMock = [
  {
    id: 'd2a4a062-d256-41bb-b1b2-9d915af6b75e',
    title: 'Notti bianche, Le (White Nights)',
    year: 2019,
    cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    duration: 66,
    contentRating: 'G',
    source: 'https://ovh.net/semper/rutrum/nulla/nunc.jsp',
    tags: [
      'Action|Adventure',
      'Action|Adventure|Thriller',
      'Horror|Western',
      'Horror|Thriller',
      'Comedy|Romance|Sci-Fi',
      'Adventure|Animation|Children|Comedy|Fantasy',
      'Drama'
    ]
  },
  {
    id: '3f951b6d-03fa-4fb0-a7a1-188c0abe9e06',
    title: "King Solomon's Mines",
    year: 2019,
    cover: 'http://dummyimage.com/800x600.png/dddddd/000000',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    duration: 77,
    contentRating: 'NC-17',
    source:
      'https://multiply.com/dui/proin/leo/odio/porttitor/id/consequat.jsp',
    tags: [
      'Comedy',
      'War',
      'Drama|Horror',
      'Comedy|Drama|Romance',
      'Drama|Thriller',
      'Comedy',
      'Action|Drama|War',
      'Drama'
    ]
  },
  {
    id: 'c030eed2-dad1-47f4-b660-9cfb7170eadb',
    title: 'Inhuman Resources (Redd Inc.)',
    year: 2018,
    cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    duration: 142,
    contentRating: 'PG',
    source: 'http://odnoklassniki.ru/porta/volutpat/erat.jsp',
    tags: ['Crime|Drama|Thriller']
  },
  {
    id: 'c672ff92-c373-49f4-9c5b-f0151d304361',
    title: 'Fortress',
    year: 2019,
    cover: 'http://dummyimage.com/800x600.png/cc0000/ffffff',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    duration: 172,
    contentRating: 'PG',
    source: 'https://un.org/tortor/id/nulla/ultrices/aliquet/maecenas.png',
    tags: ['Drama', 'Drama|Mystery|Thriller', 'Drama|Thriller']
  },
  {
    id: '5ec75811-1001-4612-9743-67296d90071a',
    title: 'Transylmania',
    year: 2018,
    cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    duration: 155,
    contentRating: 'G',
    source: 'http://pagesperso-orange.fr/varius/ut/blandit/non/interdum/in.js',
    tags: [
      'Crime|Drama|Mystery|Thriller',
      'Crime|Drama|Mystery|Thriller',
      'Comedy|Sci-Fi',
      'Adventure|Comedy|Sci-Fi',
      'Drama'
    ]
  },
  {
    id: '63d718f2-4e37-4090-ad57-dd2cf22393e6',
    title: "Big Girls Don't Cry... They Get Even (Stepkids)",
    year: 2018,
    cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    duration: 173,
    contentRating: 'R',
    source: 'https://nih.gov/erat/quisque/erat/eros.jpg',
    tags: ['Action|Drama', 'Comedy']
  },
  {
    id: 'e9093aaa-daf2-4e32-aa6b-c3d79d0d9120',
    title: 'Amreeka',
    year: 2018,
    cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    duration: 115,
    contentRating: 'R',
    source: 'https://umich.edu/cursus/id/turpis/integer/aliquet.aspx',
    tags: ['Comedy|Romance', 'Drama|Thriller', 'Animation|Children']
  },
  {
    id: '94f4fa76-fcf9-4aa3-a18f-f54bb7d462bc',
    title: 'Hollow Man',
    year: 2018,
    cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    duration: 158,
    contentRating: 'NC-17',
    source: 'https://psu.edu/duis/bibendum/morbi/non/quam.aspx',
    tags: ['Drama', 'Thriller']
  },
  {
    id: '9a2e5834-4eb5-4083-8c21-87fdfc0b3b52',
    title: 'Hard Target',
    year: 2018,
    cover: 'http://dummyimage.com/800x600.png/dddddd/000000',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    duration: 173,
    contentRating: 'PG',
    source: 'https://flavors.me/lorem/ipsum/dolor/sit.json',
    tags: [
      'Animation|Comedy',
      'Documentary',
      'Action|Fantasy|Horror',
      'Thriller',
      'Comedy|Crime',
      'Drama'
    ]
  },
  {
    id: '11fff70c-c312-4791-b8b4-1a0665edd79e',
    title: 'Siete minutos (Seven Minutes)',
    year: 2019,
    cover: 'http://dummyimage.com/800x600.png/5fa2dd/ffffff',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 62,
    contentRating: 'PG',
    source:
      'http://columbia.edu/eget/orci/vehicula/condimentum/curabitur/in/libero.html',
    tags: ['Action|Adventure|Comedy|Drama|War', 'Animation', 'Drama']
  }
];

function filteredMoviesMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock
};
