import axios from "axios";

export const getChirps = () => {
  return axios.get("/api/chirps");
};

export const getUserChirps = id => {
  return axios.get(`/api/chirps/user/${id}`);
};

export const writeChirp = data => {
  return axios.post("/api/chirps/new", data);
};
