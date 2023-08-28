import Projectheader from'./Projectheader';
import Projectnavigationbar from'./Projectnavigationbar';
import Projectproductdetails from'./Projectproductdetails';
import Projectfooter  from'./projectfooter';
import CartPage from './Cartpage';
import Checkout from './Checkout';

 function App() {
  return (
    <div>
        <Projectheader/>
        <Projectnavigationbar/>
        <Projectproductdetails/>
       <Checkout/>
        <CartPage/>
        <Projectfooter/>

    </div>
  )
}
export default App;
