import React,{useState} from 'react'
import { Avatar } from 'antd';
import { VideoCameraOutlined,PictureOutlined,SmileOutlined } from '@ant-design/icons';
import './MessageSender.css'

function MessageSender() {
    const [input,setInput] = useState('');
    const [imgUrl,setImgUrl] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        setInput("");
        setImgUrl("");
    }
    return (
        <div className="messageSender">
            <div className='messageSender__top'>
                <Avatar src="https://joeschmoe.io/api/v1/random" className="messageSender__avatar" />
                <form className='messageSender__form'>
                    <input 
                        value={input}
                        onChange={e=>{setInput(e.target.value)}}
                        className='messageSender__input'
                        type="text" 
                        placeholder={`What's on your mind`}
                    />
                    <input 
                        value={imgUrl}
                        onChange={e=>{setImgUrl(e.target.value)}}
                        className='messageSender__input'
                        type="text" 
                        placeholder='image URL (Optional)'
                    />

                    <button onClick={handleSubmit} type='Submit'>Hidden</button>
                </form>
            </div>

            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideoCameraOutlined className='messageSender__option-icon' style={{color:"red"}}/>
                    <h3>Video</h3>
                </div>

                <div className='messageSender__option'>
                    <PictureOutlined className='messageSender__option-icon' style={{color:"green"}}/>
                    <h3>Ảnh/Video</h3>
                </div>

                <div className='messageSender__option'>
                    <SmileOutlined className='messageSender__option-icon' style={{color:"orange"}}/>
                    <h3>Cảm xúc/Hoạt động</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
