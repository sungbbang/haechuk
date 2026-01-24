import { Link } from 'react-router-dom';
import PostItem from './PostItem';
import { posts } from './constants';

function PopularPostsSection() {
  return (
    <section className='rounded-2xl border border-slate-200 bg-white p-5 dark:border-(--dark-border) dark:bg-(--dark-surface)'>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-lg font-semibold text-slate-900 dark:text-(--dark-text)'>인기 게시글</h2>
        <Link
          to='/community'
          className='hidden text-sm text-slate-500 transition-colors hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none sm:block dark:text-(--dark-text-sub) dark:hover:text-(--dark-text)'
        >
          더보기
        </Link>
      </div>
      <div className='space-y-2'>
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
      {/* 모바일 하단 더보기 */}
      <Link
        to='/community'
        className='mt-3 flex items-center justify-center py-2 text-sm text-slate-500 transition-colors hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none sm:hidden dark:text-(--dark-text-sub) dark:hover:text-(--dark-text)'
      >
        게시글 전체보기
      </Link>
    </section>
  );
}

export default PopularPostsSection;
