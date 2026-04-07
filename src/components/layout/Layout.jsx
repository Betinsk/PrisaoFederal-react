import { Outlet } from "react-router-dom";
import NavBar from "../nav/navBar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
