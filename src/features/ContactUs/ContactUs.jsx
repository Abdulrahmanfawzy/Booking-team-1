import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

export default function () {
    return (
        <div className="flex flex-col sm:flex-row justify-between gap-10 my-15 mx-auto">
            <ContactInfo message={"We are committed to processing the information in order to contact you and talk about your questions"} phone={"080 707 555-321"} email={"demo@example.com"} address={"526 Melrose Street, Water Mill, 11976 New York"} />
            <ContactForm />
        </div>
    )
}