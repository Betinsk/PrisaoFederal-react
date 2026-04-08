import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import AdminFooter from "./AdminFooter";
import "./admin.css";

export default function AdminLayout() {
  return (
    <div style={{ display: "flex", height: "calc(100vh - 117px)", overflow: "hidden" }}>
      <AdminSidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, overflow: "hidden" }}>
        <AdminTopbar />

        <main style={{ flex: 1, overflowY: "auto", background: "var(--content-bg)" }}>
          <div style={{ padding: "28px 32px" }}>
            <Outlet />
          </div>
          <AdminFooter />
        </main>
      </div>
    </div>
  );
}