import Modal from "@/components/shared/Modal";
import { useState } from "react"

export default function ContactForm() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsModalOpen(true)
    }


    return (
        <>
            <div className="w-full max-w-sm max-sm:mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">

                    {/* Name */}
                    <input onChange={handleChange} name="name" type="text" placeholder="Name" required className="w-full px-4 py-2 border border-gray rounded-md text-black placeholder-gray focus:outline-none focus:border-blue-500 transition-colors " />

                    {/* Email */}
                    <input onChange={handleChange} name="email" type="email" placeholder="Email" required className="w-full px-4 py-2 border border-gray rounded-md text-black placeholder-gray focus:outline-none focus:border-blue-500 transition-colors " />

                    {/* Message */}
                    <textarea
                        onChange={handleChange}
                        name="message"
                        placeholder="Message"
                        rows="5"
                        required
                        className="w-full px-4 py-2 border border-gray rounded-md text-black placeholder-gray focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />

                    <button type="submit" className="bg-main-blue text-white h-8 rounded-xl cursor-pointer ">Submit</button>
                </form>
            </div>

            {/* Submit Modal */}
            {isModalOpen && <Modal closeModal={setIsModalOpen} heading={"Congratulations"} message={"Your appointment with Dr. David Patel is confirmed for June 30, 2023, at 10:00 AM."} />}
        </>
    )
}