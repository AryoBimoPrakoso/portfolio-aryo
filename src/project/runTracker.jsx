import React from "react";
import { motion } from "framer-motion";
import DetailRun from "../assets/foto/runtracker.png";
const runTracker = ({ setIndex }) => {
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
              <h1 className="text-3xl font-bold underline underline-offset-8">
                Run Tracker
              </h1>
              <p className="leading-relaxed w-1/3">
                Desain aplikasi pelacak kebugaran ini mengusung pendekatan visual yang modern dan informatif, memperlihatkan alur penggunaan mulai dari halaman penyambutan yang memotivasi pengguna untuk mengejar tujuan kesehatan, hingga tampilan detail aktivitas harian seperti jumlah langkah, durasi, jarak tempuh, dan estimasi kalori yang terbakar. Elemen visual seperti ilustrasi pelari, peta rute, dan statistik pencapaian harian dirancang untuk memberikan pengalaman yang intuitif dan menyemangati pengguna melalui antarmuka yang bersih, terstruktur, dan mudah dinavigasi, menjadikan desain ini cocok untuk aplikasi yang berfokus pada kebugaran dan gaya hidup aktif.
              </p>
            </div>

            <img
              src={DetailRun}
              alt="Detail Wallet"
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default runTracker;
