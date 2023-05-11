export interface IPlayerData {
  name: string;
  probability: number[];
  score: number;
  strike: boolean;
  nonStriker: boolean;
  out: boolean;
}

export const PlayerData: IPlayerData[] = [
  {
    name: 'Kirat boli',
    probability: [5, 30, 25, 10, 15, 1, 9, 5],
    score: 0,
    strike: true,
    nonStriker: false,
    out: false,
  },
  {
    name: 'N.S Nodhi',
    probability: [10, 20, 40, 5, 10, 1, 4, 10],
    score: 0,
    strike: false,
    nonStriker: true,
    out: false,
  },
  {
    name: 'R Rumrah',
    probability: [20, 30, 15, 5, 5, 1, 4, 20],
    score: 0,
    strike: false,
    nonStriker: false,
    out: false,
  },
  {
    name: 'Shashi henra',
    probability: [30, 25, 5, 0, 5, 1, 4, 30],
    score: 0,
    strike: false,
    nonStriker: false,
    out: false,
  },
];

interface IScoreInfo {
  scoreInfo: number[];
}

export const ScoreInfo: IScoreInfo = {
  scoreInfo: [0, 1, 2, 3, 4, 5, 6, 7], // 0-> Dot ball 7-> OUT
};

export const TARGET = 40;

export const WICKETS = 3;

export const OVERS = 4;
