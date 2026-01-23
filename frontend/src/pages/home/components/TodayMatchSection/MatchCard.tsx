import type { Match } from './types';

type MatchCardProps = Partial<Pick<Match, 'id'>> & Omit<Match, 'id'>;

function MatchCard({
  id = 1,
  league,
  homeTeam,
  awayTeam,
  time,
}: MatchCardProps) {
  return (
    <a
      href={`/match/${id}`}
      className='block rounded-xl bg-slate-50 p-4 transition-[transform,background-color,box-shadow] hover:scale-[1.02] hover:bg-slate-100 hover:shadow-md focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:bg-(--dark-elevated) dark:hover:bg-(--dark-border)'
    >
      <div className='mb-3 flex items-center justify-between'>
        <span className='text-xs font-medium text-slate-600 dark:text-(--dark-text-sub)'>
          {league}
        </span>
        <span className='text-xs text-slate-500 tabular-nums dark:text-(--dark-text-third)'>
          {time}
        </span>
      </div>
      <div className='flex items-center'>
        <span className='flex-1 truncate text-right font-medium text-slate-900 dark:text-(--dark-text)'>
          {homeTeam}
        </span>
        <span className='mx-3 shrink-0 text-sm text-slate-400 dark:text-(--dark-text-third)'>
          vs
        </span>
        <span className='flex-1 truncate font-medium text-slate-900 dark:text-(--dark-text)'>
          {awayTeam}
        </span>
      </div>
    </a>
  );
}

export default MatchCard;
