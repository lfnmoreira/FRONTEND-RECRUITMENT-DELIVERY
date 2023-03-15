export interface Question {
  choices: Choice[];
  id: number;
  image_url: string;
  published_at: Date;
  question: string;
  thumb_url: string;
}

export enum STATUS {
  OK = "OK",
}

export interface Choice {
  choice: string;
  votes: number
}