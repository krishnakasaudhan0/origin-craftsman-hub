import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Nfc, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in real app, fetch based on id
  const product = {
    name: "SmartWatch X1",
    serial: "SN00123",
    manufactureDate: "2024-01-15",
    description: "Premium smartwatch with advanced health tracking features",
    cid: "QmXxample123456789",
    tokenId: "1001",
    nfcWritten: true,
    mintTimestamp: "2024-01-20 14:30:00",
  };

  const handleRewriteNfc = () => {
    toast.success("NFC rewrite initiated");
  };

  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      
      <div className="flex-1">
        <Navbar />
        
        <main className="p-6 animate-fade-in">
          <Button
            variant="ghost"
            onClick={() => navigate("/products")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>

          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-muted-foreground">Serial: {product.serial}</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-400/10 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Authenticated</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Product Info */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle>Product Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Product Name</p>
                      <p className="font-medium">{product.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Serial Number</p>
                      <p className="font-medium">{product.serial}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Manufacture Date</p>
                      <p className="font-medium">{product.manufactureDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Token ID</p>
                      <p className="font-medium">#{product.tokenId}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Description</p>
                    <p className="text-sm">{product.description}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle>Blockchain Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">IPFS CID</p>
                    <div className="flex items-center gap-2">
                      <p className="font-mono text-sm flex-1 bg-muted/20 p-2 rounded">
                        {product.cid}
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(`https://ipfs.io/ipfs/${product.cid}`, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Token ID</p>
                    <div className="flex items-center gap-2">
                      <p className="font-mono text-sm flex-1 bg-muted/20 p-2 rounded">
                        {product.tokenId}
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(`https://polygonscan.com/token/${product.tokenId}`, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Mint Timestamp</p>
                    <p className="text-sm">{product.mintTimestamp}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Actions */}
            <div className="space-y-6">
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle>NFC Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-4 p-3 bg-cyan-400/10 rounded-lg">
                    <Nfc className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-sm font-medium">NFC Tag Written</p>
                      <p className="text-xs text-muted-foreground">Tag is active</p>
                    </div>
                  </div>
                  <Button
                    onClick={handleRewriteNfc}
                    variant="outline"
                    className="w-full"
                  >
                    <Nfc className="w-4 h-4 mr-2" />
                    Rewrite NFC Tag
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle>Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-sm">On-chain registered</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-sm">IPFS metadata stored</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-sm">NFC tag linked</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductDetails;
