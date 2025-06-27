type UploadSuccessfulProps = {
  onUploadMore: () => void;
};

export const UploadSuccessful = ({ onUploadMore }: UploadSuccessfulProps) => {
  return (
    <div className="w-full min-h-96 flex items-center justify-center">
      <div className="text-center flex flex-col items-center gap-4">
        <svg className="w-12 h-12 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold sub-heading">Success!</h2>
          <p className="text-sm text-gray-500">Your images have been converted</p>
        </div>
        <button
          onClick={onUploadMore}
          className="px-4 py-2 bg-accent/90 hover:bg-accent text-white rounded-lg text-sm font-medium transition-all duration-200"
        >
          Convert More Images
        </button>
      </div>
    </div>
  );
};
