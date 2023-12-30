import Sides from "./Sides/Sides"
import TopSidebar from "./Top/TopSidebar"

const Sidebar = () => {
  return (
    <div className='sidebar flex-1 bg-white h-screen fixed w-[35%]'>
      <TopSidebar/>
      <Sides/>
    </div>
  )
}

export default Sidebar
