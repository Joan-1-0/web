import React from 'react';
import { motion } from 'framer-motion';

interface GameSectionProps {
  title: string;
  type: 'pc' | 'mobile' | 'console';
}

interface GameData {
  title: string;
  description: string;
  image: string;
}

const pcGames: GameData[] = [
  {
    title: "Dark Souls",
    description: "Dark Souls no es un juego para los débiles de corazón. Desde su lanzamiento, se ha ganado la reputación de ser uno de los títulos más difíciles y exigentes en la historia de los videojuegos. Pero más allá de su brutal dificultad, Dark Souls es una experiencia única que ha dejado una huella imborrable en la industria. Y por ende su jugabilidad es increible con varios aspectos a tomar en cuanta como: Dificultad brutal: Dark Souls es conocido por su dificultad implacable. La muerte es constante y cada enemigo representa una amenaza real. Combate estratégico: El sistema de combate es profundo y requiere de un aprendizaje constante. Cada golpe cuenta y es necesario estudiar los patrones de ataque de los enemigos para salir victorioso. Exploración: El mundo de Dark Souls está interconectado y lleno de secretos. Explorar cada rincón es recompensado con nuevos descubrimientos y poderosos objetos. Progreso no lineal: El juego te ofrece una gran libertad para explorar el mundo a tu propio ritmo, sin una ruta lineal a seguir. Multijugador opcional: Aunque Dark Souls es una experiencia principalmente solitaria, cuenta con un modo multijugador que te permite cooperar o competir con otros jugadores.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc"
  },
  {
    title: "Left 4 Dead 2",
    description: "Es un juego imprescindible para los amantes de los cooperativos y los juegos de terror. Su combinación de acción frenética, cooperatividad y rejugabilidad lo convierten en una experiencia inolvidable. Si buscas un juego para pasar un buen rato con tus amigos, Left 4 Dead 2 es la elección perfecta. Puntos Fuertes: Jugabilidad cooperativa adictiva, Gran variedad de enemigos, Alta rejugabilidad, Atmósfera de terror inmersiva. Puntos Débiles: Gráficos un poco anticuados, Algunas mecánicas podrían haberse pulido más",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f"
  },
  {
    title: "League of Legends (LoL)",
    description: "Un clásico moderno de los MOBA. Combates épicos: Dos equipos de cinco jugadores se enfrentan en un mapa estratégico, usando campeones únicos con habilidades especiales. Profundidad y personalización: Miles de combinaciones de campeones, objetos y runas permiten a cada jugador crear un estilo de juego único. Comunidad gigante: Millones de jugadores de todo el mundo forman una comunidad apasionada y competitiva. Constante evolución: Nuevas actualizaciones, campeones y modos de juego mantienen el juego fresco y desafiante. En resumen, LoL es un juego de estrategia en tiempo real que combina acción, personalización y una fuerte componente social. Si buscas un juego competitivo y con una gran profundidad, LoL es una excelente opción.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e"
  }
];

const mobileGames: GameData[] = [
  {
    title: "Mobile Legends: Bang Bang",
    description: "Este es un juego de acción multijugador en línea (MOBA) muy popular para dispositivos móviles. Imagina una versión simplificada de League of Legends, pero diseñada específicamente para partidas rápidas y emocionantes en tu teléfono. Escoges a un héroe con habilidades únicas y te unes a un equipo para destruir la base enemiga. Es un juego lleno de estrategia, acción y mucha adrenalina. En mi experiencia este juego es demasiado entretenido, ya que no solo se trata de tirar el nexo del enemigo, si no de crear estrategias junto a tu equipo para ganar.",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769"
  },
  {
    title: "Love Nikki-Dress UP Queen",
    description: "Si te encanta la moda y la personalización, este juego es para ti. En Love Nikki, te sumerges en un mundo de fantasía donde puedes diseñar atuendos increíbles para tu personaje, Nikki. Hay una gran variedad de ropa, accesorios y estilos para elegir, y puedes participar en concursos de moda para mostrar tu creatividad. Es una excelente opción para relajarte y expresar tu estilo personal. Este juego lo jugaba de chiquita, este juego me marco por sus graficos y la creatividad que te da para vestir a Nikki.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113"
  },
  {
    title: "Genshin Impact",
    description: "Este es un juego de rol de acción (ARPG) de mundo abierto que te transporta a un universo fantástico lleno de magia y aventuras. Puedes explorar vastos paisajes, resolver acertijos, luchar contra monstruos y conocer a personajes interesantes. Genshin Impact destaca por sus gráficos impresionantes, su historia envolvente y su sistema de combate dinámico. Es un juego que te mantendrá enganchado durante horas. A mi parecer este juego es demasiado entretenido por que ademas de que te da la libertad de moverte como quieras, tambien puedes seguir la historia.",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf"
  }
];

const consoleGames: GameData[] = [
  {
    title: "Days Gone",
    description: "Days Gone es un juego de supervivencia en un mundo abierto post-apocalíptico. Sigues a Deacon St. John, un motociclista que navega por un Oregon devastado por una pandemia. La historia es envolvente y los gráficos son impresionantes, pero las misiones pueden volverse repetitivas y hay algunos problemas técnicos. A pesar de estos defectos, es una experiencia emocionante para los fanáticos de los juegos de acción y supervivencia.",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1"
  },
  {
    title: "The Last of Us Part II",
    description: "The Last of Us Part II es una secuela intensa y emocional que sigue la historia de Ellie en un mundo post-apocalíptico. La narrativa es profunda y los gráficos son de los mejores en la generación de PS4. La jugabilidad combina acción y sigilo de manera magistral, aunque la historia puede ser divisiva y el ritmo desigual. A pesar de esto, es una obra maestra que todo fanático de los videojuegos debería experimentar.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f"
  },
  {
    title: "Elden Ring",
    description: "Elden Ring es un RPG de acción en mundo abierto desarrollado por FromSoftware. Combina la jugabilidad desafiante de la serie Souls con un vasto mundo lleno de misterios. Los gráficos son impresionantes y la jugabilidad es variada y estratégica. Sin embargo, la curva de aprendizaje puede ser empinada y hay algunos problemas técnicos. A pesar de estos desafíos, es una experiencia inolvidable para los fanáticos del género.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc"
  }
];

const GameCard: React.FC<{ game: GameData }> = ({ game }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    className="w-full p-6 mb-8 rounded-lg bg-black bg-opacity-50"
    style={{ border: '2px solid #b829ff' }}
  >
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/3">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <div className="md:w-2/3">
        <h3 className="text-xl font-['Press_Start_2P'] text-white mb-4">{game.title}</h3>
        <p className="text-white text-lg leading-relaxed">{game.description}</p>
      </div>
    </div>
  </motion.div>
);

const GameSection: React.FC<GameSectionProps> = ({ title, type }) => {
  const getGames = () => {
    switch (type) {
      case 'pc':
        return pcGames;
      case 'mobile':
        return mobileGames;
      case 'console':
        return consoleGames;
      default:
        return [];
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-['Press_Start_2P'] text-white mb-8 text-center">{title}</h2>
      <div className="space-y-12">
        {getGames().map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameSection;