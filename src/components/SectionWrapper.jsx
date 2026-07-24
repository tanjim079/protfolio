import { motion } from 'framer-motion';

export default function SectionWrapper({ children, id, className = "" }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100, damping: 20 }}
      className={`w-full min-h-screen pt-24 pb-12 ${className}`}
    >
      {children}
    </motion.section>
  );
}
