interface SliderIndicatorProps {
  total: number;
  current: number;
}

function SliderIndicator({ total, current }: SliderIndicatorProps) {
  return (
    <div className='mt-3 flex items-center justify-center gap-1 text-sm text-slate-500'>
      <span className='tabular-nums'>
        {current + 1} / {total}
      </span>
    </div>
  );
}

export default SliderIndicator;
