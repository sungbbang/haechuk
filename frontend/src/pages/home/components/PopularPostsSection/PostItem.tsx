import type { Post } from './types';

function PostItem({ id, title, comments, time }: Post) {
  return (
    <a
      href={`/post/${id}`}
      className='flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 transition-[transform,background-color,box-shadow] hover:scale-[1.01] hover:bg-slate-100 hover:shadow-md focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none'
    >
      <div className='flex min-w-0 flex-1 items-center gap-2'>
        <span className='truncate font-medium text-slate-900'>{title}</span>
        <span className='shrink-0 text-sm text-blue-400 tabular-nums'>
          [{comments}]
        </span>
      </div>
      <span className='ml-4 hidden shrink-0 text-sm text-slate-500 sm:inline'>
        {time}
      </span>
    </a>
  );
}

export default PostItem;
