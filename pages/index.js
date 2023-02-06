import { motion } from 'framer-motion';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div>
      <motion.div animate={{ x: 100 }} transition={{ delay: 1 }}>
        A
      </motion.div>
      <motion.div
        animate={{ x: 100 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        B
      </motion.div>

      <motion.div
        animate={{ x: 100, y: 100, opacity: 1 }}
        transition={{
          delay: 1,
          x: { type: 'spring', stiffness: 100 },
          default: { duration: 2 },
        }}
      >
        C
      </motion.div>

      <motion.ul variants={container} initial="hidden" animate="show">
        <motion.li variants={item}>1.1</motion.li>
        <motion.li variants={item}>1.2</motion.li>
      </motion.ul>

      <motion.path
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, type: 'tween' }}
      >
        D
      </motion.path>

      <motion.div animate={{ rotate: 180 }} transition={{ type: 'spring' }}>
        E
      </motion.div>
    </motion.div>
  );
}
