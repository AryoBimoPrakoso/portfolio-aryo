import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { GoArrowUpRight } from "react-icons/go";
import Swal from "sweetalert2";
import { useCursor } from "../CustomCursor";
import { motion } from "framer-motion";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d717e774-e47a-4b99-b9ff-b95761aad812");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        confirmButtonColor: "#0f0f0f",
        title: "🎉 Email Sent!",
        text: "Your message has been successfully sent. I'll get back to you soon!",
        icon: "success",
      });
    }
  };

  const { setCursorVariant } = useCursor();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full mt-[100px] p-[32px] lg:p-[56px] flex flex-col lg:flex-row">
          <div className="w-full flex flex-col">
            <h1
              className="w-max text-[32px] lg:text-[70px]"
              onMouseEnter={() => setCursorVariant("text")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              Let's Connect!
            </h1>
            <div className="flex flex-col gap-4">
              <p className="leading-tight mt:6 lg:mt-12 text-md lg:text-xl">
                Have a question, feedback, or project in mind? <br />
                Send me a message using the form, and I’ll get back to you
                shortly.
              </p>
              <p className="opacity-50 text-md lg:text-xl">
                Based on Jakarta, Indonesia
              </p>
            </div>
          </div>
          <div className="bg-[#e6e6e6] w-full p-[32px] rounded-xl inset-shadow-sm mt-12">
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <h2 className="text-[24px] lg:text-[32px]">Contact Form</h2>
              <div className="flex flex-col gap-3">
                <label>Fullname</label>
                <input
                  className="w-full border-b-1 p-2"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label>Email</label>
                <input
                  className="w-full border-b-1 p-2"
                  type="email"
                  placeholder="aryo@example.com"
                  name="email"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label>Message</label>
                <TextareaAutosize
                  minRows={1}
                  maxRows={10}
                  className="w-full border-b-1 p-2 resize-none overflow-hidden"
                  placeholder="Enter your message"
                  name="message"
                  required
                />
              </div>

              <button
                type="submit"
                className="flex justify-around w-max gap-2 items-center py-2 px-4 bg-[#0f0f0f] rounded-xl text-[#f6f6f6] hover:scale-110 transition ease-in-out duration-300 mt-4 text-2 text-sm lg:text-md"
              >
                Submit
                <span>
                  <GoArrowUpRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
