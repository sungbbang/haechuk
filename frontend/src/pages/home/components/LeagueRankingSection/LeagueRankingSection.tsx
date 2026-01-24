import { useState } from 'react';
import { Link } from 'react-router-dom';
import LeagueSelector from './LeagueSelector';
import TeamRow from './TeamRow';
import { leaguesData } from './constants';

function LeagueRankingSection() {
  const [selectedLeagueId, setSelectedLeagueId] = useState('premier-league');
  const selectedLeague = leaguesData.find(l => l.id === selectedLeagueId)!;

  return (
    <section className='rounded-2xl border border-slate-200 bg-white p-5 dark:border-(--dark-border) dark:bg-(--dark-surface)'>
      {/* 헤더 */}
      <div className='mb-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <h2 className='text-lg font-semibold text-slate-900 dark:text-(--dark-text)'>현재 순위</h2>
          <LeagueSelector
            value={selectedLeagueId}
            onChange={setSelectedLeagueId}
          />
        </div>
        <Link
          to='/standings'
          className='hidden text-sm text-slate-500 transition-colors hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none sm:block dark:text-(--dark-text-sub) dark:hover:text-(--dark-text)'
        >
          더보기
        </Link>
      </div>

      {/* 순위 리스트 */}
      <div className='rounded-xl bg-slate-50 tabular-nums dark:bg-(--dark-elevated)'>
        {selectedLeague.rankings.map((ranking, index) => (
          <TeamRow
            key={ranking.rank}
            ranking={ranking}
            isLast={index === selectedLeague.rankings.length - 1}
          />
        ))}
      </div>

      {/* 모바일 하단 더보기 */}
      <Link
        to='/standings'
        className='mt-3 flex items-center justify-center py-2 text-sm text-slate-500 transition-colors hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none sm:hidden dark:text-(--dark-text-sub) dark:hover:text-(--dark-text)'
      >
        순위 전체보기
      </Link>
    </section>
  );
}

export default LeagueRankingSection;
