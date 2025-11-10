import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Link as LinkIcon, Cpu, Nfc } from "lucide-react";
import { toast } from "sonner";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    modelSerial: "",
    manufactureDate: "",
    description: "",
  });
  const [ipfsCid, setIpfsCid] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [isWritingNfc, setIsWritingNfc] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const uploadToIpfs = async () => {
    if (!formData.productName || !formData.modelSerial) {
      toast.error("Please fill in required fields");
      return;
    }

    setIsUploading(true);
    try {
      // Simulate IPFS upload
      await new Promise(resolve => setTimeout(resolve, 2000));
      const mockCid = "Qm" + Math.random().toString(36).substring(2, 15);
      setIpfsCid(mockCid);
      toast.success("Uploaded to IPFS successfully!");
    } catch (error) {
      toast.error("Failed to upload to IPFS");
    } finally {
      setIsUploading(false);
    }
  };

  const registerOnBlockchain = async () => {
    if (!ipfsCid) {
      toast.error("Please upload to IPFS first");
      return;
    }

    setIsMinting(true);
    try {
      // Simulate blockchain minting
      await new Promise(resolve => setTimeout(resolve, 2000));
      const mockTokenId = Math.floor(Math.random() * 10000).toString();
      setTokenId(mockTokenId);
      toast.success("Product registered on blockchain!");
    } catch (error) {
      toast.error("Failed to register on blockchain");
    } finally {
      setIsMinting(false);
    }
  };

  const writeToNfc = async () => {
    if (!tokenId || !ipfsCid) {
      toast.error("Please complete IPFS upload and blockchain registration first");
      return;
    }

    setIsWritingNfc(true);
    try {
      // Check for Web NFC API support
      if ("NDEFReader" in window) {
        const nfcData = {
          tokenId,
          cid: ipfsCid,
          verifyUrl: `https://originapp.io/verify?tokenId=${tokenId}`,
        };

        // Simulate NFC writing
        await new Promise(resolve => setTimeout(resolve, 2000));
        toast.success("✅ NFC tag written successfully!");
      } else {
        toast.error("Web NFC not supported on this browser");
      }
    } catch (error) {
      toast.error("Failed to write NFC tag");
    } finally {
      setIsWritingNfc(false);
    }
  };

  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      
      <div className="flex-1">
        <Navbar />
        
        <main className="p-6 animate-fade-in">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Add Product</h1>
            <p className="text-muted-foreground">
              Register a new product on the blockchain
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Product Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle>Product Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="productName">Product Name *</Label>
                    <Input
                      id="productName"
                      name="productName"
                      placeholder="e.g. SmartWatch X1"
                      value={formData.productName}
                      onChange={handleInputChange}
                      className="bg-muted/20 border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="modelSerial">Model / Serial Number *</Label>
                    <Input
                      id="modelSerial"
                      name="modelSerial"
                      placeholder="e.g. SN00123"
                      value={formData.modelSerial}
                      onChange={handleInputChange}
                      className="bg-muted/20 border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="manufactureDate">Manufacture Date</Label>
                    <Input
                      id="manufactureDate"
                      name="manufactureDate"
                      type="date"
                      value={formData.manufactureDate}
                      onChange={handleInputChange}
                      className="bg-muted/20 border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Product description..."
                      rows={4}
                      value={formData.description}
                      onChange={handleInputChange}
                      className="bg-muted/20 border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="certificate">Certificate (Optional)</Label>
                    <div className="border-2 border-dashed border-border/50 rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, PNG, or JPG (max 10MB)
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image">Product Image (Optional)</Label>
                    <div className="border-2 border-dashed border-border/50 rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload product image
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Actions */}
            <div className="space-y-6">
              {/* IPFS Upload */}
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">1. IPFS Upload</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={uploadToIpfs}
                    disabled={isUploading}
                    className="w-full gradient-button"
                  >
                    <LinkIcon className="w-4 h-4 mr-2" />
                    {isUploading ? "Uploading..." : "Upload to IPFS"}
                  </Button>
                  {ipfsCid && (
                    <div className="mt-4 p-3 bg-muted/20 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">CID:</p>
                      <p className="text-xs font-mono break-all">{ipfsCid}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Blockchain Registration */}
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">2. Blockchain</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={registerOnBlockchain}
                    disabled={!ipfsCid || isMinting}
                    className="w-full gradient-button"
                  >
                    <Cpu className="w-4 h-4 mr-2" />
                    {isMinting ? "Minting..." : "Register on Chain"}
                  </Button>
                  {tokenId && (
                    <div className="mt-4 p-3 bg-muted/20 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Token ID:</p>
                      <p className="text-xs font-mono">{tokenId}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* NFC Writing */}
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">3. Write NFC</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={writeToNfc}
                    disabled={!tokenId || isWritingNfc}
                    className="w-full gradient-button"
                  >
                    <Nfc className="w-4 h-4 mr-2" />
                    {isWritingNfc ? "Writing..." : "Write to NFC Chip"}
                  </Button>
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    Tap your NFC chip when prompted
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddProduct;
