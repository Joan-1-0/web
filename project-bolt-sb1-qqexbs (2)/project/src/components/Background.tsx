import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  const icons = ['🎮', '🎲', '🎯', '🎪', '🎨'];
  const positions = Array(30).fill(null).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    icon: icons[Math.floor(Math.random() * icons.length)]
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {positions.map((pos, index) => (
        <motion.div
          key={index}
          className="absolute text-violet-600 text-2xl opacity-20"
          initial={{
            x: `${pos.x}vw`,
            y: `${pos.y}vh`,
          }}
          animate={{
            x: [
              `${pos.x}vw`,
              `${(pos.x + 20) % 100}vw`,
              `${pos.x}vw`
            ],
            y: [
              `${pos.y}vh`,
              `${(pos.y + 20) % 100}vh`,
              `${pos.y}vh`
            ]
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
          whileHover={{
            scale: 0,
            opacity: 0,
            transition: { duration: 0.3 }
          }}
        >
          {pos.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default Background;