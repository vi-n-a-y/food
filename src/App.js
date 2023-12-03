import Navbar from "./components/Navbar"
import Searchbar from "./components/Searchbar"
import UserIcon from "./components/UserIcon"

const App=()=>{
  return (
    <div className="container_main">
      <Navbar/>
      <Searchbar/>
      <UserIcon/>
      
    </div>
  )
}
export default App