import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2"
      >
        <p className="font-['Press_Start_2P'] text-white text-justify leading-relaxed text-sm">
          ¡Bienvenido a nuestra página de recomendaciones de juegos (RJ), creada por y para auténticos fanáticos! Aquí no encontrarás críticas de expertos ni análisis técnicos complicados. Lo que sí encontrarás es una comunidad apasionada de jugadores como tú, compartiendo sus experiencias, opiniones y recomendaciones sobre los mejores juegos. Porque sabemos que nadie disfruta un buen juego como un verdadero entusiasta.
          <br /><br />
          Navega por nuestros apartados para descubrir recomendaciones adaptadas a tu dispositivo favorito:
          <br /><br />
          RJ Consolas: Recomendaciones para aquellos que disfrutan jugando en consolas.
          <br /><br />
          RJ Celular: Los mejores juegos para disfrutar en tu teléfono móvil.
          <br /><br />
          RJ PC: Recomendaciones de juegos para todos los amantes del gaming en PC.
          <br /><br />
          ¡Únete a nosotros y descubre nuevos juegos que te encantarán, recomendados por personas que comparten tu misma pasión! 🎮🚀
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2"
      >
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
          alt="Gaming Setup"
          className="rounded-lg shadow-2xl"
        />
      </motion.div>
    </div>
  );
};

export default Home;