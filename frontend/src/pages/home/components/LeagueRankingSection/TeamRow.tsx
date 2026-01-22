import type { TeamRanking } from './types';

interface TeamRowProps {
  ranking: TeamRanking;
  isLast: boolean;
}

function TeamRow({ ranking, isLast }: TeamRowProps) {
  const { rank, team, won, drawn, lost, points } = ranking;

  return (
    <div
      className={`flex items-center gap-4 px-4 py-3.5 ${
        !isLast ? 'border-b border-slate-100' : ''
      }`}
    >
      {/* 순위 배지 */}
      <div
        className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
          rank === 1
            ? 'bg-blue-500 text-white'
            : rank === 2
              ? 'bg-slate-200 text-slate-600'
              : rank === 3
                ? 'bg-slate-100 text-slate-500'
                : 'text-slate-400'
        }`}
      >
        {rank}
      </div>

      {/* 팀명 */}
      <span
        className={`flex-1 text-sm ${
          rank === 1 ? 'font-bold text-slate-900' : 'font-medium text-slate-900'
        }`}
      >
        {team}
      </span>

      {/* 전적 */}
      <div className='hidden items-center gap-1 text-xs text-slate-500 sm:flex'>
        <span>
          {won}승 {drawn}무 {lost}패
        </span>
      </div>

      {/* 승점 */}
      <span
        className={`w-12 text-right text-sm ${
          rank === 1 ? 'font-bold text-blue-500' : 'font-semibold text-slate-700'
        }`}
      >
        {points}점
      </span>
    </div>
  );
}

export default TeamRow;
