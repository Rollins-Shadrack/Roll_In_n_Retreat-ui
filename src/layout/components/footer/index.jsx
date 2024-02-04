import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { footerContent } from "@/layout/constants/footer";
import { ChevronRight, MapPin, PhoneCall, Instagram, Facebook, Twitter } from "lucide-react";

const index = () => {
  return (
    <footer role="contentinfo" className="py-10 bg-white">
      <div className="container px-4 mx-auto">
        <div className="block lg:flex gap-20 mb-10 pb-10">
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <Link href="/" className="mb-4 inline-block">
              <img src={logo} alt="" className="w-[100px] inline-block items-center" /> <span className="text-[#263238] font-bold">Roll In & Retreat </span>
            </Link>
            <p className="leading-relaxed mb-7 text-base">{footerContent.about.description}</p>
            <p>
              <Link href={footerContent.about.cta.href} className="flex space-x-2 outline-none items-center font-semibold text-primary">
                <span>{footerContent.about.cta.label}</span>
                <span className="w-6 h-6 rounded-full bg-primary inline-flex items-center justify-center">
                  <ChevronRight className="" />
                </span>
              </Link>
            </p>
          </div>
          <div className=" w-full lg:w-4/12 mb-10 lg:mb-0">
            <div className="grid grid-cols-2 gap-10">
              {footerContent.footerLinks.map((footerLink, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-heading mb-5">{footerLink.heading}</h3>
                  <ul className="p-0 m-0">
                    {footerLink.links.map((link, idxx) => (
                      <li key={idxx} className="mb-3">
                        <Link href={link.href} className="group-flex items-center duration-300 transition-all ease-in-out hover:text-primary">
                          <span>{link.label}</span>
                          <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                            <ChevronRight className="text-xl  absolute" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-4/12">
            <h3 className="font-semibold text-heading mb-5">{footerContent.contact.heading}</h3>
            <p className="leading-relaxed mb-7">{footerContent.contact.description}</p>
            <ul>
              <li className="flex items-start space-x-3 mb-5">
                <MapPin className="text-xl text-primary" />
                <span>{footerContent.contact.address.street}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <PhoneCall className="text-xl text-primary" />
                <span>{footerContent.contact.address.phone}</span>
              </li>
              <li className="flex items-start space-x-10 mb-5">
                <Facebook className="text-2xl" />
                <Twitter className="text-2xl" />
                <Instagram className="text-2xl" />
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center  border-t border-gray-200">
          <p>
            {footerContent.copyright.labelOne}
            {"  "} {footerContent.copyright.labelTwo}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default index;
