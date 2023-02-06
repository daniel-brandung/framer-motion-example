import { useState } from 'react';
import { motion, Variants } from 'framer-motion';

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="main">
      <motion.div
        className="box"
        drag
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ['0%', '0%', '50%', '50%', '0%'],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />

      <motion.div
        style={{ marginTop: '80vh' }}
        initial={{ x: -300, filter: 'blur(5px)' }}
        whileInView={{
          x: 0,
          filter: 'blur(0px)',
          transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 1.8,
          },
        }}
        viewport={{ once: false, amount: 'all' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="260"
          height="72"
          fill="none"
        >
          <path
            fill="#004F9F"
            d="M6.565 28.108c0-2.38 1.805-4.053 5.362-4.053 1.936 0 4.263.444 6.068.994V19.32c-1.883-.34-3.976-.601-5.78-.601C4.525 18.72 0 22.826 0 28.736c0 10.958 13.444 8.055 13.444 14.41 0 3.06-2.432 4.393-5.545 4.393-2.328 0-5.257-.575-7.062-1.229v6.015c1.988.55 4.263.785 6.539.785 7.873 0 12.685-4.603 12.685-10.853 0-10.409-13.496-8.186-13.496-14.175M23.33 37c0 8.29 3.61 16.057 14.83 16.057 2.983 0 5.65-.497 8.005-1.386v-6.015c-1.674.785-4.735 1.569-6.67 1.569-6.46 0-9.364-4.053-9.364-11.298 0-6.46 2.956-11.166 8.92-11.166 2.196 0 5.021.575 7.114 1.229v-6.068c-2.093-.601-4.5-.889-6.775-.889-10.724 0-16.06 7.401-16.06 17.967ZM71.484 32.606H57.883V19.27H51.71v33.317h6.173V38.124h13.6v14.462h6.173V19.27h-6.172v13.337ZM102.793 40.06c0 5.674-1.988 7.74-6.749 7.74-5.31 0-6.643-2.955-6.643-7.165V19.269h-6.173v21.784c0 6.381 2.276 12.108 12.398 12.108 8.448 0 13.287-4.34 13.287-13.494V19.27h-6.12v20.79ZM133.368 32.606h-13.575V19.27h-6.172v33.317h6.172V38.124h13.575v14.462h6.173V19.27h-6.173v13.337ZM154.293 19.06c-3.139 0-5.99.052-8.605.209v33.344h6.172V40.87c.759.105 1.517.105 2.093.105 7.794 0 12.528-5.074 12.528-11.56 0-6.485-4.315-10.33-12.214-10.33m-.628 16.555c-.576 0-1.177-.052-1.805-.157v-11.14c.706-.053 1.413-.053 2.197-.053 4.185 0 6.042 2.118 6.042 5.492 0 3.609-2.615 5.78-6.408 5.832M176.133 19.269l-11.221 33.343h6.225l2.223-6.825h12.111l2.223 6.825h6.826L183.117 19.27h-6.984Zm-1.177 21.444 2.903-8.5c.628-1.934 1.151-3.844 1.517-5.57h.053c.392 1.883.863 3.505 1.464 5.335l2.982 8.735h-8.919ZM211.077 37.732c4.839-.785 8.161-4.341 8.161-9.284 0-6.826-4.551-9.388-11.64-9.388-3.714 0-6.695.052-9.206.209v33.344h6.172V38.83h.236l8.919 13.782h7.637l-7.689-11.22c-.811-1.124-1.701-2.432-2.616-3.66m-6.513-3.662v-9.624c.628-.105 1.517-.157 2.433-.157 3.897 0 5.806 1.57 5.806 4.786 0 3.216-2.275 5.073-5.989 5.073-.942 0-1.805-.052-2.224-.104M237.599 35.352l11.718-16.083h-7.48l-10.41 15.115V19.27h-6.173v33.317h6.173V36.607l10.305 15.98h8.108l-12.241-17.235Z"
          />
        </svg>
      </motion.div>

      <div className="variants">
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          className="menu"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              <svg width="15" height="15" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </motion.div>
          </motion.button>
          <motion.ul
            variants={{
              open: {
                clipPath: 'inset(0% 0% 0% 0% round 10px)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: 'inset(10% 50% 90% 50% round 10px)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
          >
            <motion.li variants={itemVariants}>Item 1 </motion.li>
            <motion.li variants={itemVariants}>Item 2 </motion.li>
            <motion.li variants={itemVariants}>Item 3 </motion.li>
            <motion.li variants={itemVariants}>Item 4 </motion.li>
            <motion.li variants={itemVariants}>Item 5 </motion.li>
          </motion.ul>
        </motion.nav>
      </div>
    </main>
  );
}
