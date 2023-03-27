import { Outlet } from "react-router-dom"
import NavigateBar from "@/common/NavigateBar"
import Footer from "@/common/Footer"
import './dashboard.less'



const DashBoard = () => {
  return (
    <div className="main-container">
      <NavigateBar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default DashBoard