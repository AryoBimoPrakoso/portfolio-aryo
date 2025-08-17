import React from "react";
import DetailWallet from "../assets/foto/e-wallet.png";
import { motion } from "framer-motion";
import { useCursor } from "../CustomCursor";

const Ewallet = () => {
  const { setCursorVariant } = useCursor();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mt-[140px] p-4 h-full">
          <div className="flex flex-col-reverse lg:flex-col justify justify-center w-full">
            <div className="flex flex-col md:flex-col lg:flex-row p-6 w-full justify-around">
              <h1 className="text-3xl font-bold underline underline-offset-8">
                E-Wallet
              </h1>
              <p
                className="leading-relaxed mt-8 w-full lg:w-1/3 text-[20px] lg:text-[24px]"
                onMouseEnter={() => setCursorVariant("text")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                The design of the <span clasName="font-bold">Velox</span>{" "}
                e-wallet features a modern and intuitive interface with
                outstanding features such as QR code scanning for fast
                transactions and detailed spending monitoring charts to help
                users manage their finances effectively. In addition, the app
                also provides a clear transaction history and a “Quick Send”
                feature for easy money transfers, all presented in a neat and
                attractive layout.
              </p>
            </div>

            <img
              src={DetailWallet}
              alt="Detail Wallet"
              className="rounded-xl w-full"
              onMouseEnter={() => setCursorVariant("text")}
              onMouseLeave={() => setCursorVariant("default")}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Ewallet;
