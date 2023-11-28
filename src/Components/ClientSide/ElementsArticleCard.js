import { useShoppingCart} from 'use-shopping-cart';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link}  from 'react-router-dom';

const ElementsArticleCard= (props)=> {

  const { cartCount,addItem } = useShoppingCart();
 
  const addToCart = (diamonds) => {
      
    const target = { 
    id : diamonds.id,
    name : diamonds.name,
    image : diamonds.image,
    color : diamonds.color,
    clarity : diamonds.clarity,
   
    };
    addItem(target);
    console.log('Item added to cart:', target);
   
  };

         return ( 
          <>
          <AppBar position="static" color='default'>
                <Toolbar>
                    <Button color="inherit"><Link to="/cart">{cartCount}<ShoppingCartIcon fontSize="large" /></Link></Button>
                </Toolbar>
  </AppBar>
  <div className="row">
            {props.articles && props.articles.map((diamonds) => (
              
              <article className="col-sm-3" key={diamonds.id}>
  <div className="card">
    <img
      src={diamonds.image}
      className="card-img-top p-5"
      alt={diamonds.name}
    />
  </div>
  <div className="text-center">
 <div>{diamonds.name.substr(0,20)} ... </div>
 <div>calar : {diamonds.calar}  </div>
 </div>
  <div className="text-center">
  <button
  disabled={diamonds.calar<= 1}
  className="btn btn-warning"
  onClick={() => addToCart(diamonds)}>
  Add to Cart
</button>

  </div>
</article>
             
            ))}
          </div>
          </>
     
       );
}

export default ElementsArticleCard;



