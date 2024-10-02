import React from "react";
import headerImage from "@/public/images/header image.svg";
import { FaWhatsapp, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import SocialMediaIcon from "../footer/social-media";
import FooterTitle from "../footer/footer-title";
import Link from "next/link";

const socialIcons = [FaWhatsapp, FaFacebook, FaTwitter, FaYoutube];

const menuLinks = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/pages/about-us" },
];

const utilityLinks = [{ name: "Contact us", link: "/pages/contact-us" }];

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-black mt-10">
      <div className="mx-auto max-w-[1320px] ">
        <div className="flex flex-col mx-auto sm:flex-row justify-center lg:justify-between">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 text-center md:text-left my-10 px-5 gap-6">
            <div className="cursor-pointer text-white lg:mx-auto">
              <Image
                src={headerImage}
                alt="blog img"
                className="h-[40px] my-5 mx-auto sm:mx-auto dark:bg-white"
              />
              <p className="text-[17px] my-3 text-gray-600 dark:text-gray-400 text-center lg:text-left">
                A galera template typically features a clean, grid-based layout
                to showcase images or artwork. It includes responsive design
                elements for optimal viewing on various devices, with options
                for captions and easy navigation.
              </p>
              <div className="space-x-3 flex items-center justify-center lg:justify-normal lg:text-left py-3">
                {socialIcons.map((Icon, index) => (
                  <SocialMediaIcon key={index} Icon={Icon} />
                ))}
              </div>
            </div>
            <div className="text-white md:items-center md:hidden lg:block"></div>
            <div className="text-white lg:block"></div>
            <div className="md:mx-auto">
              <FooterTitle title="Menu" />
              <ul className="flex flex-col gap-2">
                {menuLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      className="text-[17px] text-gray-600 py-1 dark:text-gray-400"
                      href={link.link}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:mx-auto text-center md:text-left">
              <FooterTitle title="Utility Pages" />
              <ul>
                {utilityLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      className="text-[17px] text-gray-600 py-0 dark:text-gray-400 text-center md:text-left"
                      href={link.link}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="h-[1px] bg-gray-500 border-0 w-[100%] max-w-[1500px]" />
        </div>
        <p className="text-[16px] p-5 md:mx-20 text-gray-600 text-center dark:text-white">
          Copyright © 2024 galera - Powered by Simbanic
        </p>
      </div>
    </div>
  );
};

export default Footer;
