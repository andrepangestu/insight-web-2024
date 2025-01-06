// filepath: /Users/broom/MyData/Project/insight/components/NavigationFooter.tsx
import React from "react";
import Link from "next/link";
import { ArrowLeftRedIcon, ArrowRightRedIcon } from "@/public/icons";
// import ArrowLeftRedIcon from '@/icons/ArrowLeftRedIcon';
// import ArrowRightRedIcon from '@/icons/ArrowRightRedIcon';

interface NavigationFooterProps {
  previousLink: string;
  nextLink: string;
}

const NavigationFooter: React.FC<NavigationFooterProps> = ({
  previousLink,
  nextLink,
}) => {
  return (
    <div className="container mb-16">
      <hr className="my-8 w-full border-b border-lightSilver" />

      <div className="flex justify-center px-36">
        <Link href={previousLink}>
          <div className="mr-4 flex cursor-pointer items-center">
            <ArrowLeftRedIcon />
            <span className="ml-2 text-[16px] font-semibold text-primaryRed">
              Previous
            </span>
          </div>
        </Link>

        <Link href={nextLink}>
          <div className="ml-4 flex cursor-pointer items-center">
            <span className="mr-2 text-[16px] font-semibold text-primaryRed">
              Next
            </span>
            <ArrowRightRedIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavigationFooter;
