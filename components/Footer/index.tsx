import Clients from "../Clients";
import SolutionAndProduct from "../SolutionAndProduct";
import Copyright from "../Copyright";

const Footer = () => {
  return (
    <>
      <footer className="wow fadeInUp relative z-10" data-wow-delay=".1s">
        <Clients />
        <SolutionAndProduct />
        <Copyright />
      </footer>
    </>
  );
};

export default Footer;
