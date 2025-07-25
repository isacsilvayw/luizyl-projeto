import styles from "./Header.module.css";
import { ShoppingBasket } from "lucide-react";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../service/CartContext";

export function Header() {
  const { cart } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
        {/* ícone/esquerda */}
      </div>
      <Link to="/" className={styles.link}>
        <h1>TJA Megastore</h1>
      </Link>
      <div className={styles.cartInfo}>
        <Link to="/cart" className={styles.link}>
          {/* ícone da loja/direita */}
          <ShoppingBasket size={32} />
          <p>
            Total: ${" "}
            {cart
              .reduce(
                (total, product) => total + product.price * product.quantity,
                0
              )
              .toFixed(2)}
          </p>
        </Link>
      </div>
    </div>
  );
}
