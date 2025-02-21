const ContactButton = () => {
    return (
        <a href="#" className="flex items-center gap-[10px] rounded-full border border-[#000929] py-3 px-5">
            <img src="/assets/images/icons/call.svg" className="w-6 h-6" alt="icon"/>
            <span className="font-semibold">Contact Us</span>
        </a>
    );
};

export default ContactButton;