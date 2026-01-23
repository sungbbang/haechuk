import { useState, useRef, useEffect } from 'react';
import { menuItems, userMenuItems } from '../constants/menu';
import ThemeToggle from './ThemeToggle';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // TODO: 실제 인증 상태로 교체
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleProfileMenu = () => setIsProfileMenuOpen(prev => !prev);
  const closeProfileMenu = () => setIsProfileMenuOpen(false);

  // 프로필 메뉴 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        closeProfileMenu();
      }
    };

    if (isProfileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isProfileMenuOpen]);

  return (
    <>
      <header className='sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md dark:border-(--dark-border) dark:bg-(--dark-surface)/80'>
        <div className='mx-auto flex h-16 max-w-5xl items-center justify-between px-6'>
          <div className='flex items-center gap-8'>
            <a
              href='/'
              className='text-2xl font-semibold tracking-wider text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:text-(--dark-text)'
            >
              <span aria-hidden='true'>⚽</span> 해축
            </a>
            {/* 데스크톱 네비게이션 */}
            <nav className='hidden items-center gap-1 sm:flex'>
              {menuItems.map(item => (
                <a
                  key={item.name}
                  href={item.path}
                  className='w-18 rounded-md py-2.5 text-center text-lg font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:text-(--dark-text-sub) dark:hover:bg-(--dark-elevated) dark:hover:text-(--dark-text)'
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* 데스크톱: 다크모드 + 로그인/프로필 */}
          <div className='hidden items-center gap-2 sm:flex'>
            <ThemeToggle variant='icon' />

            {/* 로그인/프로필 */}
            {isLoggedIn ? (
              <div className='relative' ref={profileMenuRef}>
                <button
                  onClick={toggleProfileMenu}
                  aria-label='사용자 메뉴'
                  aria-expanded={isProfileMenuOpen}
                  className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:bg-(--dark-elevated) dark:text-(--dark-text-sub) dark:hover:bg-(--dark-elevated)'
                >
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
                      d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                    />
                  </svg>
                </button>

                {/* 프로필 드롭다운 메뉴 */}
                {isProfileMenuOpen && (
                  <div className='absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white py-2 shadow-lg dark:border-(--dark-border) dark:bg-(--dark-elevated)'>
                    {userMenuItems.map(item => (
                      <a
                        key={item.path}
                        href={item.path}
                        onClick={closeProfileMenu}
                        className='block px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none focus-visible:ring-inset dark:text-(--dark-text-sub) dark:hover:bg-(--dark-elevated) dark:hover:text-(--dark-text)'
                      >
                        {item.name}
                      </a>
                    ))}
                    <div className='my-1 border-t border-slate-100 dark:border-(--dark-border)' />
                    <button
                      onClick={() => {
                        setIsLoggedIn(false);
                        closeProfileMenu();
                      }}
                      className='block w-full px-4 py-2.5 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none focus-visible:ring-inset dark:text-(--dark-text-sub) dark:hover:bg-(--dark-elevated) dark:hover:text-(--dark-text)'
                    >
                      로그아웃
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setIsLoggedIn(true)}
                className='rounded-md bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none'
              >
                로그인
              </button>
            )}
          </div>

          {/* 모바일 햄버거 버튼 */}
          <button
            onClick={openSidebar}
            aria-label='메뉴 열기'
            className='rounded-md p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none sm:hidden dark:text-(--dark-text-sub) dark:hover:bg-(--dark-elevated) dark:hover:text-(--dark-text)'
          >
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </header>

      {/* 사이드바 오버레이 */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeSidebar}
        aria-hidden='true'
      />

      {/* 사이드바 */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full bg-white shadow-xl transition-transform duration-300 ease-out dark:bg-(--dark-surface) ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* 사이드바 헤더 */}
        <div className='flex h-16 items-center justify-between border-b border-slate-100 px-6 dark:border-(--dark-border)'>
          <span className='text-lg font-semibold text-slate-900 dark:text-(--dark-text)'>메뉴</span>
          <button
            onClick={closeSidebar}
            aria-label='메뉴 닫기'
            className='rounded-md p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:hover:bg-(--dark-elevated) dark:hover:text-(--dark-text)'
          >
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
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        {/* 사이드바 메뉴 */}
        <nav className='p-4'>
          <ul className='space-y-1'>
            {menuItems.map(item => (
              <li key={item.name}>
                <a
                  href={item.path}
                  onClick={closeSidebar}
                  className='block rounded-xl px-4 py-2.5 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:text-(--dark-text-sub) dark:hover:bg-(--dark-elevated) dark:hover:text-(--dark-text)'
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* 로그인 시 사용자 메뉴 */}
          {isLoggedIn && (
            <>
              <div className='my-3 border-t border-slate-100 dark:border-(--dark-border)' />
              <ul className='space-y-1'>
                {userMenuItems.map(item => (
                  <li key={item.path}>
                    <a
                      href={item.path}
                      onClick={closeSidebar}
                      className='block rounded-xl px-4 py-2.5 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:text-(--dark-text-sub) dark:hover:bg-(--dark-elevated) dark:hover:text-(--dark-text)'
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* 다크모드 토글 */}
          <div className='my-3 border-t border-slate-100 dark:border-(--dark-border)' />
          <ThemeToggle variant='switch' />

          {/* 로그인/로그아웃 버튼 */}
          <div className='mt-4 border-t border-slate-100 pt-4 dark:border-(--dark-border)'>
            {isLoggedIn ? (
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  closeSidebar();
                }}
                className='w-full rounded-xl bg-slate-100 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:bg-(--dark-elevated) dark:text-(--dark-text-sub) dark:hover:bg-(--dark-elevated)'
              >
                로그아웃
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsLoggedIn(true);
                  closeSidebar();
                }}
                className='w-full rounded-xl bg-blue-500 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none'
              >
                로그인
              </button>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Header;
