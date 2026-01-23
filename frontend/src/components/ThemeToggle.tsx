import { useState, useEffect } from 'react';

type ThemeToggleProps = {
  variant: 'icon' | 'switch';
};

function ThemeToggle({ variant }: ThemeToggleProps) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  // 데스크톱용 아이콘 버튼
  if (variant === 'icon') {
    return (
      <button
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
        className='flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:text-(--dark-text-sub) dark:hover:bg-(--dark-elevated) dark:hover:text-(--dark-text)'
      >
        {isDarkMode ? (
          <svg
            className='h-5 w-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
            />
          </svg>
        ) : (
          <svg
            className='h-5 w-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
            />
          </svg>
        )}
      </button>
    );
  }

  // 모바일용 토글 스위치
  return (
    <button
      onClick={toggleDarkMode}
      className='flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:text-(--dark-text-sub) dark:hover:bg-(--dark-elevated)'
    >
      <span>다크 모드</span>
      <div
        className={`relative h-6 w-11 rounded-full transition-colors ${
          isDarkMode ? 'bg-blue-500' : 'bg-slate-200'
        }`}
      >
        <div
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
            isDarkMode ? 'translate-x-5' : 'translate-x-0.5'
          }`}
        />
      </div>
    </button>
  );
}

export default ThemeToggle;
