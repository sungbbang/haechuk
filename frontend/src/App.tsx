import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/home/HomePage';
import SchedulePage from './pages/schedule/SchedulePage';
import StandingsPage from './pages/standings/StandingsPage';
import CommunityPage from './pages/community/CommunityPage';
import MyPage from './pages/my/MyPage';

function App() {
  return (
    <BrowserRouter>
      <div className='flex min-h-screen flex-col bg-slate-100 dark:bg-(--dark-bg)'>
        <Header />
        <main className='mx-auto w-full max-w-5xl flex-1 px-6 py-8'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/schedule' element={<SchedulePage />} />
            <Route path='/standings' element={<StandingsPage />} />
            <Route path='/community' element={<CommunityPage />} />
            <Route path='/my' element={<MyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
