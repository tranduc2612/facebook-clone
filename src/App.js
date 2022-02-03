import React,{useContext} from 'react';
import './App.css';
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Feed from './component/Feed'
import Login from './component/Login'
import { Row, Col, } from 'antd';
import 'antd/dist/antd.min.css'; 
import { StoreContext } from './component/Store';

export default function App() {

    const [{ user }, dispatch] = useContext(StoreContext);

    return (
        <div className="app">
            {!user?<Login />:(
                <>
                    <Header />
                    
                    <div className="app__body">
                        <Row>
                            <Col span={7}>
                                <Sidebar />
                            </Col>
                            
                            <Col span={12}>
                                <Feed />
                            </Col>

                            <Col span={5}>
                                <span>Thanh chat</span>
                            </Col>
                        </Row>
                    </div>
                </>
            )}  
        </div>
    );
}
