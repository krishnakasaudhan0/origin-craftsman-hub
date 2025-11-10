import { NavLink } from "react-router-dom";
import { LayoutDashboard, Package, Plus, Settings, Shield } from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/add-product", icon: Plus, label: "Add Product" },
    { to: "/products", icon: Package, label: "Products" },
    { to: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="w-64 min-h-screen border-r border-border/50 bg-sidebar p-4">
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-6 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Shield className="w-6 h-6 text-primary" />
        </div>
        <span className="text-xl font-bold">Origin</span>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
