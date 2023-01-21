import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { List, ListItemText } from "@mui/material";
import { Product, ProductCart } from "../models/products";
import { removeProduct, setToCart } from "../redux/slices/carrito";

export const Home = () => {
  const { carrito } = useAppSelector((state) => state);
  const dispatcher = useAppDispatch();
  const productos: Product[] = useFetchProducts();

  const addToCart = (producto: Product) => {
    dispatcher(setToCart(producto));
  };

  const deleteFromCart = (product: Product) =>{
    dispatcher(removeProduct(product));
  }

  return (
    <>
      {!productos ? (
        <h2>Cargando</h2>
      ) : (
        <>
          <div className="col-12">
            <List>
              {productos.map((x) => {
                return (
                  <div className="row" key={x.id}>
                    <ListItemText
                      primary={`${x.id} - ${x.title}`}
                      className=""
                    />
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        addToCart(x);
                      }}
                    >
                      +
                    </button>
                  </div>
                );
              })}
            </List>
          </div>
          <div className="col-12">
            {carrito.carroItem.map((x: ProductCart, i: number) => {
              return (
                <li key={i}>
                  <span className="badge badge-primary">
                    {x.product.title} - {x.cantidad} <button className='btn btn-danger'
                    onClick={()=>{
                      deleteFromCart(x.product);
                    }}
                    >X</button>
                  </span>
                </li>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
