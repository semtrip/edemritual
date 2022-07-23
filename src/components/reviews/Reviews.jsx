import { useState, useEffect } from 'react';
import './Reviews.scss'
import './adaptive.scss'
function Reviews() {
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
        <div className="reviews">
            <div className="container">
                <h2 className="title-a" id='reviews'>Посмотрите отзывы о нашей работе</h2>
                <div className="items">
                    <div className="item">
                        <img src="img/reviews/1.jpg" alt="" onClick={()=>{openModal('img/reviews/1.jpg')}}/>
                    </div>
                    <div className="item">
                        <img src="img/reviews/2.jpg" alt="" onClick={()=>{openModal('img/reviews/2.jpg')}}/>
                    </div>
                    <div className="item">
                        <img src="img/reviews/3.jpg" alt="" onClick={()=>{openModal('img/reviews/3.jpg')}}/>
                    </div>
                    <div className="item">
                        <img src="img/reviews/4.jpg" alt="" onClick={()=>{openModal('img/reviews/4.jpg')}}/>
                    </div>
                    <div className="item">
                        <img src="img/reviews/5.jpg" alt="" onClick={()=>{openModal('img/reviews/5.jpg')}}/>
                    </div>
                    <div className="item">
                        <img src="img/reviews/6.jpg" alt="" onClick={()=>{openModal('img/reviews/6.jpg')}}/>
                    </div>
                </div>
            </div>
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

export default Reviews;