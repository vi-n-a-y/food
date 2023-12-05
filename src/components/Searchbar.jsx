const Searchbar=()=>{
    return (
        <>
        <div className="search">
         <input  className="search_bar" type="text" placeholder="search"/>
         <button>search</button>
         </div>
         <ul className="menu">
            <li><a className="menu1" href="#">home</a></li>
            <li><a className="menu1"  href="#">cart</a></li>
            <li><a className="menu1"  href="#">price</a></li>
            <li><a className="menu1" href="#">about us</a></li>
         </ul>
        </>
    )
}
export default Searchbar;