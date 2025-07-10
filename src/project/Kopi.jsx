import React from 'react'
import { motion } from "framer-motion";
import WebKopi from '../assets/foto/websiteKopi.png'

const Kopi = () => {
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
              <h1 className="text-3xl font-bold underline underline-offset-8">Web Profile Company</h1>
              <p className="leading-relaxed mt-8 w-full lg:w-1/3">Desain halaman web <span className='font-bold'>Sikopi</span> ini menghadirkan identitas brand yang kuat dan mengundang secara visual, menyampaikan bahwa kopi bukan hanya minuman—melainkan pengalaman. Dengan nuansa hangat dan layout yang tertata rapi, halaman ini menonjolkan misi perusahaan untuk menghadirkan kopi berkualitas tinggi yang diracik dengan penuh dedikasi. Elemen utama seperti slogan inspiratif, foto proses pembuatan kopi, dan penjelasan tentang visi perusahaan berpadu secara harmonis dengan pilihan lokasi kedai yang interaktif, menciptakan kesan profesional sekaligus dekat dengan pelanggan. Hal ini membuat desain Sikopi efektif sebagai wajah digital dari brand yang mengutamakan kualitas, cerita, dan kenyamanan dalam setiap sajian.</p>
            </div>

            <img
              src={WebKopi}
              alt="Detail Wallet"
              className="m-auto rounded-xl w-8xl "
            />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Kopi
