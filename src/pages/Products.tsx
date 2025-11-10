import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  // Mock data - in real app, this would come from state/backend
  const products = [
    {
      id: "1",
      name: "SmartWatch X1",
      serial: "SN00123",
      cid: "QmXxample123456",
      tokenId: "1001",
      nfcWritten: true,
    },
    {
      id: "2",
      name: "Wireless Earbuds Pro",
      serial: "SN00124",
      cid: "QmYxample789012",
      tokenId: "1002",
      nfcWritten: false,
    },
  ];

  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      
      <div className="flex-1">
        <Navbar />
        
        <main className="p-6 animate-fade-in">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Products</h1>
              <p className="text-muted-foreground">
                Manage your registered products
              </p>
            </div>
            <Button onClick={() => navigate("/add-product")} className="gradient-button">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </div>

          {products.length === 0 ? (
            <div className="glass-card border-border/50 p-12 text-center">
              <p className="text-muted-foreground mb-4">No products yet</p>
              <Button onClick={() => navigate("/add-product")} className="gradient-button">
                <Plus className="w-4 h-4 mr-2" />
                Add Your First Product
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
