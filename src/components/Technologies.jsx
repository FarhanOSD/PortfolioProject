import React from 'react'
import { FaReact } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';

import { motion } from 'motion/react';


const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
     },
   },
  
});
function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          transition="transition"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaReact className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          transition="transition"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl text-neutral-900" />
        </motion.div>
        <motion.div
          variants={iconVariants(0.5)}
          initial="initial"
          animate="animate"
          transition="transition"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-700" />
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          transition="transition"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPostgresql className="text-7xl text-cyan-900" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          transition="transition"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGitAlt className="text-7xl text-red-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          transition="transition"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(0.5)}
          initial="initial"
          animate="animate"
          transition="transition"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiDjango className="text-7xl text-green-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          transition="transition"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies