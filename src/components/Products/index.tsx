import { CartProductType } from "../../types/CartProductType";
import { useProducts } from "../../contexts";
import { CartProduct } from "../../components/CartProduct";
import Product from "../../components/Product";

export type ProductsProps = {
	cartProducts: CartProductType[];
	addToCart: (product: CartProductType) => void;
	removeFromCart: (id: number) => void;
};

export const Products = ({
	cartProducts,
	addToCart,
	removeFromCart,
}: ProductsProps) => {
	//ESTADOS GLOBAIS
  const { products } = useProducts();
  
	return (
		<div>
			{products?.map((product) => (
				<Product
					key={product.id}
					cartProducts={cartProducts}
					product={product}
					addToCart={addToCart}
					removeFromCart={removeFromCart}
				/>
			))}
		</div>
	);
};
