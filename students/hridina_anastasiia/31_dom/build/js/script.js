/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];
var heading = document.createElement('h2');
document.body.prepend(heading);
heading.textContent = 'Songs List';
var list = document.createElement('ol');
document.body.append(list);
list.classList.add('songs__list');
console.log(list);
for (i = 0; i < playList.length; i++) {
  var songsItem = document.createElement('li');
  songsItem.classList.add('songs_item');
  list.prepend(songsItem);
  console.log(songsItem);
  var songAuthor = document.createElement('strong');
  songAuthor.textContent = 'Author:' + ' ';
  songsItem.prepend(songAuthor);
  songsItem.append(document.createTextNode(playList[i].author));
  console.log(songAuthor);
  var lineBreak = document.createElement('br');
  songsItem.append(lineBreak);
  var songName = document.createElement('strong');
  songName.textContent = 'Song:' + ' ';
  songsItem.append(songName);
  songsItem.append(document.createTextNode(playList[i].song));
  console.log(songName);
}
/******/ })()
;
//# sourceMappingURL=script.js.map