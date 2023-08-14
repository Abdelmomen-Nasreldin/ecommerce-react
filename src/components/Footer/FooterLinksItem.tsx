type FooterLinksItemProps = {
    heading: string;
    links: string[];
};

const FooterLinksItem = (props: FooterLinksItemProps) => {
    return (
        <div>
            <h3 className="text-md uppercase  text-left font-medium text-[#40455]">{props.heading}</h3>
            <div className="flex flex-col items-start mt-4 space-y-4">
                {props.links.map((link) => (
                    <a href="#" className="text-sm text-gray-800 duration-200 ">
                        {link}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FooterLinksItem;
