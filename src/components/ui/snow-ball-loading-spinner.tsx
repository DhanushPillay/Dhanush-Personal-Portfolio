
interface LoadingSpinnerProps {
  progress?: number;
}

export default function LoadingSpinner({ progress }: LoadingSpinnerProps) {
  return (
    <div className="pl relative">
      <div className="pl__outer-ring"></div>
      <div className="pl__inner-ring"></div>
      <div className="pl__track-cover"></div>
      <div className="pl__ball">
        <div className="pl__ball-texture"></div>
        <div className="pl__ball-outer-shadow"></div>
        <div className="pl__ball-inner-shadow"></div>
        <div className="pl__ball-side-shadows"></div>
      </div>
      
      {/* Progress Counter */}
      {progress !== undefined && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-amber-500 font-mono text-2xl font-bold tracking-widest drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
            {progress}%
          </span>
        </div>
      )}
    </div>
  );
}
