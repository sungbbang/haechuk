import type { LeagueData } from './types';

export const leaguesData: LeagueData[] = [
  {
    id: 'premier-league',
    name: '프리미어리그',
    rankings: [
      { rank: 1, team: '리버풀', won: 15, drawn: 3, lost: 2, points: 48 },
      { rank: 2, team: '아스널', won: 13, drawn: 5, lost: 3, points: 44 },
      { rank: 3, team: '노팅엄', won: 12, drawn: 5, lost: 4, points: 41 },
      { rank: 4, team: '첼시', won: 11, drawn: 7, lost: 3, points: 40 },
      { rank: 5, team: '맨체스터 시티', won: 11, drawn: 5, lost: 5, points: 38 },
    ],
  },
  {
    id: 'laliga',
    name: '라리가',
    rankings: [
      { rank: 1, team: '바르셀로나', won: 13, drawn: 3, lost: 3, points: 42 },
      { rank: 2, team: '레알 마드리드', won: 12, drawn: 4, lost: 3, points: 40 },
      { rank: 3, team: '아틀레티코', won: 11, drawn: 5, lost: 4, points: 38 },
      { rank: 4, team: '빌바오', won: 10, drawn: 6, lost: 4, points: 36 },
      { rank: 5, team: '비야레알', won: 9, drawn: 6, lost: 5, points: 33 },
    ],
  },
  {
    id: 'serie-a',
    name: '세리에A',
    rankings: [
      { rank: 1, team: '나폴리', won: 14, drawn: 2, lost: 4, points: 44 },
      { rank: 2, team: '인테르', won: 13, drawn: 4, lost: 2, points: 43 },
      { rank: 3, team: '아탈란타', won: 13, drawn: 3, lost: 4, points: 42 },
      { rank: 4, team: '라치오', won: 12, drawn: 3, lost: 5, points: 39 },
      { rank: 5, team: '유벤투스', won: 10, drawn: 7, lost: 3, points: 37 },
    ],
  },
  {
    id: 'bundesliga',
    name: '분데스리가',
    rankings: [
      { rank: 1, team: '바이에른 뮌헨', won: 13, drawn: 3, lost: 2, points: 42 },
      { rank: 2, team: '레버쿠젠', won: 11, drawn: 5, lost: 2, points: 38 },
      { rank: 3, team: '프랑크푸르트', won: 9, drawn: 6, lost: 3, points: 33 },
      { rank: 4, team: '라이프치히', won: 8, drawn: 7, lost: 3, points: 31 },
      { rank: 5, team: '도르트문트', won: 8, drawn: 5, lost: 5, points: 29 },
    ],
  },
  {
    id: 'ligue-1',
    name: '리그1',
    rankings: [
      { rank: 1, team: 'PSG', won: 15, drawn: 1, lost: 3, points: 46 },
      { rank: 2, team: '마르세유', won: 10, drawn: 6, lost: 3, points: 36 },
      { rank: 3, team: '모나코', won: 10, drawn: 4, lost: 5, points: 34 },
      { rank: 4, team: '릴', won: 9, drawn: 5, lost: 5, points: 32 },
      { rank: 5, team: '니스', won: 8, drawn: 6, lost: 5, points: 30 },
    ],
  },
];
