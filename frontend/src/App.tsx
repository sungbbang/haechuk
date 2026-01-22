import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <div className='flex min-h-screen flex-col bg-slate-100'>
      <Header />
      <main className='mx-auto w-full max-w-5xl flex-1 px-6 py-8'>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
