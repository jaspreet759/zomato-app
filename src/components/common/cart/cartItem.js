// import classes from './CartItem.module.css';
import './cartItem.css';
export const CartItem = (props) => {
    console.log('props==',props)
  // const price = `$${props.price.toFixed(2)}`;

  return (
    <li className = {'cart-item'} >
      <div >
        <h2>{props.name}</h2>
        <div className = {'summary'} >
          <span className = {'price'} >${props.price}</span>
          <span className = {'amount'}>x {props.amount}</span>
        </div>
      </div>
      <div className = {'actions'}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

// export default CartItem;