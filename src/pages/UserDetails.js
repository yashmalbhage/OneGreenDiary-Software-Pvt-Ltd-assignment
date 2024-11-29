import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const UserDetails = () => {
  const { name } = useParams();

  return (
    <motion.div
      className="p-4 max-w-xl mx-auto bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold text-blue-600">User Details</h1>
      <p className="mt-2 text-gray-600">User name: {name}</p>
      {/* Add more detailed user info here */}
    </motion.div>
  );
};

export default UserDetails;
