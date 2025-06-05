{/* Icono de react lucide */ }
import { ArrowRight, ArrowLeft } from 'lucide-react';

{/* Swiper */ }
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

{/* Imágenes */ }
import carouselImage1 from '../assets/carousel-1.webp';
import carouselImage2 from '../assets/carousel-2.webp';
import carouselImage3 from '../assets/carousel-3.webp';
import carouselImage4 from '../assets/carousel-4.webp';

import { motion } from 'framer-motion';

const servicios = [
  {
    titulo: 'Rayos X',
    descripcion: 'Más detalles',
    imagen: carouselImage1,
    url: '/servicios'
  },
  {
    titulo: 'Exámenes de laboratorio',
    descripcion: 'Más detalles',
    imagen: carouselImage2,
    url: '/servicios'
  },
  {
    titulo: 'Capacitaciones',
    descripcion: 'Más detalles',
    imagen: carouselImage3,
    url: '/servicios'
  },
  {
    titulo: 'Monitoreos ocupacionales',
    descripcion: 'Más detalles',
    imagen: carouselImage4,
    url: '/servicios'
  }
];

const ServiciosSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-10 md:py-16"
    >
      <div className="container relative">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold text-start text-tertiary mb-6"
        >
          Servicios que ofrecemos
        </motion.h2>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.custom-swiper-next',
              prevEl: '.custom-swiper-prev',
            }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-8"
          >
            {servicios.map((servicio, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-md overflow-hidden border border-gray-200 shadow-sm transition hover:shadow-md bg-white"
                >
                  <img
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-tertiary text-lg mb-2">
                      {servicio.titulo}
                    </h3>
                    <a
                      href={servicio.url}
                      className="text-sm text-tertiary font-medium inline-flex items-center gap-1 hover:underline"
                    >
                      {servicio.descripcion}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Flechas de navegación personalizadas */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="custom-swiper-prev absolute top-1/2 left-2 md:-left-16 transform -translate-y-1/2 z-20 cursor-pointer bg-white hover:bg-secondary group p-2 md:p-4 rounded-full shadow-lg transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 md:w-6 md:h-6 text-secondary group-hover:text-white transition-colors" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="custom-swiper-next absolute top-1/2 right-2 md:-right-16 transform -translate-y-1/2 z-20 cursor-pointer bg-white hover:bg-secondary group p-2 md:p-4 rounded-full shadow-lg transition-all duration-300"
          >
            <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-secondary group-hover:text-white transition-colors" />
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiciosSection;