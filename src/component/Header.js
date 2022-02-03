import React,{useContext} from 'react'
import {SearchOutlined} from '@ant-design/icons'
import HomeIcon from '@mui/icons-material/Home';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import { IconButton } from '@material-ui/core';
import { Avatar } from 'antd';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { Row, Col } from 'antd';
import { StoreContext } from './Store';
import './Header.css'

function Header() {
    const [{user}, dispatch] = useContext(StoreContext);

    console.log(user)
    return (
        <Row>
            <div className="header">
                <Col span={7}>
                    <div className="header__left">
                        <div className="header__left-logo">
                            <a href="#">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/150px-Facebook_f_logo_%282019%29.svg.png" alt=""></img>
                            </a>
                        </div>
                        <div className="header__left-search"> 
                            <SearchOutlined />
                            <input type="" name="" placeholder="Tìm kiếm trên Facebook" />
                        </div>
                    </div>
                </Col>
            
                <Col span={10}>
                    <div className="header__center">
                        <div className="header__center-option header__active-option">
                            <HomeIcon />
                        </div>

                        <div className="header__center-option">
                            <EmojiFlagsIcon />
                        </div>
                        <div className="header__center-option">
                            <SubscriptionsIcon />
                        </div>
                        <div className="header__center-option">
                            <GroupsIcon />
                        </div>
                        <div className="header__center-option">
                            <StoreOutlinedIcon />
                        </div>
                    </div>
                </Col>
            
                <Col span={7}>
                    <div className="header__right">
                        <div className="header__right-info">
                            <Avatar src={user.photoURL}/>
                            <h4><a href="">{user.displayName}</a></h4>
                        </div>

                        <IconButton>
                            <MessageOutlinedIcon />
                        </IconButton>

                        <IconButton>
                            <MenuIcon />
                        </IconButton>

                        <IconButton>
                            <CircleNotificationsRoundedIcon />
                        </IconButton>

                        <IconButton>
                            <ArrowDropDownRoundedIcon />
                        </IconButton>
                    </div>
                </Col>
            </div>
        </Row>
    )
}

export default Header



