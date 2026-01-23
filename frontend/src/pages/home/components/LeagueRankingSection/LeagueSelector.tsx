import { leaguesData } from './constants';

interface LeagueSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

function LeagueSelector({ value, onChange }: LeagueSelectorProps) {
  return (
    <div className='relative'>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        aria-label='리그 선택'
        className='appearance-none rounded-lg border border-slate-200 bg-slate-50 py-1.5 pr-8 pl-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-100 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-(--dark-border) dark:bg-(--dark-elevated) dark:text-(--dark-text-sub) dark:hover:border-(--dark-text-third) dark:hover:bg-(--dark-border)'
      >
        {leaguesData.map(league => (
          <option key={league.id} value={league.id}>
            {league.name}
          </option>
        ))}
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5'>
        <svg
          className='h-3.5 w-3.5 text-slate-500 dark:text-(--dark-text-sub)'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </div>
    </div>
  );
}

export default LeagueSelector;
