import React from 'react'
import SidebarRow from './SidebarRow'
import PeopleIcon from '@mui/icons-material/People';
import StorefrontIcon from '@mui/icons-material/Storefront';
import RestoreIcon from '@mui/icons-material/Restore';
import FlagIcon from '@mui/icons-material/Flag';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import './Sidebar.css'
function Sidebar() {
    return (
        <div className="Sidebar">
            <SidebarRow 
                src="https://joeschmoe.io/api/v1/random"
                title="My Name"
            />
            <SidebarRow 
                Icon={PeopleIcon}
                title="Nhóm"
            />

            <SidebarRow 
                Icon={StorefrontIcon}
                title="Cửa hàng"
            />

            <SidebarRow 
                Icon={RestoreIcon}
                title="Kỷ niệm"
            />

            <SidebarRow 
                Icon={FlagIcon}
                title="Trang"
            />

            <SidebarRow 
                Icon={ArrowDropDownCircleIcon}
                title="Thêm"
            />
        </div>
    )
}

export default Sidebar
