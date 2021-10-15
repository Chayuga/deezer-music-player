import axios from "axios";

const API_KEY = "dfc6ad1c81mshd34ee6e92c3f38ap1de39djsn60d8db14d47d";

const request = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
  timeout: 30000,
  headers: { "x-rapidapi-key": API_KEY },
});

export function getAlbums(search = "eminem") {
  const albums = request
    .get(`search?q=${search}`)
    .then((response) => response.data.data)
    .catch((error) => console.log(error));
  return albums;
}

export function getAlbum(id) {
  const album = request
    .get(`album/${id}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return album;
}
