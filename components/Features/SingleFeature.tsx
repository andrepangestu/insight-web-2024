import { ArrowRightRedIcon } from "@/public/icons";
import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="wow fadeInUp" data-wow-delay=".15s">
      <div className="mb-8 flex items-center justify-center text-primary">
        {icon}
      </div>
      {title && (
        <span className="mb-5 flex items-center justify-center text-center text-base font-semibold text-primaryText">
          {title}
        </span>
      )}
      <p className="mb-8 text-center text-sm font-medium leading-relaxed text-primaryTextBody">
        {paragraph}
      </p>

      {feature?.link && (
        <Link href={feature?.link}>
          <button className="flex w-full items-center justify-center">
            <span className="mr-2 font-medium text-primaryRed">Learn more</span>
            <ArrowRightRedIcon />
          </button>
        </Link>
      )}
    </div>
  );
};

export default SingleFeature;
