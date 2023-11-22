import { reactive } from "vue";
import { Socket, io } from "socket.io-client";
import {
  ClientToServerEvents,
  Entry,
  ServerToClientEvents,
} from "../types/SocketIoTypes";
import { Quiz } from "../types/Quiz";

interface State {
  connected: boolean;
  userId: number | undefined;
  currentQuiz: Quiz | undefined;
}
export const state: State = reactive({
  connected: false,
  userId: undefined,
  currentQuiz: undefined,
});
interface AdminState {
  numberOfQuestionRemaining: number;
  currentQuiz: Quiz | undefined;
  entries: Array<Entry> | undefined;
}
export const adminState: AdminState = reactive({
  numberOfQuestionRemaining: 0,
  currentQuiz: undefined,
  entries: undefined,
});

// "undefined" means the URL will be computed from the `window.location` object";
const URL = import.meta.env.DEV ? "http://localhost:3001" : undefined;

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = URL
  ? io(URL, { port: 3001 })
  : io({ port: 3001 });

socket.on("connect", () => {
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("newUserId", (id) => {
  state.userId = id;
});

socket.on("flushOldQuestion", () => {
  state.currentQuiz = undefined;
  adminState.currentQuiz = undefined;
  adminState.entries = undefined;
});

socket.on("newQuestion", (quiz) => {
  state.currentQuiz = quiz;
  adminState.currentQuiz = quiz;
});

socket.on("listOfAnswers", (entries) => {
  adminState.entries = entries;
});

socket.on("numberOfQuestionRemaining", (_) => {
  adminState.numberOfQuestionRemaining = _;
});

export function submitAnswer(answer: string) {
  socket.emit("submitAnswer", answer, state.userId!);
}

export function adminReset() {
  socket.emit("reset");
}

export function sendNewQuestion(collection: number) {
  socket.emit("sendNewQuestion", collection);
}

export function adminJoin() {
  socket.emit("joinAdminRoom");
}

export function getNumberOfRemainingQuestion(collection: number) {
  socket.emit("getNumberOfRemainingQuestion", collection);
}
