import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet, Shield } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const navigate = useNavigate();

  const connectWallet = async () => {
    setIsConnecting(true);
    
    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({ 
          method: "eth_requestAccounts" 
        });
        
        if (accounts.length > 0) {
          localStorage.setItem("walletAddress", accounts[0]);
          toast.success("Wallet connected successfully!");
          setTimeout(() => navigate("/dashboard"), 500);
        }
      } else {
        toast.error("Please install MetaMask to continue");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      toast.error("Failed to connect wallet");
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        {/* Logo & Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-2">Origin</h1>
          <p className="text-muted-foreground">Manufacturer Dashboard</p>
        </div>

        {/* Login Card */}
        <div className="glass-card p-8">
          <h2 className="text-2xl font-semibold mb-2">Welcome Back</h2>
          <p className="text-muted-foreground mb-6">
            Connect your wallet to access the manufacturer dashboard
          </p>

          <Button
            onClick={connectWallet}
            disabled={isConnecting}
            className="w-full gradient-button h-12"
          >
            <Wallet className="w-5 h-5 mr-2" />
            {isConnecting ? "Connecting..." : "Connect Wallet"}
          </Button>

          <div className="mt-6 p-4 bg-muted/20 rounded-xl">
            <p className="text-sm text-muted-foreground">
              🔐 Secure authentication via MetaMask
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Blockchain Product Authentication Platform
        </p>
      </div>
    </div>
  );
};

export default Login;
