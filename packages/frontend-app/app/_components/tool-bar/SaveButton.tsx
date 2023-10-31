const SaveButton = ({ className }: { className?: string }) => {
  return (
    <button
      className={`bg-zinc-900 text-zinc-100 rounded w-16 h-8 hover:bg-zinc-700 ${className}`}
    >
      Save
    </button>
  );
};

export default SaveButton;
