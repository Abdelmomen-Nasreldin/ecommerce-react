import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import FooterLastPart from "./FooterLastPart";
import FooterHelp from "./FooterHelp";

const Footer = () => {
    return (
        // <footer className="bg-white dark:bg-gray-900">
        <footer className="">
            <hr className="border-t-[rgb(226,229,241)] border-t border-solid" />

            <FooterHelp />

            <hr className="border-t-[rgb(226,229,241)] border-t border-solid" />

            <FooterLinks />
            <FooterSocial />

            <hr className="border-t-[rgb(226,229,241)] border-t border-solid" />
            
            <FooterLastPart />
        </footer>
    );
};

export default Footer;
