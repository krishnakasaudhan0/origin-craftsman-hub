import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, CheckCircle, Nfc, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  serial: string;
  cid?: string;
  tokenId?: string;
  nfcWritten: boolean;
}

const ProductCard = ({ id, name, serial, cid, tokenId, nfcWritten }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="glass-card border-border/50 hover:border-primary/30 transition-all">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-sm text-muted-foreground">{serial}</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Blockchain</span>
            {tokenId ? (
              <span className="flex items-center gap-1 text-green-400">
                <CheckCircle className="w-4 h-4" />
                Minted
              </span>
            ) : (
              <span className="text-muted-foreground">Pending</span>
            )}
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">NFC Status</span>
            {nfcWritten ? (
              <span className="flex items-center gap-1 text-cyan-400">
                <Nfc className="w-4 h-4" />
                Written
              </span>
            ) : (
              <span className="text-muted-foreground">Not written</span>
            )}
          </div>

          {cid && (
            <div className="text-xs">
              <span className="text-muted-foreground">CID: </span>
              <span className="font-mono">{cid.slice(0, 12)}...</span>
            </div>
          )}
        </div>

        <Button
          onClick={() => navigate(`/product/${id}`)}
          variant="outline"
          className="w-full"
        >
          <Eye className="w-4 h-4 mr-2" />
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
