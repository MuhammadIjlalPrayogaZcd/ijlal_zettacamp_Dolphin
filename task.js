// Variable to store song lists with song details (array of objects)
const songList = [
   { title: "Love Story", artist: "Taylor Swift", genre: "Pop", duration: 233 }, // Duration is in seconds
   { title: "Believer", artist: "Imagine Dragons", genre: "Rock", duration: 178 },
   { title: "Alright", artist: "Kendrick Lamar", genre: "HipHop", duration: 234 },
   { title: "Shake It Off", artist: "Taylor Swift", genre: "Pop", duration: 370 },
   { title: "HUMBLE.", artist: "Kendrick Lamar", genre: "HipHop", duration: 350 },
   { title: "Radioactive", artist: "Imagine Dragons", genre: "Rock", duration: 187 },
   { title: "I Knew You Were Trouble", artist: "Taylor Swift", genre: "Rock", duration: 214 },
   { title: "Blank Space", artist: "Taylor Swift", genre: "Pop", duration: 231 },
   { title: "Thunder", artist: "Imagine Dragons", genre: "Rock", duration: 187 },
   { title: "Whatever It Takes", artist: "Imagine Dragons", genre: "Rock", duration: 198 },
   { title: "Demons", artist: "Imagine Dragons", genre: "Rock", duration: 165 },
   { title: "Swimming Pools (Drank)", artist: "Kendrick Lamar", genre: "HipHop", duration: 245 },
   { title: "Bad Blood", artist: "Taylor Swift", genre: "Pop", duration: 352 },
   { title: "King Kunta", artist: "Kendrick Lamar", genre: "HipHop", duration: 231 },
   { title: "DNA.", artist: "Kendrick Lamar", genre: "HipHop", duration: 289 },
];

// Function to group songs based on artists
function groupByArtist(songs) {
   const groupedArtist = {};
   songs.forEach((song) => {
      if (!groupedArtist[song.artist]) {
         groupedArtist[song.artist] = [];
      }
      groupedArtist[song.artist].push(song);
   });
   console.log("Songs Grouped by Artist:", groupedArtist);
   console.log("\n++++++++++++++++++++++++++++++++++++\n");
}

// Function to group songs based on genre
function groupByGenre(songs) {
   const groupedGenre = {};
   songs.forEach((song) => {
      if (!groupedGenre[song.genre]) {
         groupedGenre[song.genre] = [];
      }
      groupedGenre[song.genre].push(song);
   });
   console.log("Songs Grouped by Genre:", groupedGenre);
   console.log("\n++++++++++++++++++++++++++++++++++++\n");
}

// Function to group songs with duration less than 1 hour
function groupByRandomArtistAndGenre(songs) {
   const grouped = [];
   let duration = 0;
   songs.forEach(() => {
      const randomIndex = Math.floor(Math.random() * songs.length);
      const randomSong = songs[randomIndex];
      if (duration + randomSong.duration < 3600) {
         // 1 hour in seconds
         grouped.push(randomSong);
         duration += randomSong.duration;
      }
   });
   console.log("Songs Less Than 1 Hour (Random Artist and Genre):", grouped);
   console.log("Total Duration:", duration, "second");
}

// Group songs by artist
// groupByArtist(songList);

// Group songs by genre
// groupByGenre(songList);

// Group songs with duration less than 1 hour
groupByRandomArtistAndGenre(songList);
