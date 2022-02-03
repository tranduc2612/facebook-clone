import React from 'react'
import { Avatar } from 'antd';
import { LikeOutlined, CommentOutlined, ShareAltOutlined} from '@ant-design/icons';
import "./Post.css"
import { Row, Col } from 'antd';
function Post({profilePic,image,username,timestamp,message}) {
    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar
                src={profilePic}
                className='post__top-avatar'
                />

                <div className='post__top-info'>
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>

            <div className='post__bottom'>
                <p>{message}</p>
            </div>

            <div className='post__image'>
                <img src={image} alt="Ảnh" width="759px" height="100%"/>
            </div>

            <div className='post__like-current'>
                <LikeOutlined />
                <span>1</span>
            </div>

            <div className='post__react'>
                <Row justify='center'>
                    <Col span={7}>
                        <div className="post__react-option">
                            <LikeOutlined />
                            <h3 style={{marginBottom:"0px"}}>Like</h3>
                        </div>
                    </Col>
                    <Col span={7}>
                        <div className="post__react-option">
                            <CommentOutlined />
                            <h3 style={{marginBottom:"0px"}}>Comment</h3>
                        </div>                    
                    </Col>
                    <Col span={7}>
                        <div class="post__react-option">
                            <ShareAltOutlined />
                            <h3 style={{marginBottom:"0px"}}>Share</h3>
                        </div>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default Post
