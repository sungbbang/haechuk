interface SliderNavButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

function SliderNavButton({ direction, onClick }: SliderNavButtonProps) {
  const isPrev = direction === 'prev';

  return (
    <button
      onClick={onClick}
      aria-label={isPrev ? '이전 경기' : '다음 경기'}
      className={`absolute top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 shadow-sm transition-colors hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-(--dark-border) dark:bg-(--dark-elevated) dark:hover:bg-(--dark-border) ${
        isPrev ? '-left-5' : '-right-5'
      }`}
    >
      <svg
        className='h-4 w-4 text-slate-600 dark:text-(--dark-text-sub)'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        aria-hidden='true'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d={isPrev ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
        />
      </svg>
    </button>
  );
}

export default SliderNavButton;
