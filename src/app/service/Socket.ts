import { io } from "socket.io-client";

const socket = io('https://realtrends-challenge-mrcrdz.herokuapp.com/', {
  withCredentials: true,
});

export default socket;