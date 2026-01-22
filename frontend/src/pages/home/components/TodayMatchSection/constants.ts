import type { Match } from './types';

export const matches: Match[] = [
  {
    id: 1,
    league: '프리미어리그',
    homeTeam: '맨체스터 시티',
    awayTeam: '아스널',
    time: '22:30',
  },
  {
    id: 2,
    league: '라리가',
    homeTeam: '레알 마드리드',
    awayTeam: '바르셀로나',
    time: '04:00',
  },
  {
    id: 3,
    league: '세리에A',
    homeTeam: '인테르',
    awayTeam: '유벤투스',
    time: '03:45',
  },
  {
    id: 4,
    league: '분데스리가',
    homeTeam: '바이에른 뮌헨',
    awayTeam: '도르트문트',
    time: '04:30',
  },
];

export const MOBILE_INITIAL_COUNT = 2;
