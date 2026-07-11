import { PhoneCall, Mail, MapPin } from 'lucide-react';

export default function ContactInfo({ message, phone, email, address }) {

    return (
        <div className='max-w-75 max-sm:text-center max-sm:m-auto'>
            <h1 className='text-black text-3xl'>Contact Us</h1>
            <p className='my-5'>{message}</p>
            <div className='flex flex-col gap-3'>
                <p className='flex flex-row gap-3 text-black'><PhoneCall className='text-main-blue' /> {phone}</p>
                <p className='flex flex-row gap-3 text-black'><Mail className='text-main-blue' /> {email}</p>
                <p className='flex flex-row gap-3 text-black max-sm:text-left'><MapPin className='text-main-blue' /> {address}</p>
            </div>
        </div>
    )
}