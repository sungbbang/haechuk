import { Link } from 'react-router-dom';

function EmptyMatch() {
  return (
    <div className='flex flex-col items-center justify-center py-8 text-center'>
      <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-(--dark-elevated)'>
        <svg
          className='h-6 w-6 text-slate-400'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
          />
        </svg>
      </div>
      <p className='mb-1 text-sm font-medium text-slate-700 dark:text-(--dark-text-sub)'>
        오늘 예정된 경기가 없습니다
      </p>
      <p className='text-xs text-slate-500 dark:text-(--dark-text-third)'>
        다가오는 경기 일정을 확인해보세요
      </p>
      <Link
        to='/schedule'
        className='mt-4 rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:bg-(--dark-elevated) dark:text-(--dark-text-sub) dark:hover:bg-(--dark-border)'
      >
        일정 보기
      </Link>
    </div>
  );
}

export default EmptyMatch;
