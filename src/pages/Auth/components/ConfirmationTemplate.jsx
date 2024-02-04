import { siteContent } from "@/config/site-content";
import { MailCheck } from "lucide-react";
import React from "react";

const ConfirmationTemplate = () => {

  return (
    <section className="relative px-6 w-[min(100%,35rem)]">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <MailCheck size={44} className="mx-auto h-16 w-16 text-white" />

        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p className="text-base">
              "Hello! Congratulations on successfully registering for an account on the RollIn & Retreat platform. Please check your email to verify
              your account." Email verification link will expire in 48 hours.
            </p>
            <p className="text-base py-4">
              if you have any questions, please contact our support team at &nbsp;
              <a href="mailto:" className="text-indigo-600 hover:text-indigo-500">
                support@rollinscodes.com
              </a>
            </p>
          </blockquote>

          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 md:flex items-center justify-center space-x-3 text-base text-center">
              <div className="font-semibold text-gray-900">{siteContent.ownerInfo.name}</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">{`${siteContent.ownerInfo.designation} of ${siteContent.businessName}`}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default ConfirmationTemplate;
