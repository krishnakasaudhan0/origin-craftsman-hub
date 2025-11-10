import { Package, CheckCircle, Nfc } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Products",
      value: "0",
      icon: Package,
      color: "text-primary",
    },
    {
      title: "Minted on Chain",
      value: "0",
      icon: CheckCircle,
      color: "text-green-400",
    },
    {
      title: "NFC Written",
      value: "0",
      icon: Nfc,
      color: "text-cyan-400",
    },
  ];

  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      
      <div className="flex-1">
        <Navbar />
        
        <main className="p-6 animate-fade-in">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Overview of your product authentication system
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card border-border/50">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle>Connected Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Address</span>
                    <span className="text-sm font-mono">
                      {localStorage.getItem("walletAddress")?.slice(0, 10)}...
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Network</span>
                    <span className="text-sm">Polygon</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Status</span>
                    <span className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      Connected
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle>IPFS Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Provider</span>
                    <span className="text-sm">NFT.Storage</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Uploads</span>
                    <span className="text-sm">0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Status</span>
                    <span className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      Ready
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Getting Started */}
          <Card className="glass-card border-border/50 mt-6">
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                <li>Add your first product with complete details</li>
                <li>Upload product metadata to IPFS</li>
                <li>Register the product on Polygon blockchain</li>
                <li>Write the product data to an NFC chip</li>
                <li>Verify the product authenticity</li>
              </ol>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
