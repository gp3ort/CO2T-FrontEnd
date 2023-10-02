import Footer from "../components/Footer";
import NavbarMain from "../components/NavbarMain";
import { Outlet } from "react-router-dom";
function LayoutMain() {
  return (
    <div>
      <NavbarMain />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutMain;