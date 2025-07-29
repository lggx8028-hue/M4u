const movies = {
  "leo": {
    title: "ലിയോ (Leo)",
    embed: "https://drive.google.com/file/d/1abc1234567890/preview",
    download: "https://drive.google.com/uc?export=download&id=1abc1234567890"
  },
  "pathaan": {
    title: "പത്താൻ (Pathaan)",
    embed: "https://playerjs.com/embed.html#pathaan123",
    download: "https://example.com/downloads/pathaan.mp4"
  },
  "vikram": {
    title: "വിക്രം (Vikram)",
    embed: "https://drive.google.com/file/d/2xyz4567890123/preview",
    download: "https://drive.google.com/uc?export=download&id=2xyz4567890123"
  },
  "kalki": {
    title: "കല്കി (Kalki)",
    embed: "https://playerjs.com/embed.html#kalki123",
    download: "https://example.com/downloads/kalki.mp4"
  },
  "beast": {
    title: "ബീസ്റ്റ് (Beast)",
    embed: "https://drive.google.com/file/d/3xyz7890123456/preview",
    download: "https://drive.google.com/uc?export=download&id=3xyz7890123456"
  }
};

const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

if (movieId && movies[movieId]) {
  const movie = movies[movieId];
  document.getElementById("movieTitle").textContent = movie.title;
  document.getElementById("moviePlayer").src = movie.embed;
  document.getElementById("downloadBtn").href = movie.download;
  document.getElementById("downloadBtn").style.display = "inline-block";
} else {
  document.getElementById("movieTitle").textContent = "Movie not found.";
}
