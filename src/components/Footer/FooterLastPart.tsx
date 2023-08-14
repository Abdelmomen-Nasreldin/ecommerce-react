
const FooterLastPart = () => {
  return (
    <div className="flex flex-wrap items-center justify-between sm:flex-row px-5 pb-12 mx-auto bg-[#f7f7fa]">
                    <p className="mt-4 text-sm text-[rgb(126,133,155)] sm:mt-0 ">
                        © Copyright 2023. All Rights Reserved.
                    </p>

                    <div className="footer__lastPart__payments flex py-3">
                        <img
                            className="p-1"
                            src="src/assets/card-mastercard.svg"
                            alt="payment with mastercard"
                        />
                        <img
                            className="p-1"
                            src="src/assets/card-visa.svg"
                            alt="payment with Visa"
                        />
                        <img
                            className="p-1"
                            src="src/assets/card-amex.svg"
                            alt="payment with amex"
                        />
                        <img
                            className="p-1"
                            src="src/assets/card-cash.svg"
                            alt="payment with cash"
                        />
                    </div>

                    <ul className="footer__lastPart__menu flex flex-wrap lg:flex-nowrap w-full lg:w-auto">
                        <li
                            data-qa="link_footer_careers"
                            className="p-2 text-sm blGndF"
                        >
                            <a
                                href="https://www.linkedin.com/company/nooncom/jobs"
                                target="_blank"
                                rel="nofollow noreferrer noopener"
                                data-ur1313m3t="true"
                            >
                                Careers
                            </a>
                        </li>
                        <li
                            data-qa="link_footer_warrantyPolicy"
                            className="p-2 text-sm blGndF"
                        >
                            <a
                                href="/egypt-en/warranty-policy/"
                                data-ur1313m3t="true"
                            >
                                Warranty Policy
                            </a>
                        </li>
                        <li
                            data-qa="link_footer_partners"
                            className="p-2 text-sm blGndF"
                        >
                            <a
                                href="https://sell.withnoon.com/home-eg-en"
                                target="_blank"
                                rel="nofollow noreferrer noopener"
                                data-ur1313m3t="true"
                            >
                                Sell with us
                            </a>
                        </li>
                        <li
                            data-qa="link_footer_termsOfuse"
                            className="p-2 text-sm blGndF"
                        >
                            <a
                                href="/egypt-en/terms-of-use/"
                                data-ur1313m3t="true"
                            >
                                Terms of Use
                            </a>
                        </li>
                        <li
                            data-qa="link_footer_termsOfSale"
                            className="p-2 text-sm blGndF"
                        >
                            <a
                                href="/egypt-en/terms-of-sale/"
                                data-ur1313m3t="true"
                            >
                                Terms of Sale
                            </a>
                        </li>
                        <li
                            data-qa="link_footer_privacyPolicy"
                            className="p-2 text-sm blGndF"
                        >
                            <a
                                href="/egypt-en/privacy-policy/"
                                data-ur1313m3t="true"
                            >
                                Privacy Policy
                            </a>
                        </li>
                    </ul>

                </div>
  )
}

export default FooterLastPart