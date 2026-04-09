import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import AdminFooter from "./AdminFooter";
import "./admin.css";

export default function AdminLayout() {
  return (
    <div style={{ padding: "10px 20px 0px 0px" }}>
      <div style={{
        display: "flex",
        height: "calc(100vh - 52px)",
        overflow: "hidden",
        borderRadius: 10,
        border: "0.5px solid #c8cdd8",
        boxShadow: "0 4px 24px rgba(13,43,85,0.10)",
      }}>
        <AdminSidebar />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, overflow: "hidden" }}>
          <AdminTopbar />

          <main style={{ flex: 1, overflowY: "auto", background: "var(--content-bg)", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "28px 32px", flex: 1 }}>
              <Outlet />
            </div>
            <AdminFooter />
          </main>
        </div>
      </div>
    </div>
  );
}