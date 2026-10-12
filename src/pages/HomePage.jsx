import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';


import AuctionStatus from '../components/AuctionStatus';
import BiddingSection from '../components/BiddingSection';
import CoinSpecs from '../components/CoinSpecs';
import WhyDifferent from '../components/WhyDifferent';
import HowItWorks from '../components/HowItWorks';
import AuctionRules from '../components/AuctionRules';
import Faq from '../components/Faq';
import CtaBanner from '../components/CtaBanner';
import '../App.css';
import Hero from '../components/Hero';

export const COIN_IMAGE ='/coin-front.png';


const HomePage = () => {
      const [highestBid, setHighestBid] = useState(50000);
      const [highestBidder, setHighestBidder] = useState('M***r K.');
      const [totalBids, setTotalBids] = useState(12);
      const [activeBidders, setActiveBidders] = useState(4);
      const [timeRemaining, setTimeRemaining] = useState(9840); // 2 hours 44 mins
    
      // Live auction ticking countdown
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
      }, []);
    
      const [bidsList, setBidsList] = useState([
        {
          collector: 'M***r K.',
          amount: 1500,
          time: '8 mins ago',
          status: 'Accepted (Highest)',
        },
        {
          collector: 'T***n S.',
          amount: 1400,
          time: '24 mins ago',
          status: 'Outbid',
        },
        {
          collector: 'A***d R.',
          amount: 1200,
          time: '1 hr ago',
          status: 'Outbid',
        },
        {
          collector: 'R***l H.',
          amount: 1000,
          time: '2 hrs ago',
          status: 'Starting Bid',
        },
      ]);
    
      const [lightbox, setLightbox] = useState({
        isOpen: false,
        imageSrc: '',
        caption: '',
      });
    
      const handleOpenLightbox = (src, caption) => {
        setLightbox({
          isOpen: true,
          imageSrc: src,
          caption: caption,
        });
      };
    
      const handleCloseLightbox = () => {
        setLightbox((prev) => ({ ...prev, isOpen: false }));
      };
    
      const handlePlaceBid = (newBid) => {
        setHighestBid(newBid.amount);
        setHighestBidder(newBid.collector);
        setTotalBids((prev) => prev + 1);
        setActiveBidders((prev) => prev + 1);
    
        // Anti-sniping safeguard: if under 5 minutes (300 seconds), add 5 minutes!
        setTimeRemaining((prev) => (prev < 300 ? prev + 300 : prev));
    
        setBidsList((prev) => {
          const updatedPrev = prev.map((item, index) => {
            if (index === 0) {
              return { ...item, status: 'Outbid' };
            }
            return item;
          });
          return [newBid, ...updatedPrev];
        });
      };
    return (
       <main className="w-full flex-grow overflow-x-hidden">
              {/* 2. Hero Section */}
              <Hero
                coinImage={COIN_IMAGE}
                onOpenLightbox={handleOpenLightbox}
              />
      
              {/* 3. Auction Status Strip */}
              <AuctionStatus
                highestBid={highestBid}
                highestBidder={highestBidder}
                totalBids={totalBids}
                activeBidders={activeBidders}
                timeRemaining={timeRemaining}
              />
      
              {/* 4. Place Your Bid & 5. Live Bid Activity */}
              <BiddingSection
                coinImage={COIN_IMAGE}
                highestBid={highestBid}
                bidsList={bidsList}
                onPlaceBid={handlePlaceBid}
              />
      
              {/* 6. Detailed Coin Specifications & Macro Gallery */}
              <CoinSpecs
                coinImage={COIN_IMAGE}
                onOpenLightbox={handleOpenLightbox}
              />
      
              {/* 7. Why This Auction Is Different */}
              <WhyDifferent />
      
              {/* 8. How It Works */}
              <HowItWorks minValidBid={highestBid + 100} />
      
              {/* 9. Auction Rules & Safeguards */}
              <AuctionRules />
      
              {/* 10. FAQ Accordion */}
              <Faq />
      
              {/* 11. Final CTA Banner */}
              <CtaBanner />
              <Outlet />
            </main>
    );
};

export default HomePage;