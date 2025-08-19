import { useState } from "react";
import { X, Plus, Minus } from "lucide-react";
import "./styles.scss";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({
  product,
  isOpen,
  onClose,
}: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleQuantityChange = (action: "increase" | "decrease") => {
    if (action === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        {/* Close button */}
        <button className="modal-close" onClick={onClose}>
          <X size={16} />
        </button>

        <div className="modal-body">
          {/* Product image */}
          <div className="modal-image">
            <img src={product.photo} alt={product.productName} />
          </div>

          {/* Product details */}
          <div className="modal-details">
            <h2 className="modal-title">{product.productName}</h2>
            <p className="modal-price">
              R${" "}
              {product.price.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </p>

            <div className="modal-description">
              <p>{product.descriptionShort}</p>
              <a href="#" className="modal-link">
                Veja mais detalhes do produto &gt;
              </a>
            </div>

            {/* Quantity selector and buy button */}
            <div className="modal-actions">
              <div className="quantity-selector">
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange("decrease")}
                  disabled={quantity <= 1}
                >
                  <Minus size={14} />
                </button>
                <span className="quantity-display">
                  {quantity.toString().padStart(2, "0")}
                </span>
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange("increase")}
                >
                  <Plus size={14} />
                </button>
              </div>

              <button className="modal-buy-btn">COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
