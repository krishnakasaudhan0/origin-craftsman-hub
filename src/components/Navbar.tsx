import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import { toast } from "sonner";

const Navbar = () => {
  const navigate = useNavigate();
  const walletAddress = localStorage.getItem("walletAddress");

  const handleLogout = () => {
    localStorage.removeItem("walletAddress");
    toast.success("Disconnected successfully");
    navigate("/");
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <nav className="h-16 border-b border-border/50 bg-background/50 backdrop-blur-xl flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold">Manufacturer Portal</h2>
      </div>

      <div className="flex items-center gap-4">
        {walletAddress && (
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/30">
            <User className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">
              {formatAddress(walletAddress)}
            </span>
          </div>
        )}
        
        <Button
          variant="ghost"
          size="icon"
          onClick={handleLogout}
          className="hover:bg-destructive/10 hover:text-destructive"
        >
          <LogOut className="w-5 h-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
