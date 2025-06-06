import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import '../index.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import slide1Bg from '../assets/slider-1.webp';
import slide2Bg from '../assets/slider-2.webp';
import slide3Bg from '../assets/slider-3.webp';
import slide4Bg from '../assets/slider-4.webp';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative w-full bg-white overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                navigation={{
                    nextEl: '.swiper-hero-button-next',
                    prevEl: '.swiper-hero-button-prev',
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-hero-pagination',
                    bulletClass: 'swiper-hero-pagination-bullets',
                    bulletActiveClass: 'swiper-hero-pagination-bullets-active'
                }}
                onSwiper={(swiper) => {
                    swiper.on('slideChange', () => {
                        console.log('slideChange');
                    });
                }}
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="h-[400px] md:h-[700px] mx-auto text-center md:text-left flex flex-col justify-center items-start max-w-full" style={{ backgroundImage: `url(${slide1Bg})`, backgroundSize: 'contain', backgroundPosition: 'center right', backgroundRepeat: 'no-repeat' }}>
                        <motion.div className="container px-8 md:px-0" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <div className="slider-content-title mb-6 w-full md:w-1/2">
                                <h2 className="text-2xl md:text-5xl font-bold text-tertiary">
                                    Tu bienestar es nuestra prioridad. Consultas médicas de calidad en cada paso de tu salud.
                                </h2>
                            </div>
                            <div className="slider-content mb-6">
                                <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto md:mx-0">
                                    En nuestro Centro de Salud, ofrecemos consultas médicas con atención dedicada y comprometida. Tu bienestar es nuestra prioridad.
                                </p>
                            </div>
                            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="py-6">
                                <a href="/nosotros" className="bg-secondary hover:bg-primary text-white px-6 py-3 rounded-md inline-block transition">
                                    Conócenos
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="h-[400px] md:h-[700px] mx-auto text-center md:text-left flex flex-col justify-center items-start max-w-full" style={{ backgroundImage: `url(${slide2Bg})`, backgroundSize: 'contain', backgroundPosition: 'center right', backgroundRepeat: 'no-repeat' }}>
                        <motion.div className="container px-8 md:px-0" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <h2 className="text-2xl md:text-5xl font-bold text-tertiary mb-6 w-full md:w-1/2">
                                Descubre una capacitación de calidad en el corazón de la atención médica.
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg mb-6 max-w-2xl mx-auto md:mx-0">
                                En nuestro centro médico, no solo cuidamos de la salud, también cultivamos el conocimiento. Ofrecemos capacitaciones de calidad para empoderar a profesionales y fortalecer la excelencia en el cuidado de la salud.
                            </p>
                            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="py-6">
                                <a href="/servicios" className="bg-secondary hover:bg-primary text-white px-6 py-3 rounded-md inline-block transition">
                                    Conócenos
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="h-[400px] md:h-[700px] mx-auto text-center md:text-left flex flex-col justify-center items-start max-w-full" style={{ backgroundImage: `url(${slide3Bg})`, backgroundSize: 'contain', backgroundPosition: 'center right', backgroundRepeat: 'no-repeat' }}>
                        <motion.div className="container px-8 md:px-0" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <h2 className="text-2xl md:text-5xl font-bold text-tertiary mb-6 w-full md:w-1/2">
                                Pruebas de laboratorio con resultados precisos, tu salud es nuestra prioridad.
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg mb-6 max-w-2xl mx-auto md:mx-0">
                                Las pruebas de laboratorio son herramientas fundamentales en el ámbito de la atención médica, desempeñando un papel crucial en el diagnóstico, tratamiento y seguimiento de diversas condiciones de salud.
                            </p>
                            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="py-6">
                                <a href="/contactanos" className="bg-secondary hover:bg-primary text-white px-6 py-3 rounded-md inline-block transition">
                                    Conócenos
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide>
                    <div className="h-[400px] md:h-[700px] mx-auto text-center md:text-left flex flex-col justify-center items-start max-w-full" style={{ backgroundImage: `url(${slide4Bg})`, backgroundSize: 'contain', backgroundPosition: 'center right', backgroundRepeat: 'no-repeat' }}>
                        <motion.div className="container px-8 md:px-0" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <h2 className="text-2xl md:text-5xl font-bold text-tertiary mb-6 w-full md:w-1/2">
                                Ofreciendo soluciones integrales para un entorno laboral seguro y saludable.
                            </h2>
                            <p className="text-black text-base md:text-lg mb-6 max-w-2xl mx-auto md:mx-0">
                                Descubre cómo podemos fortalecer tu equipo y optimizar el rendimiento en el trabajo a través de nuestro enfoque especializado y personalizado en salud ocupacional.
                            </p>
                            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="py-6">
                                <a href="/contactanos" className="bg-secondary hover:bg-primary text-white px-6 py-3 rounded-md inline-block transition">
                                    Conócenos
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </SwiperSlide>

                {/* Flechas de navegación */}
                <div className="swiper-hero-button-prev absolute top-1/2 left-0 md:left-4 transform -translate-y-1/2 z-20 cursor-pointer bg-white/90 md:bg-white/80 hover:bg-white p-2 md:p-3 rounded-r-full md:rounded-full shadow-lg transition-all duration-300">
                    <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <div className="swiper-hero-button-next absolute top-1/2 right-0 md:right-4 transform -translate-y-1/2 z-20 cursor-pointer bg-white/90 md:bg-white/80 hover:bg-white p-2 md:p-3 rounded-l-full md:rounded-full shadow-lg transition-all duration-300">
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>

                {/* Puntos de navegación */}
                <div className="swiper-hero-pagination absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex cursor-pointer"></div>
            </Swiper>
        </section>
    );
};

export default Hero;