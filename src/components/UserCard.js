import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user }) => {
 

  

  return (
    <motion.div
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
     
    >
      <h3 className="text-lg font-semibold text-blue-600">{user.name}</h3>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-600">{user.phone}</p>
      <p className="text-gray-600 font-bold">{user.company.name}</p>
    </motion.div>
  );
};

export default UserCard;