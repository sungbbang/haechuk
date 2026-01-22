import { menuItems } from '../constants/menu';

function Footer() {
  return (
    <footer className='mt-auto border-t border-slate-200/60 bg-white'>
      <div className='mx-auto max-w-5xl px-6 py-10'>
        <nav className='flex justify-center'>
          <ul className='flex gap-8'>
            {menuItems.map(item => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className='text-base font-medium text-slate-500 transition-colors hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='mt-8 text-center text-base text-slate-400'>
          <p>해외축구 좋아하는 사람이 만들었습니다.</p>
          <p className='mt-1'>&copy; 2025 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
