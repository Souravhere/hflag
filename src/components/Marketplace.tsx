"use client"
import { HoverEffect } from "../components/ui/card-hover-effect";

export function Marketplace() {
  return (
    <div className="w-full italic bg-[#1e1e1e] mx-auto sm:px-8 px-2">
         <h2  className="text-3xl md:text-5xl text-center font-bold text-white">
         Marketplace <span className="text-glow-orange text-[#ff6b35]">Overview</span>
        </h2>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Halal Marketplace",
    description:
      "Explore a global marketplace featuring rigorously halal-certified products, ensuring authenticity with every purchase.",
  },
  {
    title: "Halal Meat",
    description:
      "Discover a wide variety of halal meats, all certified by trusted authorities, meeting the demand for authentic halal food.",
  },
  {
    title: "Diverse Halal Goods",
    description:
      "Shop an expanding range of halal-certified products, from packaged foods to personal care items—all in one place!",
  },
  {
    title: "Blockchain",
    description:
      "Trust in our blockchain technology for verifiable halal certifications, ensuring every product’s authenticity.",
  },
  {
    title: "Supply Chain",
    description:
      "Trace the journey of your halal products from farm to table, providing peace of mind through unmatched transparency.",
  },
  {
    title: "Hflag Token",
    description:
      "Enjoy seamless transactions using Hflag tokens. Convert tokens into points for flexible shopping options!",
  },
//   {
//     title: "Verified Vendors",
//     description:
//       "Shop from rigorously verified vendors with transparent product details, ensuring you make informed choices every time.",
//   },
//   {
//     title: "Global Access",
//     description:
//       "Experience the convenience of cross-border halal shopping with our multilingual platform, catering to a global audience.",
//   },
//   {
//     title: "Earn Rewards",
//     description:
//       "Join our loyalty program to earn Hflag tokens for purchases and referrals, unlocking exclusive offers and discounts!",
//   },
];
