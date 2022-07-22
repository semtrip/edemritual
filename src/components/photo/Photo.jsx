import React, {useState, useEffect} from 'react'
import './Photo.scss'
import './adaptive.scss'
function Photo(props) {
    const [show, setShow] = useState(false)
    const [img, setImg] = useState('')
    useEffect(() => {
        if(show) {
            document.body.classList.add('show-modal')
        } else {
            document.body.classList.remove('show-modal')
        }
    }, [show]);
    const openModal = (url) =>{
        setImg(url)
        setShow(true)
    }
    return (
        <div className="photo">
            {props.title ? <h2 className="title-a">{props.title}</h2> :null}
        {
            props.type === 1 ?
            <div className="padding-block">
                <div className="photo-50">
                    <img src="img/photo/IMG_7038.webp" alt="" onClick={()=>{openModal('img/photo/IMG_7038.webp')}}/>
                </div>
                <div className="photo-left">
                        <img src="img/photo/IMG_7065.webp" alt="" onClick={()=>{openModal('img/photo/IMG_7065.webp')}}/>
                        <img src="img/photo/IMG_7085.webp" alt="" onClick={()=>{openModal('img/photo/IMG_7085.webp')}}/>
                        <img src="img/photo/IMG_7022.webp" alt="" onClick={()=>{openModal('img/photo/IMG_7022.webp')}}/>
                        <img src="img/photo/IMG_6903.webp" alt="" onClick={()=>{openModal('img/photo/IMG_6903.webp')}}/>
                    </div>
            </div>
            :props.type === 2 ?
            <div className="full-block">
                <img src="img/photo/1.jpg" alt="" onClick={()=>{openModal('img/photo/1.jpg')}}/>
                <img src="img/photo/2.webp" alt="" onClick={()=>{openModal('img/photo/2.webp')}}/>
                <img src="img/photo/3.webp" alt="" onClick={()=>{openModal('img/photo/3.webp')}}/>
                <img src="img/photo/4.webp" alt="" onClick={()=>{openModal('img/photo/4.webp')}}/>

                <img src="img/photo/5.webp" alt="" onClick={()=>{openModal('img/photo/5.webp')}}/>
                <img src="img/photo/6.webp" alt="" onClick={()=>{openModal('img/photo/6.webp')}}/>
                <img src="img/photo/7.webp" alt="" onClick={()=>{openModal('img/photo/7.webp')}}/>
                <img src="img/photo/8.webp" alt="" onClick={()=>{openModal('img/photo/8.webp')}}/>

                <img src="img/photo/9.jpg" alt="" onClick={()=>{openModal('img/photo/9.jpg')}}/>
                <img src="img/photo/10.webp" alt="" onClick={()=>{openModal('img/photo/10.webp')}}/>
                <img src="img/photo/11.webp" alt="" onClick={()=>{openModal('img/photo/11.webp')}}/>
                <img src="img/photo/12.webp" alt="" onClick={()=>{openModal('img/photo/12.webp')}}/>

                <img src="img/photo/13.webp" alt="" onClick={()=>{openModal('img/photo/13.webp')}}/>
                <img src="img/photo/14.webp" alt="" onClick={()=>{openModal('img/photo/14.webp')}}/>
                <img src="img/photo/15.webp" alt="" onClick={()=>{openModal('img/photo/15.webp')}}/>
                <img src="img/photo/16.webp" alt="" onClick={()=>{openModal('img/photo/16.webp')}}/>

                <img src="img/photo/3.webp" alt="" onClick={()=>{openModal('img/photo/3.webp')}}/>
                <img src="img/photo/19.webp" alt="" onClick={()=>{openModal('img/photo/19.webp')}}/>
                <img src="img/photo/20.webp" alt="" onClick={()=>{openModal('img/photo/20.webp')}}/>
                <img src="img/photo/21.webp" alt="" onClick={()=>{openModal('img/photo/21.webp')}}/>

                <img src="img/photo/22.webp" alt="" onClick={()=>{openModal('img/photo/22.webp')}}/>
                <img src="img/photo/23.webp" alt="" onClick={()=>{openModal('img/photo/23.webp')}}/>
                <img src="img/photo/14.webp" alt="" onClick={()=>{openModal('img/photo/14.webp')}}/>
                <img src="img/photo/IMG_6903.webp" alt="" onClick={()=>{openModal('mg/photo/IMG_6903.webp')}}/>
            </div>
            :null
        }
        {   show ?
                <div className="modal" onClick={()=>{setShow(false)}}>
                    <div className="close" onClick={()=>{setShow(false)}}/>
                    <img src={img} alt="" onClick={e => e.stopPropagation()}/>
                </div>
            :null
        }
        </div>

    );
}

export default Photo;