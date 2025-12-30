"use client";
import { CertificationsData } from "../utils/data";
import Link from "next/link";
// import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const certifications = Array.isArray(CertificationsData)
  ? CertificationsData
  : [];

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");

  if (!month) return year;

  const date = new Date(year, month - 1);

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(date);
};

// Component to render a single card (kept separate for clarity in the map)
const CertificationCard = ({ cert, isExpired }) => (
  <motion.div
    key={cert.id}
    className={`
      p-4 border border-border rounded-xl shadow-sm flex-shrink-0 min-w-[280px] sm:min-w-[320px] 
      flex justify-between items-center transition duration-200 text-xs
      ${
        isExpired
          ? "bg-muted opacity-70 hover:opacity-100"
          : "bg-card hover:shadow-lg"
      }
    `}
    whileHover={{ scale: 1.01 }}
  >
    <div className="flex items-start space-x-4 flex-grow">
      <div className="flex-grow min-w-0">
        <h3
          className={` font-semibold ${
            isExpired ? "text-muted-foreground" : "text-foreground"
          }`}
        >
          {cert.name}
        </h3>
        <p className=" text-muted-foreground mt-1 truncate">
          <span className="font-medium text-foreground">{cert.issuer}</span>
          {" · "}
          Issued: {formatDate(cert.issueDate)}
          {cert.expirationDate && (
            <>
              {" · "}
              <span
                className={
                  isExpired
                    ? "text-red-600 font-medium"
                    : "text-muted-foreground"
                }
              >
                Expires: {formatDate(cert.expirationDate)}
              </span>
            </>
          )}
          {isExpired && (
            <span className="text-red-600 ml-2 text-xs font-bold">
              (Expired)
            </span>
          )}
        </p>
      </div>
    </div>
    {cert.credentialUrl && cert.credentialUrl.startsWith("http") && (
      <Link
        href={cert.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 ml-4 px-3 py-1 font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        View Credential →
      </Link>
    )}
  </motion.div>
);

const Certifications = () => {
  const innerRef = useRef(null);
  // State to hold the necessary distance for the animation
  const [distance, setDistance] = useState(0);

  // 1. Calculate the total scroll width of ONE set of items
  useEffect(() => {
    if (innerRef.current) {
      // The scrollWidth gives the total width needed for all items in the ref
      // Note: We use the ref on the inner content container to measure the width
      setDistance(innerRef.current.scrollWidth / 2); // Divide by 2 because we duplicated the list
    }
  }, [certifications.length]);

  if (certifications.length === 0) {
    return (
      <section className="px-8">
        <h2 className=" font-bold mb-4 text-foreground">Certifications</h2>
        <p className="text-center text-muted-foreground text-xs">
          No certifications found. Please check data import path.
        </p>
      </section>
    );
  }

  // 2. Create the list twice for seamless looping
  const carouselItems = [...certifications, ...certifications];

  // 3. Set the duration based on the number of items for consistent speed
  const animationDuration = certifications.length * 4; // Adjust the multiplier (4) for desired speed

  // 4. Define the animation properties
  const marqueeAnimation = {
    // We animate from 0 (start) to a negative value equal to the width of one list (distance)
    x: ["0%", `-${distance}px`],
    transition: {
      x: {
        duration: animationDuration,
        ease: "linear", // Use linear for smooth, constant speed
        repeat: Infinity, // The key to endless looping
        repeatType: "loop",
      },
    },
  };

  return (
    <section className="px-8">
      <h2 className=" font-bold mb-4 text-foreground">Certifications</h2>

      {/* Outer container: Sets the viewport and hides overflow */}
      <motion.div className="carousel overflow-hidden w-full">
        {/* Inner Container: Holds the duplicated cards and is animated */}
        <motion.div
          // 5. Apply the calculated animation to the inner container
          animate={marqueeAnimation}
          // The initial value of the ref is critical for calculating the scrollWidth correctly
          ref={innerRef}
          className="flex space-x-4 pb-2 w-max" // w-max ensures the flex container is wide enough
        >
          {carouselItems.map((cert, index) => {
            const isExpired = cert.status === "Expired";
            // Assign a unique key for React, even for duplicated items
            const key = `${cert.id}-${index}`;

            return (
              <CertificationCard key={key} cert={cert} isExpired={isExpired} />
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certifications;
