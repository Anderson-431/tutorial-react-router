import './styles.css';
import { getInvoices } from "../../data";
import { NavLink, Outlet } from "react-router-dom";

export default function Invoices() {
  const invoices = getInvoices();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <NavLink
          className={({ isActive }) => isActive ? "deblock nav-red" : "deblock nav-blue"}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
