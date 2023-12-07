const Content=()=>{
    return (
        <>
       <div className="container_img">
        <div className="box1">
            <img className='box_img' src={require('./images/chicken.jpg')} alt="box1" />
            <h2>Chicken Biriyani</h2>
            <h4>Alpha</h4>
            <p>Allipuram</p>

        </div>
        <div className="box1">
            <img className='box_img' src={require('./images/dum.jpeg')} alt="box1" />
            <h2>Dum Biriyani</h2>
            <h4>Hotel Ramchandra</h4>
            <p>Dwaraka Nagar</p>
        </div>
        <div className="box1">
            <img className='box_img'  src={require('./images/fish.jpeg')} alt="box1" />
            <h2>Fish Biriyani</h2>
            <h4>Alif</h4>
            <p>Gajuwaka</p>
        </div>
        <div className="box1">
            <img className='box_img'  src={require('./images/frans.jpeg')} alt="box1" />
            <h2>Frans Biriyani</h2>
            <h4>Helapuri</h4>
            <p>Nad</p>
        </div>
        <div className="box1">
            <img className='box_img'  src={require('./images/fries.jpeg')} alt="box1" />
            <h2>Fried Rice</h2>
            <h4>Hotel Amaravathi</h4>
            <p>Kurmannapalem</p>
        </div>
        <div className="box1">
            <img className='box_img'  src={require('./images/mutton.jpeg')} alt="box1" />
            <h2>Mutton Biriyani</h2>
            <h4>Paradise</h4>
            <p>Old Gajuwaka</p>
        </div>
        
       </div>
       <div className='show'>
       <button className="showMore">Show More</button>
       </div>
      </>
    )
}
export default Content;