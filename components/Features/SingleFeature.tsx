import { ArrowRightRedIcon } from "@/public/icons";
import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex items-center justify-center text-primary">
          {icon}
        </div>
        {title && (
          <span className="mb-5 flex items-center justify-center text-base font-semibold text-primaryText">
            {title}
          </span>
        )}
        <p className="mb-8 text-sm font-medium leading-relaxed text-primaryTextBody">
          {paragraph}
        </p>
        <div className="flex w-full items-center justify-center">
          <span className="mr-2 font-medium text-primaryRed">Learn more</span>
          <ArrowRightRedIcon />
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
