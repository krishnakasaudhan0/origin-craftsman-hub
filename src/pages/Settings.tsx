import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Key, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Settings = () => {
  const navigate = useNavigate();
  const walletAddress = localStorage.getItem("walletAddress");

  const handleDisconnect = () => {
    localStorage.removeItem("walletAddress");
    toast.success("Wallet disconnected");
    navigate("/");
  };

  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      
      <div className="flex-1">
        <Navbar />
        
        <main className="p-6 animate-fade-in">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground">
              Manage your account and preferences
            </p>
          </div>

          <div className="max-w-2xl space-y-6">
            {/* Profile */}
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Manufacturer Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Wallet Address</Label>
                  <Input
                    value={walletAddress || ""}
                    readOnly
                    className="bg-muted/20 border-border/50 font-mono text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Network</Label>
                  <Input
                    value="Polygon Mainnet"
                    readOnly
                    className="bg-muted/20 border-border/50"
                  />
                </div>
                <Button
                  variant="destructive"
                  onClick={handleDisconnect}
                  className="w-full"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Disconnect Wallet
                </Button>
              </CardContent>
            </Card>

            {/* IPFS Settings */}
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="w-5 h-5" />
                  IPFS Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>IPFS Provider</Label>
                  <Input
                    value="NFT.Storage"
                    readOnly
                    className="bg-muted/20 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label>API Key</Label>
                  <Input
                    type="password"
                    placeholder="Enter your NFT.Storage API key"
                    className="bg-muted/20 border-border/50"
                  />
                </div>
                <Button variant="outline" className="w-full">
                  Save IPFS Settings
                </Button>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle>Account Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Products</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Blockchain Transactions</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">IPFS Uploads</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">NFC Tags Written</span>
                    <span className="font-medium">1</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
