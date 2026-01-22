import { useState } from 'react';
import MatchCard from './MatchCard';
import SliderIndicator from './SliderIndicator';
import SliderNavButton from './SliderNavButton';
import { matches, MOBILE_INITIAL_COUNT } from './constants';

function TodayMatchSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, matches.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  const mobileMatches = isExpanded
    ? matches
    : matches.slice(0, MOBILE_INITIAL_COUNT);

  return (
    <>
      {/* 데스크톱: 슬라이더 */}
      <div className='relative hidden sm:block'>
        <section className='rounded-2xl border border-slate-200 bg-white p-5'>
          <div className='mb-4 flex items-center justify-between'>
            <h2 className='text-lg font-semibold text-slate-900'>오늘의 경기</h2>
            <a
              href='/schedule'
              className='text-sm text-slate-500 transition-colors hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none'
            >
              더보기
            </a>
          </div>

          {/* 슬라이더 */}
          <div
            key={currentSlide}
            className='animate-fade-in grid grid-cols-2 gap-3'
          >
            <MatchCard {...matches[currentSlide]} />
            {matches[currentSlide + 1] && (
              <MatchCard {...matches[currentSlide + 1]} />
            )}
          </div>

          <SliderIndicator total={matches.length} current={currentSlide} />
        </section>

        {/* 네비게이션 버튼 */}
        {currentSlide > 0 && (
          <SliderNavButton direction='prev' onClick={prevSlide} />
        )}
        {currentSlide < matches.length - 1 && (
          <SliderNavButton direction='next' onClick={nextSlide} />
        )}
      </div>

      {/* 모바일: 리스트 + 펼쳐보기 */}
      <section className='rounded-2xl border border-slate-200 bg-white p-5 sm:hidden'>
        <div className='mb-4'>
          <h2 className='text-lg font-semibold text-slate-900'>오늘의 경기</h2>
        </div>

        {/* 경기 리스트 */}
        <div className='space-y-3'>
          {mobileMatches.map(match => (
            <MatchCard key={match.id} {...match} />
          ))}
        </div>

        {/* 펼쳐보기 버튼 */}
        {matches.length > MOBILE_INITIAL_COUNT && !isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className='mt-3 flex w-full items-center justify-center gap-1 py-2 text-sm text-slate-500 transition-colors hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none'
          >
            {matches.length - MOBILE_INITIAL_COUNT}개 더보기
            <svg
              className='h-4 w-4'
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
          </button>
        )}

        {/* 하단 더보기 링크 */}
        {isExpanded && (
          <a
            href='/schedule'
            className='mt-3 flex items-center justify-center py-2 text-sm text-slate-500 transition-colors hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none'
          >
            일정 전체보기
          </a>
        )}
      </section>
    </>
  );
}

export default TodayMatchSection;
