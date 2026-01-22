import PostItem from './PostItem';
import { posts } from './constants';

function PopularPostsSection() {
  return (
    <section className='rounded-2xl border border-slate-200 bg-white p-5'>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-lg font-semibold text-slate-900'>인기 게시글</h2>
        <a
          href='/community'
          className='hidden text-sm text-slate-500 transition-colors hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none sm:block'
        >
          더보기
        </a>
      </div>
      <div className='space-y-2'>
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
      {/* 모바일 하단 더보기 */}
      <a
        href='/community'
        className='mt-3 flex items-center justify-center py-2 text-sm text-slate-500 transition-colors hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none sm:hidden'
      >
        게시글 전체보기
      </a>
    </section>
  );
}

export default PopularPostsSection;
