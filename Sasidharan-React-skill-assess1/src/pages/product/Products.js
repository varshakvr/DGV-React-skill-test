import React, { useEffect } from 'react';
import ProductItem from "./ProductItem";
import styles from "./Product.module.css";
function Products() {
    const [type,setType] = React.useState("All");
  const [datas,setData] = React.useState([]);
  const [search,setSearch] = React.useState("");
  const [searchData,setSearchData] = React.useState([]);
    useEffect( () => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))
    },[])

useEffect(() => {
    setSearchData(datas.filter(product => {
        if (type === "All") {
            return true;
        } else {
            return product.category === type;
        }
    }));
}, [type, datas]);

    
      useEffect(() => {
        setSearchData(datas.filter(item => item.title.toLowerCase().startsWith(search.toLowerCase())));
      }, [search]);
  return (
    <div className={styles.menus}>
      <div className={styles.btnGroup}>
        <button value='All' onClick={(e) => setType(e.target.value)} className={styles.catbtn}>All</button>
        <button value="men's clothing" onClick={(e) => setType(e.target.value)} className={styles.catbtn}>Men's Clothing</button>
        <button value="women's clothing" onClick={(e) => setType(e.target.value)} className={styles.catbtn}>Women's Clothing</button>
        <button value='jewelery' onClick={(e) => setType(e.target.value)} className={styles.catbtn}>Jewelery</button>
        <button value='electronics' onClick={(e) => setType(e.target.value)} className={styles.catbtn}>Electronics</button>
      </div>
      <div className={styles.searchbox}>
        <input type='text'  value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Products' />
      </div>
      <div className={styles.cardGroup}>
        <ProductItem products={searchData} />
      </div>
    </div>
  )
}
export default Products