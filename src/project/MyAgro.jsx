import React from 'react'
import { motion } from "framer-motion";
import MyAgroDetail from '../assets/foto/my-agro.png'

const MyAgro = () => {
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
                  <h1 className="text-3xl font-bold underline underline-offset-8">Asisstant App</h1>
                  <p className="leading-relaxed w-1/3">Desain aplikasi <span className='font-bold'>myAgro</span> menggabungkan elemen teknologi dan kemudahan akses informasi untuk mendukung aktivitas pertanian yang cerdas dan modern. Dengan tampilan awal yang menampilkan ilustrasi petani dan drone, aplikasi menciptakan kesan inovatif sejak pertama kali digunakan. Informasi cuaca yang komprehensif serta status lahan pertanian — mulai dari pertumbuhan tanaman hingga estimasi panen — disajikan secara visual dan interaktif, sehingga memudahkan petani dalam pengambilan keputusan berbasis data. Fitur penentuan lokasi lahan baru dengan dukungan peta dan pilihan lokasi semakin memperkuat fungsi aplikasi sebagai alat bantu strategis dalam pengelolaan pertanian digital. Seluruh elemen desain dirancang agar intuitif dan mendukung produktivitas petani melalui antarmuka yang ramah dan efisien.</p>
                </div>
    
                <img
                  src={MyAgroDetail}
                  alt="Detail Wallet"
                  className="m-auto rounded-xl w-8xl "
                />
              </div>
            </div>
          </motion.div>
        </>
  )
}

export default MyAgro
