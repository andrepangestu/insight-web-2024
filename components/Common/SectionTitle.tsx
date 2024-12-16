const SectionTitle = ({
  title,
  paragraph,
  width = "931px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
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
          <div className="text-[30px] font-semibold text-primaryText">
            {paragraph}
          </div>
        )}
      </div>
    </>
  );
};

export default SectionTitle;
