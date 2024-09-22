import React from 'react'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck,BsFillMenuButtonWideFill,BsFillGearFill} from 'react-icons/bs'

function Sidebare({open,openSideBare}) {
  return (
    <aside id='P' className={open ? "sidebar-responsive" : ""}>
        <div className="sidebar-title">
            <div className="sidebar-brand">
                <BsCart3 className='icon' /> SHOP
                </div>
                <span className='icon close_icon' onClick={openSideBare}>x</span>
        </div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
            <a href=""></a>
            <BsGrid1X2Fill className='icon' /> Dashbord
            </li>
            <li className='sidebar-list-item'>
            <a href=""></a>
            <BsFillArchiveFill className='icon' /> Prodact
            </li>
            <li className='sidebar-list-item'>
            <a href=""></a>
            <BsFillGrid3X3GapFill className='icon' /> Categries
            </li>
            <li className='sidebar-list-item'>
            <a href=""></a>
            <BsPeopleFill className='icon' /> Customers
            </li>
            <li className='sidebar-list-item'>
            <a href=""></a>
            <BsListCheck className='icon' /> Invintory
            </li>
            <li className='sidebar-list-item'>
            <a href=""></a>
            <BsFillMenuButtonWideFill className='icon' /> Reports
            </li>
            <li className='sidebar-list-item'>
            <a href=""></a>
            <BsFillGearFill className='icon' /> Setting
            </li>
        </ul>
    </aside>
  )
}

export default Sidebare