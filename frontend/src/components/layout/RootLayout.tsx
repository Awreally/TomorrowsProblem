import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavMenu from "./NavMenu";

export default function RootLayout() {
  return (
    <main>
      <NavMenu />
      <Outlet />
      <Footer />
    </main>
  );
}
