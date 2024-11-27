import React from 'react';
import { motion } from 'framer-motion';

interface ProfileData {
  name: string;
  description: string;
  image: string;
}

const profiles: ProfileData[] = [
  {
    name: "Google|Soulten",
    description: "Tengo 22 años y llevo jugando Mobile desde que salió, es uno de mis juegos favoritos en el cual e durado horas jugando, me edentrado tanto que estuve organizando equipos competitivos por un rato, mi rango actual es Gloria Mítica. Considero que es buen rango, pues es el penúltimo de todos los rangos que hay.",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8"
  },
  {
    name: "fhisred",
    description: "Tengo 19 años y e jugado left 4 dead 2 desde que salió, es mi juego favorito por la trama y el multijugador, tengo grandes recuerdos del juego y e conocido a tantas personas por este, me he sentido afortunado de disfrutar de este juego tantas horas y poder llegar a descubrir tantas cosas nuevas del mismo, sin duda un juego que sin importar el tiempo se sigue disfrutando.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e"
  },
  {
    name: "Arely",
    description: "Tengo 22 años, he jugado the last of us part II desde que salió, me atrapo su trama y jugabilidad que solo aumentan por mi justo a los zombies, me atrapo su estilo de supervivencia y una trama seria que toca un tema algo complejo, si me preguntaran si lo volveria a jugar como si fuera la primera ves que lo juegue diria que si, recomiendo muvho este juego si eres alguien que le justan los juegos de zombies y de supervivencia.",
    image: "https://images.unsplash.com/photo-1551022372-0bdac482b9d6"
  }
];

const AboutCard: React.FC<{ profile: ProfileData }> = ({ profile }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative w-full h-auto min-h-[400px] mb-8 rounded-lg overflow-hidden group p-6"
      style={{ border: '2px solid #b829ff' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0"
      >
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-full object-cover opacity-30"
        />
      </motion.div>
      <div className="relative z-10">
        <h3 className="text-2xl font-['Press_Start_2P'] text-white mb-4">{profile.name}</h3>
        <p className="text-white text-lg leading-relaxed">{profile.description}</p>
      </div>
    </motion.div>
  );
};

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 gap-8">
        {profiles.map((profile, index) => (
          <AboutCard key={index} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default About;