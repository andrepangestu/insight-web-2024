import React from "react";

interface PricingCardProps {
  title: string;
  investmentFee: string;
  schedules: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  investmentFee,
  schedules,
}) => {
  return (
    <div
      className="wow fadeInUp relative z-10 rounded-md bg-white px-8 py-10 text-center shadow-signUp"
      data-wow-delay=".1s"
    >
      <span className="mb-8 block text-lg font-semibold text-primaryRed">
        {title}
      </span>

      <span className="mb-4 block text-sm font-semibold text-primaryTextBlue">
        Investment Fee
      </span>

      <span className="text-primaryBody mb-6 block text-[26px] font-semibold">
        {investmentFee}
      </span>

      <span className="mb-4 block text-sm font-semibold text-primaryTextBlue">
        Schedules
      </span>

      <div>
        {schedules.map((schedule, index) => (
          <div
            key={index}
            className={`p-4 ${index % 2 === 0 ? "bg-aliceBlue" : "bg-lotion"}`}
          >
            <span className="text-sm font-medium text-primaryTextBody">
              {schedule}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
