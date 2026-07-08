import { ChevronDown } from "lucide-react";

const birthdayFields = ["29", "July", "2002"];

const PersonalInformationForm = () => {
  return (
    <div className="flex-1 flex flex-col gap-[50px]">
      <h2 className="text-[20px] leading-[23px] text-text-secondary">
        Personal information
      </h2>

      <div className="flex flex-col gap-[50px]">
        <div className="flex gap-[40px]">
          <div className="flex flex-col gap-[8px] w-full">
            <label className="font-[Montserrat] text-[14px] leading-[17px] text-text-secondary">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Seif Mohamed"
              className="w-full h-[40px] px-[16px] py-[8px] border border-[#99A2AB] rounded-[10px] font-[Montserrat] text-[14px] leading-[17px] placeholder:text-[#99A2AB]"
            />
          </div>

          <div className="flex flex-col gap-[8px] w-full">
            <label className="font-[Montserrat] text-[14px] leading-[17px] text-text-secondary">
              Phone number
            </label>
            <input
              type="text"
              placeholder="01*******09"
              className="w-full h-[40px] px-[16px] py-[8px] border border-[#99A2AB] rounded-[10px] font-[Montserrat] text-[14px] leading-[17px] placeholder:text-[#99A2AB]"
            />
          </div>
        </div>

        <div className="flex gap-[40px]">
          <div className="flex flex-col gap-[8px] w-full">
            <label className="font-[Montserrat] text-[14px] leading-[17px] text-text-secondary">
              Email
            </label>
            <input
              type="email"
              placeholder="Seif Mohamed@gmail.com"
              className="w-full h-[40px] px-[16px] py-[8px] border border-[#99A2AB] rounded-[10px] font-[Montserrat] text-[14px] leading-[17px] placeholder:text-[#99A2AB]"
            />
          </div>

          <div className="flex flex-col gap-[10px] w-full">
            <label className="font-[Montserrat] text-[16px] leading-[20px] text-text-secondary">
              Your birthday
            </label>
            <div className="flex items-center gap-[16px] h-[36px]">
              {birthdayFields.map((value) => (
                <button
                  key={value}
                  className="flex justify-center items-center flex-1 h-[36px] pl-[12px] pr-[8px] py-[8px] gap-[4px] bg-neutral-blue rounded-[4px]"
                >
                  <span className="font-[Montserrat] text-[16px] leading-[20px] text-black">
                    {value}
                  </span>
                  <ChevronDown className="w-[20px] h-[20px] text-text-secondary" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[8px] w-full">
          <label className="font-[Montserrat] text-[14px] leading-[17px] text-text-secondary">
            Location
          </label>
          <input
            type="text"
            placeholder="129, El-Nasr Street, Cairo, Egypt"
            className="w-full h-[40px] px-[16px] py-[8px] border border-[#99A2AB] rounded-[10px] font-[Montserrat] text-[14px] leading-[17px] placeholder:text-[#99A2AB]"
          />
        </div>
      </div>

      <button className="self-end flex justify-center items-center w-[380px] h-[44px] p-[8px] gap-[8px] bg-main-blue shadow-[0px_0px_13px_rgba(0,0,0,0.16)] rounded-[10px]">
        <span className="font-[Montserrat] font-medium text-[16px] leading-[20px] text-white">
          Save changes
        </span>
      </button>
    </div>
  );
};

export default PersonalInformationForm;
