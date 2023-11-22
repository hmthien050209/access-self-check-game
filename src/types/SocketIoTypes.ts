import { Quiz } from "./Quiz";

export interface ServerToClientEvents {
  flushOldQuestion: () => void;
  newQuestion: (quiz: Quiz) => void;
  listOfAnswers: (answers: Array<Entry>) => void;
  newUserId: (newUserId: number) => void;
  numberOfQuestionRemaining: (_: number) => void;
}

export interface ClientToServerEvents {
  submitAnswer: (answer: string, userId: number) => void;
  sendNewQuestion: (fromCollection: number) => void;
  reset: () => void;
  joinAdminRoom: () => void;
  getNumberOfRemainingQuestion: (collection: number) => void;
}

export interface Entry {
  userId: number;
  answer: string;
  timeToAnswer: number;
}
