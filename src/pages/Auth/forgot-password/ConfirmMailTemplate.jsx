import { siteContent } from "@/config/site-content";
import React from "react";

const ConfirmationMailTemplate = () => {
  return (
    <figure className="mt-10 w-4/5">
      <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
        <p className="text-base">{siteContent.auth.confirmMailTemplate.description}</p>
        <p className="text-base py-4">
          if you have any questions, please contact our support team at &nbsp;
          <a href="mailto:" className="text-indigo-600 hover:text-indigo-500">
            {siteContent.supportEmail}
          </a>
        </p>
      </blockquote>

      <figcaption className="mt-10">
        <img className="mx-auto h-10 w-10 rounded-full" src={siteContent.ownerInfo.profileImage} alt={siteContent.ownerInfo.name} />
        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
          <div className="font-semibold text-gray-900">{siteContent.ownerInfo.name}</div>
          <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
            <circle cx={1} cy={1} r={1} />
          </svg>
          <div className="text-gray-600">{`${siteContent.ownerInfo.designation} of ${siteContent.businessName}`}</div>
        </div>
      </figcaption>
    </figure>
  );
};

export default ConfirmationMailTemplate;
