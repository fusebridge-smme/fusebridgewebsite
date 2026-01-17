"use client";
import React, { useState } from "react";
import Image from "next/image";
import ContactForm from "../../components/contact-components/contact-form";

// Notification Snackbar Component
const NotificationSnackbar = ({ status, setStatus }) => {
  const baseClasses =
    "fixed bottom-5 right-5 p-4 rounded-lg shadow-2xl text-white font-medium z-50 transition-all duration-500 transform";

  // Hidden state
  let classes = "translate-x-[150%] opacity-0";

  // Visible state
  if (status.visible) {
    classes = "translate-x-0 opacity-100";

    switch (status.type) {
      case "success":
        classes += " bg-green-600 border border-green-700";
        break;
      case "error":
        classes += " bg-red-600 border border-red-700";
        break;
      case "loading":
        classes += " bg-gray-700 border border-gray-600";
        break;
      default:
        classes = "translate-x-[150%] opacity-0";
        break;
    }
  }

  return (
    <div className={`${baseClasses} ${classes}`}>
      <div className="flex items-center justify-between">
        <span>{status.message}</span>
        {/* Optional: Add a close button */}
        <button
          onClick={() => setStatus({ ...status, visible: false })}
          className="ml-4 text-white hover:text-gray-200 transition"
          aria-label="Close notification"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default function ContactBanner() {
  // Initialize the status state
  const [status, setStatus] = useState({
    visible: false,
    message: "",
    type: "",
  });

  return (
    <>
      <section>
        <div className="container mx-auto flex flex-col items-center">
          <div className="w-full flex justify-center m-8 lg:mt-8 lg:mb-16">
            <div className="relative w-full aspect-[2261/386]">
              <Image
                src="illustrations/contact-t.svg"
                alt="contact illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <section className="pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="pt-4 lg:pt-0">
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-vanilla mb-4 tracking-tight">
                    Ready to <span className="text-orange">Fuse</span> &{" "}
                    <span className="text-orange">Grow</span> ?
                  </h1>
                  <p className="text-xl text-white mb-6">
                    Let's discuss your next project. We are keen to understand
                    your business goals and show you how data-driven social
                    strategies can deliver measurable growth.
                  </p>
                  <p className="text-lg text-white">
                    Fill out the form, and a member of our team will get back to
                    you within one business day.
                  </p>
                </div>

                {/* Contact Form */}
                <div>
                  <ContactForm setStatus={setStatus} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Notification Snackbar */}
      <NotificationSnackbar status={status} setStatus={setStatus} />
    </>
  );
}
