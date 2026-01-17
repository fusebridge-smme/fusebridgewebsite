import React, { useState } from "react";

export default function ContactForm({ setStatus }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Helper function to restrict input to numbers
  const restrictToNumbers = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show loading status immediately
    setStatus({
      visible: true,
      type: "loading",
      message: "Sending message...",
    });

    const form = e.target;
    const data = new FormData(form);
    const payload = new URLSearchParams(data);

    try {
      const action = "https://formsubmit.co/fusebridge@gmail.com";

      const response = await fetch(action, {
        method: "POST",
        body: payload,
      });

      if (response.ok) {
        setStatus({
          visible: true,
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        form.reset();
      } else {
        setStatus({
          visible: true,
          type: "error",
          message: `Submission Failed (Status: ${response.status}). Please try again.`,
        });
        const errorText = await response.text();
        console.error("FormSubmit Error:", errorText);
      }
    } catch (error) {
      console.error("Network error during form submission:", error);
      setStatus({
        visible: true,
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, visible: false }));
      }, 7000);
    }
  };

  return (
    <div className="p-8 rounded-xl shadow-2xl border border-vanilla">
      <h3 className="text-2xl font-bold text-vanilla mb-4">
        Start the Conversation
      </h3>

      <form onSubmit={handleSubmit} method="POST" className="space-y-4">
        {/* FormSubmit spam protection & captcha disable */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_honey" style={{ display: "none" }} />

        {/* Row 1: Name and Company */}
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          <div className="flex-1">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-vanilla mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-black border border-vanilla rounded-lg text-white placeholder-gray"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-vanilla mb-1"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Your Business (Optional)"
              className="w-full px-4 py-2 bg-black border border-vanilla rounded-lg text-white placeholder-gray"
            />
          </div>
        </div>

        {/* Row 2: Email and Phone Number */}
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          <div className="flex-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-vanilla mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@yourcompany.com"
              className="w-full px-4 py-2 bg-black border border-vanilla rounded-lg text-white placeholder-gray"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-vanilla mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Optional"
              onKeyDown={restrictToNumbers}
              className="w-full px-4 py-2 bg-black border border-vanilla rounded-lg text-white placeholder-gray"
            />
          </div>
        </div>

        {/* Row 3: Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-vanilla mb-1"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            placeholder="I need help with social media marketing..."
            className="w-full px-4 py-2 bg-black border border-vanilla rounded-lg text-white placeholder-gray"
          />
        </div>

        {/* Row 4: Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-vanilla mb-1"
          >
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            placeholder="Tell us about your project or query..."
            className="w-full px-4 py-2 bg-black border border-vanilla rounded-lg text-white placeholder-gray"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-orange text-black font-bold rounded-lg cursor-pointer"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
