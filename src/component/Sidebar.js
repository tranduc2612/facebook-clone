import React,{useContext} from 'react'
import SidebarRow from './SidebarRow'
import PeopleIcon from '@mui/icons-material/People';
import StorefrontIcon from '@mui/icons-material/Storefront';
import RestoreIcon from '@mui/icons-material/Restore';
import FlagIcon from '@mui/icons-material/Flag';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { StoreContext } from './Store';
import './Sidebar.css'

function Sidebar() {
    const [{user},dispatch] = useContext(StoreContext)
    return (
        <div className="Sidebar">
            <SidebarRow 
                src={user.photoURL}
                title={user.displayName}
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
