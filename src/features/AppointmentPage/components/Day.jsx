export default function Day({
  day,
  isActive,
  onClick,
  disabled,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-14 h-14 rounded-lg transition
        ${
          disabled
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : isActive
            ? "bg-main-blue text-white"
            : "bg-white border hover:border-main-blue"
        }`}
    >
      {day}
    </button>
  );
}