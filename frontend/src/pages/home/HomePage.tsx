import TodayMatchSection from './components/TodayMatchSection';
import LeagueRankingSection from './components/LeagueRankingSection';
import PopularPostsSection from './components/PopularPostsSection';

function HomePage() {
  return (
    <div className='space-y-4'>
      <TodayMatchSection />
      <LeagueRankingSection />
      <PopularPostsSection />
    </div>
  );
}

export default HomePage;
