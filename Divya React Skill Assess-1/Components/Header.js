import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >SHOPIFY < i class="fa-sharp fa-solid fa-bag-shopping"></i></div>
            <div>
            <nav className="nav-links">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            </nav>
            </div>
            <div onClick={() => props.handleShow(true)}> Cart<i class="fa-solid fa-cart-shopping"></i>
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;
