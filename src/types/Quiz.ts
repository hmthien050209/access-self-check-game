export interface Quiz {
  id: number;
  question: string;
  keyword: string;
  keyIdx: number;
  answers: Array<Answer>;
}

export interface Answer {
  answer: string;
  correct?: boolean | undefined;
}
