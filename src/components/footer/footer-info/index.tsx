import {
  FaFacebookF,
  FaDiscord,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
import payment from "../../../assets/payment.png";

const footerData = [
  {
    title: "My Account",
    items: ["About", "Careers", "Brand Center", "Blog"],
  },
  {
    title: "Help & Guide",
    items: ["Discord Server", "Twitter", "Facebook", "Contact Us"],
  },
  {
    title: "Categories",
    items: ["Privacy Policy", "Licensing", "Terms & Conditions"],
  },
  {
    title: "Download",
    items: ["iOS", "Android", "We accept"],
    image: payment,
  },
];

function FooterInfo() {
  return (
    <footer className=" text-gray-700 ">
      <div className="mx-auto w-full max-w-screen-xl px-6 py-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="mb-5 text-sm font-semibold uppercase text-gray-900 tracking-wide">
                {section.title}
              </h3>

              <ul className="space-y-3 text-sm">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="cursor-pointer hover:text-green-600 transition-colors duration-200"
                  >
                    {item}
                  </li>
                ))}

                {section.image && (
                  <li className="mt-3">
                    <img
                      src={section.image}
                      alt="payment methods"
                      className="w-32 sm:w-40 md:w-36 object-contain"
                    />
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">
            © 2025 GreenShop. All Rights Reserved.
          </p>
          <div className="flex space-x-4 text-gray-500">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-600 transition-colors"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              aria-label="Discord"
              className="hover:text-indigo-500 transition-colors"
            >
              <FaDiscord size={18} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-blue-400 transition-colors"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              aria-label="Github"
              className="hover:text-gray-900 transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="#"
              aria-label="Dribbble"
              className="hover:text-pink-500 transition-colors"
            >
              <FaDribbble size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterInfo;
