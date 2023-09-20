
const playList = [

    {

        author: "LED ZEPPELIN",

        song: "STAIRWAY TO HEAVEN"

    },

    {

        author: "QUEEN",

        song: "BOHEMIAN RHAPSODY"

    },

    {

        author: "LYNYRD SKYNYRD",

        song: "FREE BIRD"

    },

    {

        author: "DEEP PURPLE",

        song: "SMOKE ON THE WATER"

    },

    {

        author: "JIMI HENDRIX",

        song: "ALL ALONG THE WATCHTOWER"

    },

    {

        author: "AC/DC",

        song: "BACK IN BLACK"

    },

    {

        author: "QUEEN",

        song: "WE WILL ROCK YOU"

    },

    {

        author: "METALLICA",

        song: "ENTER SANDMAN"

    }

];

const heading = document.createElement('h2');
document.body.prepend(heading);
heading.textContent = 'Songs List';

const list = document.createElement('ol');
document.body.append(list);
list.classList.add('songs__list');
console.log(list);

for (i = 0; i < playList.length; i++) {
    const songsItem = document.createElement('li');
    const songAuthor = document.createElement('strong');
    const authors = document.createElement('span');
    const lineBreak = document.createElement('br');
    const songName = document.createElement('strong');
    const songs = document.createElement('span');

    songsItem.classList.add('songs_item');

    songAuthor.textContent = 'Author:' + ' ';
    authors.textContent = playList[i].author;

    songName.textContent = 'Song:' + ' ';
    songs.textContent = playList[i].song;

    songsItem.prepend(songAuthor, authors, lineBreak, songName, songs);
    list.append(songsItem);
}





