import { ShieldCheck } from "lucide-react";

export default function Modal({heading, message, closeModal}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      {/* Main Container */}
      <div className="max-w-70 rounded-3xl bg-white py-10 px-5 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="w-25 h-25 rounded-full bg-congratulation flex items-center justify-center">
          <ShieldCheck
            size={72}
            fill="white"
            color="#1F5BA9"
            strokeWidth={1.5}
          />
        </div>
        
        {/* Text */}
        <div className="py-5 flex flex-col gap-3">
            <h1 className="text-black text-xl font-medium ">{heading}</h1>
            <p className="text-sm">{message}</p>
        </div>

        {/* Close button */}
        <button onClick={()=>{closeModal(false)}} className="bg-text-secondary w-full rounded-2xl py-2 text-white cursor-pointer">Done</button>
      </div>
    </div>
  );
}