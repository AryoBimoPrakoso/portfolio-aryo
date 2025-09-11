import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { GoArrowUpRight } from "react-icons/go";
import Swal from "sweetalert2";
import { useCursor } from "../CustomCursor";
import { motion } from "framer-motion";

const Contact = () => {
  const { setCursorVariant } = useCursor();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      // Deteksi environment dan gunakan endpoint yang sesuai
      const isDev = window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1' ||
        window.location.port === '5173';

      let apiUrl;
      let useDevServer = false;

      if (isDev) {
        // Untuk development, coba Vercel dev dulu, fallback ke Express server
        apiUrl = '/api/send-contact';
        useDevServer = true;
      } else {
        // Untuk production, gunakan Vercel API
        apiUrl = '/api/send-contact';
      }

      console.log(`🚀 Sending to: ${apiUrl} (Dev mode: ${isDev})`);

      let response;

      try {
        // Coba endpoint pertama
        response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
      } catch (fetchError) {
        // Jika gagal di dev mode, coba Express server
        if (isDev && useDevServer) {
          console.log('🔄 Vercel API failed, trying Express server...');
          apiUrl = 'http://localhost:3010/send-contact';
          response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          });
        } else {
          throw fetchError;
        }
      }

      // Parse response
      let result;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        const text = await response.text();
        result = { message: text };
      }

      if (response.ok) {
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        e.target.reset(); // Reset form
      } else {
        throw new Error(result.error || result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('❌ Submit error:', error);

      let errorMessage = 'Failed to send message. ';

      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        errorMessage += 'Please make sure the server is running. ';
        if (window.location.hostname === 'localhost') {
          errorMessage += 'Run: npm run dev:email or vercel dev';
        }
      } else {
        errorMessage += error.message || 'Please try again later.';
      }

      Swal.fire({
        title: 'Error!',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                Send me a message using the form, and I'll get back to you
                shortly.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <p className="opacity-60 text-md lg:text-xl">
                  📍Based on Jakarta, Indonesia
                </p>
                <p className="opacity-60 text-md lg:text-xl">
                  ✉️ prakosoaryobimo@gmail.com
                </p>
              </div>

            </div>
          </div>
          <div className="bg-[#e6e6e6] w-full p-[32px] rounded-xl inset-shadow-sm mt-12">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <h2 className="text-[24px] lg:text-[32px]">Contact Form</h2>
              <div className="flex flex-col gap-3">
                <label>Fullname</label>
                <input
                  className="w-full border-b-1 p-2"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  required
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex justify-around w-max gap-2 items-center py-2 px-4 bg-[#0f0f0f] rounded-xl text-[#f6f6f6] hover:scale-110 transition ease-in-out duration-300 mt-4 text-2 text-sm lg:text-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
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