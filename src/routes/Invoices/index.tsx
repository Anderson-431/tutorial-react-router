import './styles.css';
import { getInvoices } from "../../data";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

export default function Invoices() {

  const invoices = getInvoices();

  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        
          <input
          value={searchParams.get("name") || ""}
          onChange={(event) => {
            let name = event.target.value;
            if (name) {
              setSearchParams({ name });
            } else {
              setSearchParams({});
            }
          }}
        />


        
        {invoices
        .filter((invoice) => {
          let name = searchParams.get("name");
          if (!name) return true;
          let invoiceName = invoice.name.toLowerCase();
          return invoiceName.startsWith(name.toLowerCase());
        })
        
        .map((invoice) => (
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
