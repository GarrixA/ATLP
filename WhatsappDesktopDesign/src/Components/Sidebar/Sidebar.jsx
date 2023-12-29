import Sides from "./Sides/Sides"
import TopSidebar from "./Top/TopSidebar"

const Sidebar = () => {
  return (
    <div className='sidebar flex-1 bg-green-200 h-screen'>
      <TopSidebar/>
      <Sides/>
    </div>
  )
}

export default Sidebar
