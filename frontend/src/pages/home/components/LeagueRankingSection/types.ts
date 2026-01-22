export interface TeamRanking {
  rank: number;
  team: string;
  won: number;
  drawn: number;
  lost: number;
  points: number;
}

export interface LeagueData {
  id: string;
  name: string;
  rankings: TeamRanking[];
}
