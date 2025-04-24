import React from "react";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundImage: 'url("src/assets/bg-footer.png")',
        backgroundSize: "100% 100%",
      }}
      className="min-h-96 py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 sectionContainer">
        <div className="space-y-8">
          <Link to="/" className="block">
            <FaDiscord className="text-6xl text-white" />
          </Link>

          <div>
            <p className="text-sm mb-2 text-[#ffffff80]">Language</p>
            <div className="relative">
              <button className="flex items-center justify-between w-full bg-white/20 text-white rounded-md px-4 py-2 text-sm">
                English
                <FaChevronDown className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-[#ffffff80]">Social</p>
            <div className="flex space-x-4">
              <Link to="#" className="text-white hover:text-gray-300">
                <FaXTwitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-white hover:text-gray-300">
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-white hover:text-gray-300">
                <FaFacebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-white hover:text-gray-300">
                <FaYoutube className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-white hover:text-gray-300">
                <FaTiktok className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4 text-[#ffffff80]">Product</h3>
          <ul className="space-y-2 text-white">
            <li>
              <Link to="#" className="text-sm hover:underline">
                Download
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                Nitro
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                Status
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                App Directory
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-medium mb-4 text-[#ffffff80]">Company</h3>
          <ul className="space-y-2 text-white">
            <li>
              <Link to="#" className="text-sm hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                Brand
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                Newsroom
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="font-medium mb-4 text-[#ffffff80]">Resources</h3>
          <ul className="space-y-2 text-white">
            <li>
              <Link to="#" className="text-sm hover:underline">
                College
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                Support
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                Safety
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                StreamKit
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                Creators
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                Community
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                Developers
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                Quests
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                Official 3rd Party Merch
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                Feedback
              </Link>
            </li>
          </ul>
        </div>

        {/* Policies Links */}
        <div>
          <h3 className="font-medium mb-4 text-[#ffffff80]">Policies</h3>
          <ul className="space-y-2 text-white">
            <li>
              <Link to="#" className="text-sm hover:underline">
                Terms
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                Cookie Settings
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                Guidelines
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                Acknowledgements
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                Licenses
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:underline">
                Company Information
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
