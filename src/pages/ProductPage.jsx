import { useState } from "react";
import BiddingSection from "../components/BiddingSection";
import { COIN_IMAGE } from "./HomePage";
import { motion } from "framer-motion";
const ProductPage = () => {
  const [highestBid, setHighestBid] = useState(50000);


  return (
    <div className="w-full flex-grow overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="lg:w-3/4 w-full mx-auto"
      >
        <BiddingSection
          coinImage={COIN_IMAGE}
          highestBid={highestBid}
      
        />
      </motion.div>
    </div>
  );
};

export default ProductPage;
