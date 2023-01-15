import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <>
      <nav>
        <div className='nav-center'>
          <h3>redux toolkit</h3>
          <div className='nav-container'>
            <CartIcon />
            <div className='amount-container'>
              <p className='total-amount'>{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

  

// useSelector will allow us access to all the state Stored in
// store. we can use them all or destructure what's needed.

// to access data from our slice we pick a component use useSelector
// pass in the function ans as a parameter the function gets the entire
// store and then we pick what we want to return. in this care we are
// returning cart (see cartSlice for state cart holds)
