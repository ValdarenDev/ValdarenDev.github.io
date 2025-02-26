const movies = [
    'Bee Movie',
    'Shrek',
    'Harry Potter',
    'Twisters',
    'Priscilla',
    'Elvis(2022)',
    'Cars',
    'The Big Bang Theory',
    'The Office',
    'John Wick',
    'Elemental',
    'Inside Out',
    'Moana',
    'Encanto',
    'Frozen',
    'Finding Nemo',
    'Big Hero 6',
    'IF',
    'Kung Fu Panda',
    'Dumb Money',
    'Hidden Figures',
    'How To Train Your Dragon',
    'The Lego Movie',
    'Top Gun: Maverick',
    'The Wild Robot',
    'Monsters Inc.',
    "Don't Worry Darling",
    'Gladiator',
    'Up',
    'Wall-E',
    'Take Care of Maya',
    'The Greatest Showman',
    'Maze Runner',
    'Forrest Gump',
    'Interstellar',
    'Back to the Future',
    'Spider-Man',
    'Toy Story',
    'Coco',
    'Oppenheimer',
    'Jurassic Park',
    'We Live in Time',
    'A Quiet Place',
    'Elf',
    'Caroline',
    'Deadpool',
    'Carry-On',
    'The Princess Diaries',
    'Avatar',
    'Avatar: The Last Airbender',
    'Spy Kids',
    'Zoo Lander',
    'Happy Feet',
    'The Polar Express',
    'Napoleon Dynamite'
];

const container = document.getElementById('movie-container');

for (let i = 0; i < movies.length; i += 3) {
    const row = document.createElement('div');
    const hr = document.createElement('hr');
    row.classList.add('row', 'my-5');

    for (let j = i; j < i + 3 && j < movies.length; j++) {
        const col = document.createElement('div');
        col.classList.add('col-lg-4', 'col-md-4', 'col-sm-12');

        const h2 = document.createElement('h2');
        h2.innerText = movies[j];
        h2.classList.add('my-4', 'my-h2')

        col.appendChild(h2);
        row.appendChild(col);
    }

    container.appendChild(row);
    hr.classList.add('hr', 'hr-blurry',);
    container.appendChild(hr);

}
