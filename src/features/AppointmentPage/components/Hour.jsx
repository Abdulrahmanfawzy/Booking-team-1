export default function Hour({ hour, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-[108px] h-[40px] rounded-xl text-[18px] font-medium transition-colors cursor-pointer ${
        isActive
          ? "bg-main-blue text-white"
          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
      }`}
    >
      {hour}
    </button>
  );
}
