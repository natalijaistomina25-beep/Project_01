import type { FC } from "react";
import type Product from "../../types/Product";
import { Link } from "react-router-dom";
import { ROUTES } from "../../shared/routes";

export const ProductCard: FC<Product> = (product) => {
  return (
    <div>
      <h3>
        <Link to={ROUTES.PRODUCT(product.id)}>{product.title}</Link>
      </h3>
      <img src={product.images[0]} alt={product.title} />
      <p>{product.price}</p>
      <p>{product.images?.[0]}</p>
    </div>
  );
};
// import { Link } from "react-router-dom";
// // import { Product } from "../../types/Product";
// import styles from "./ProductCard.module.css";
// import type Product from "../../types/Product";
// // import type Product from "../../types/Product";

// type Props = {
//   product: Product;
// };

// export default function ProductCard({ product }: Props) {
//   const image =
//     product.images && product.images.length > 0 && product.images[0]
//       ? product.images[0]
//       : "https://via.placeholder.com/200x200?text=No+Image";

//   return (
//     <div className={styles.card}>
//       <img
//         src={image}
//         alt={product.title}
//         className={styles.image}
//         onError={(e) => {
//           e.currentTarget.src =
//             "https://via.placeholder.com/200x200?text=No+Image";
//         }}
//       />

//       <h3 className={styles.title}>{product.title}</h3>

//       <p className={styles.price}>{product.price} €</p>

//       <Link to={`/products/${product.id}`} className={styles.link}>
//         View details
//       </Link>
//     </div>
//   );
// }