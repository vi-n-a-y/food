import Navbar from "./components/Navbar"
import Searchbar from "./components/Searchbar"
import UserIcon from "./components/UserIcon"
import Content from "./components/Content"
{/* <link rel="stylesheet" href="/index.css"/> */}

const App=()=>{
  return (
    <div className="main_container">
    <div className="container_main">
      <Navbar/>
      <Searchbar/>
      <UserIcon/>
      </div>
      <div className="content">
      <Content/>
      </div>     
      </div>
    
  )
}
export default App