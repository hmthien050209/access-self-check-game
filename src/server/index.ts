import { Server } from "socket.io";
import { createServer } from "http";
import { quizes1, quizes2 } from "./quizes.ts";
import {
  ServerToClientEvents,
  ClientToServerEvents,
  Entry,
} from "../types/SocketIoTypes.ts";
import { randomInt } from "crypto";
import { Quiz } from "../types/Quiz.ts";

let userCount = 1;
let currentQuiz: Quiz | undefined = undefined;
let startTime: number = 0;
let entries: Array<Entry> = new Array<Entry>();

const httpServer = createServer();
const io = new Server<ClientToServerEvents, ServerToClientEvents>(httpServer, {
  cors: {
    origin: "*", // for dev purpose only
  },
});
httpServer.listen(3001);

io.on("connection", (socket) => {
  socket.emit("newUserId", userCount);
  console.log(`${userCount} connected`);
  userCount++;

  socket.on("sendNewQuestion", (fromCollection) => {
    switch (fromCollection) {
      case 1: {
        let randIdx = randomInt(quizes1.length);
        currentQuiz = quizes1.at(randIdx)!;
        io.emit("newQuestion", currentQuiz);
        startTime = Date.now();
        quizes1.splice(randIdx, 1);
        io.to("admin").emit("numberOfQuestionRemaining", quizes1.length);
        break;
      }
      case 2: {
        let randIdx = randomInt(quizes2.length);
        currentQuiz = quizes2.at(randIdx)!;
        io.emit("newQuestion", currentQuiz);
        startTime = Date.now();
        quizes2.splice(randIdx, 1);
        io.to("admin").emit("numberOfQuestionRemaining", quizes1.length);
        break;
      }
    }
  });

  socket.on("submitAnswer", (answer, userId) => {
    const entry = {
      userId: userId,
      answer: answer,
      timeToAnswer: Date.now() - startTime,
    };
    entries.push(entry);
    console.log(entry);
    entries.sort((a, b) => a.timeToAnswer - b.timeToAnswer);
    io.to("admin").emit("listOfAnswers", entries);
  });

  socket.on("reset", () => {
    currentQuiz = undefined;
    startTime = 0;
    entries = new Array<Entry>();
    io.emit("flushOldQuestion");
  });

  socket.on("joinAdminRoom", () => {
    socket.join("admin");
  });

  socket.on("getNumberOfRemainingQuestion", (collection) => {
    switch (collection) {
      case 1: {
        io.to("admin").emit("numberOfQuestionRemaining", quizes1.length);
        break;
      }
      case 2: {
        io.to("admin").emit("numberOfQuestionRemaining", quizes2.length);
        break;
      }
    }
  });
});
