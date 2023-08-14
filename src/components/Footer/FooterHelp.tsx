const imageSrcPath = "src/assets/";
const contactData = [
    { icon: "help.svg", text: "help center", contact: "help.noon.com" },
    { icon: "email.svg", text: "help center", contact: "egypt@noon.com" },
    { icon: "phone.svg", text: "Phone Support", contact: "16358" },
];
const FooterHelp = () => {
    return (
        <div className="help bg-[#f7f7fa]">
            <div className="container p-5 mx-auto flex justify-between flex-wrap">
                <div className="help__text mb-5">
                    <h5 className="text-2xl font-bold text-gray-800">
                        We're Always Here To Help
                    </h5>
                    <p className={`text-sm mt-1 text-[rgb(126,133,155)]`}>
                        Reach out to us through any of these support channels
                    </p>
                </div>
                <div className="help__contacts flex flex-wrap gap-8">
                    {contactData.map((data) => (
                        <Contact
                            icon={data.icon}
                            text={data.text}
                            contact={data.contact}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FooterHelp;
type ContactProps = {
    icon: string;
    text: string;
    contact: string;
};
const Contact = ({ icon, text, contact }: ContactProps) => {
    return (
        <a className="flex" href="mailto:email@example.com">
            <div className="flex items-center pe-3">
                <div className="flex items-center justify-center border bg-[white] w-9 h-9 rounded-[50%] border-solid border-[rgb(226,229,241)]">
                    <img src={`${imageSrcPath + icon}`} alt="" />
                </div>
            </div>
            <div className="help__center flex flex-col justify-center">
                <span className="text-[0.83333rem] font-semibold uppercase text-[rgb(126,133,155)]">
                    {text}
                </span>
                <span className="font-semibold text-[1.41667rem] text-[rgb(64,69,83)]">
                    {contact}
                </span>
            </div>
        </a>
    );
};
