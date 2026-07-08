import {
  CalendarDays,
  MapPin,
  CheckCircle2,
  Circle,
  Plus,
} from "lucide-react";

export default function PaymentModal({
  isOpen,
  onClose,
  doctor = {
    image: "/doctor.png",
    name: "Dr. Jessica Turner",
    specialty: "Pulmonologist",
    address: "129, El-Nasr Street, Cairo",
  },
  appointment = "Friday, July 17 - 4:00pm",
  price = 350,
}) {
  if (!isOpen) return null;

  const paymentMethods = [
    {
      id: 1,
      name: "Credit Card",
      icon:
        "https://1000logos.net/wp-content/uploads/2021/11/VISA-logo-768x432.png",
      selected: true,
    },
    {
      id: 2,
      name: "PayPal",
      icon:
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    },
    {
      id: 3,
      name: "Apple Pay",
      icon:
        "https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-y-auto bg-black/40 p-6"
      onClick={onClose}
    >
      <div
        className="mx-auto my-8 w-full max-w-md rounded-3xl bg-white p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Doctor */}
        <div className="flex items-center gap-4">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="h-20 w-20 rounded-full object-cover"
          />

          <div>
            <h2 className="text-xl font-semibold">{doctor.name}</h2>

            <p className="text-gray-500">{doctor.specialty}</p>

            <div className="mt-1 flex items-center gap-2 text-sm text-gray-400">
              <MapPin size={16} />
              {doctor.address}
            </div>
          </div>
        </div>

        {/* Appointment */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <CalendarDays
              size={18}
              className="text-main-blue"
            />

            <span>{appointment}</span>
          </div>

          <button className="text-sm text-main-blue hover:underline">
            Reschedule
          </button>
        </div>

        {/* Payment Methods */}
        <div className="mt-8">
          <h3 className="mb-4 text-2xl font-semibold">
            Payment Method
          </h3>

          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 ${method.selected
                  ? "border-green-200 bg-green-50"
                  : "border-gray-200"
                  }`}
              >
                <div className="flex items-center gap-3">
                  {method.selected ? (
                    <CheckCircle2
                      size={20}
                      className="text-green-500"
                    />
                  ) : (
                    <Circle
                      size={20}
                      className="text-gray-400"
                    />
                  )}

                  <span
                    className={
                      method.selected
                        ? "text-green-600"
                        : "text-gray-500"
                    }
                  >
                    {method.name}
                  </span>
                </div>

                <img
                  src={method.icon}
                  alt={method.name}
                  className="h-6 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Add Card */}
          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-main-blue py-4 text-main-blue transition hover:bg-blue-50">
            <Plus size={18} />
            Add new card
          </button>
        </div>

        {/* Price */}
        <div className="mt-8 flex items-end justify-between">
          <div>
            <h3 className="text-3xl font-semibold">Price</h3>
            <span className="text-sm text-gray-400">/hour</span>
          </div>

          <span className="text-xl font-semibold text-red-500">
            ${price}
          </span>
        </div>

        {/* Pay Button */}
        <button className="mt-6 w-full rounded-xl bg-main-blue py-4 font-semibold text-white transition hover:opacity-90">
          Pay
        </button>
      </div>
    </div>
  );
}