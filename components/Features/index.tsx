import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="bg-white py-8 md:py-12">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-4 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-14">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} withEllipsis />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
