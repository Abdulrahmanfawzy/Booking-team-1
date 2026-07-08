export default function Day({ day, date, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-13 rounded-sm py-2 text-center cursor-pointer transition-colors ${
        isActive ? "bg-main-blue text-white" : "bg-gray-100 text-gray-500"
      }`}
    >
      <p>{day}</p>
      <p>{date}</p>
    </button>
  );
}
