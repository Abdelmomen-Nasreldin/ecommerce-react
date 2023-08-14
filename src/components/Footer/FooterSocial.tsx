const imageSrcPath = "src/assets/";
const storeData = [
    {
        url: "https://www.facebook.com/noon",
        icon: "google-play.svg",
    },
    {
        url: "https://www.facebook.com/noon",
        icon: "app-store.svg",
    }
]
const socialData = [
    {
        url: "https://www.facebook.com/noon",
        icon: "facebook.svg",
    },
    {
        url: "https://www.twitter.com/noon",
        icon: "twitter.svg",
    },
    {
        url: "https://www.linkedin.com/company/18045372/",
        icon: "instgram.svg",
    },
    {
        url: "https://www.facebook.com/noon",
        icon: "linkedIn.svg",
    }
]
const FooterSocial = () => {
    return (
        <div className="footerSocial">
            <div className="container p-5 mx-auto flex justify-between flex-wrap py-4 mt-10">
                <Social
                    heading="go to the shopping"
                    data={storeData}
                />
                <Social
                    heading="CONNECT WITH US"
                    data={socialData}
                />
            </div>
        </div>
    );
};

export default FooterSocial;

type SocialProps = {
    heading: string;
    data: { url: string; icon: string; }[];
};
const Social = ({ heading, data }: SocialProps) => {
    return (
        <div className="box flex flex-col items-center basis-full sm:basis-6/12">
            <h3 className="text-center uppercase font-bold text-gray-800">
                {heading}
            </h3>
            <div className="downloadApps flex justify-center py-2">
                {data.map((element) => (
                    <a href={element.url} target="_blank" className="p-2">
                        <img
                            className="h-[40px]"
                            src={`${imageSrcPath + element.icon}`}
                            alt="social image"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};
