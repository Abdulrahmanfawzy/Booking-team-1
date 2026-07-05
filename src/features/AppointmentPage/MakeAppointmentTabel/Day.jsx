export default function Day({day, hour, isActive}) {

    const disactiveStyle ="bg-gray-100 w-13 text-center rounded-sm py-2 text-gray-500"
    const activeStyle = ""

  return (
    <div className="bg-main-blue w-13 text-center rounded-sm py-2 text-white">
      <p>{day}</p>
      <p>{hour}</p>
    </div>
  );
}
