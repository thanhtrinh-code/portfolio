

export default function ProgressBar({proficiency}) {
    return (
      <div className="mt-10">
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 relative">
          <div
            className="bg-black h-2.5 rounded-full relative"
            style={{ width: proficiency}}
          >
            <span
              className="absolute text-zinc-300 bg-slate-700 p-1 rounded text-sm"
              style={{ right: '0', transform: 'translateX(50%)', bottom: '-2rem', }}
            >
              {proficiency}
            </span>
          </div>
        </div>
      </div>
    );
  }