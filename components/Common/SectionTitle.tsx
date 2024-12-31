const SectionTitle = ({
  title,
  paragraph,
  width = "931px",
  center,
  mb = "100px",
  description,
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  description?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <div
          className={`${
            paragraph && "mb-4"
          } text-base font-semibold text-primaryText`}
        >
          {title}
        </div>

        {paragraph && (
          <div className="lg-text-[30px] text-[20px] font-semibold text-primaryText md:text-[30px]">
            {paragraph}
          </div>
        )}

        {description && (
          <div className="mt-6 text-base font-semibold text-primaryText">
            {description}
          </div>
        )}
      </div>
    </>
  );
};

export default SectionTitle;
