import FooterLinksItem from "./FooterLinksItem";
const FooterLinksData = [
    {
        heading: "Product",
        links: [
            "Overview",
            "Features",
            "Solutions",
            "Tutorials",
            "Pricing",
            "Releases",
        ],
    },
    {
        heading: "Company",
        links: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
    },
    {
        heading: "Resources",
        links: [
            "Blog",
            "Newsletter",
            "Events",
            "Help center",
            "Tutorials",
            "Supports",
        ],
    },
    {
        heading: "Use cases",
        links: [
            "Startups",
            "Enterprise",
            "Government",
            "Saas",
            "Marketplaces",
            "Ecommerce",
        ],
    },
    {
        heading: "Social",
        links: [
            "Twitter",
            "LinkedIn",
            "Github",
            "Facebook",
            "AngelList",
            "Dribble",
        ],
    },
    {
        heading: "Legal",
        links: [
            "Terms",
            "Privacy",
            "Cookies",
            "Licenses",
            "Settings",
            "Contact",
        ],
    },
];
const FooterLinks = () => {
    return (
        <div className="footerLinks">
            <div className="container p-5 mx-auto grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {FooterLinksData.map((group) => (
                    <FooterLinksItem
                        heading={group.heading}
                        links={group.links}
                    />
                ))}
            </div>
        </div>
    );
};

export default FooterLinks;
