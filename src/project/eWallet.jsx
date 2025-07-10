import React from "react";
import DetailWallet from "../assets/foto/e-wallet.png";
import { motion } from "framer-motion";

const Ewallet = ({ setIndex }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mt-[140px] p-4 h-full">
          <div className="flex flex-col justify justify-center w-full">
            <div className="flex flex-row p-6 w-full justify-around">
              <h1 className="text-3xl font-bold underline underline-offset-8">E-Wallet </h1>
              <p className="leading-relaxed w-1/3">Desain UI/UX e-wallet "Velox" ini menampilkan antarmuka yang modern dan intuitif dengan fitur unggulan seperti kemampuan scan QR code untuk transaksi cepat, serta grafik pemantau pengeluaran yang detail untuk membantu pengguna mengelola keuangan secara efektif. Selain itu, aplikasi ini juga menyediakan riwayat transaksi yang jelas dan fitur "Quick Send" untuk kemudahan pengiriman uang, semua disajikan dalam tata letak yang rapi dan menarik.</p>
            </div>

            <img
              src={DetailWallet}
              alt="Detail Wallet"
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Ewallet;
