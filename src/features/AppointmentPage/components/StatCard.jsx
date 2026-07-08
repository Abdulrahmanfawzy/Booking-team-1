const StatCard = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="size-10 rounded-full bg-white flex items-center justify-center">
        {icon}
      </div>

      <h3 className="font-bold">{value}</h3>
      <p className="text-gray">{label}</p>
    </div>
  );
};

export default StatCard;