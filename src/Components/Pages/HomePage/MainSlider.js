// import React, { useEffect, useState } from 'react';
// const MainSlider = () => {
//     const photo = [
//         {
//             pic: pic1,
//             id: 1
//         }, {
//             pic: pic2,
//             id: 2
//         },
//     ]
//     const [data,
//         setData] = useState(photo);
//     const [index,
//         setIndex] = useState(0);
//     useEffect(() => {
//         const lastIndex = data.length - 1;
//         if (index < 0) {
//             setIndex(lastIndex)
//         }
//         if (index > lastIndex) {
//             setIndex(0);
//         }
//     }, [index, data]);
//     useEffect(() => {
//         let slider = setInterval(() => {
//             setIndex(index + 1);
//         }, 3000);
//         return () => clearInterval(slider);
//     }, [index])
//     return (
//         <section id="carousel">
//             {data.map((img, picIndex) => {
//                 const {id, pic} = img;
//                 let position = 'nextSlide';
//                 if (picIndex === index) {
//                     position = 'activeSlide';
//                 }
//                 if (picIndex === index - 1 || (index === 0 && picIndex === data.length - 1)) {
//                     position = 'lastSlide';
//                 }
//                 return (
//                     <article className={position} key={picIndex}>
//                         <img src={pic} alt="name" className="resize"/>
//                     </article>
//                 )
//             })}
//             <button className="prv" onClick={() => setIndex(index - 1)}>
//             <i class="icofont-circled-left"></i>
//             </button>
//             <button className="nxt" onClick={() => setIndex(index + 1)}>
//                 <i class="icofont-circled-right"></i>
//             </button>
//         </section>
//     );
// };

// export default MainSlider;







import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from '../../imges/home_mechanic_slide_bg.jpg'
import pic2 from '../../imges/imgpsh_fullsize_anim-1.jpg'
class MainSlider extends Component {
    constructor(props){
        super();
        // this.next=this.next.bind(this);
        // this.prev=this.prev.bind(this);
    }
next(){
    this.slider.slickNext();
}
prev(){
    this.slider.slickPrev();
}
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <section id="mainSlider">
                    <div className="mainSlider-wrapper">
                        {/* <button onClick={this.prev}><i class="icofont-dotted-left"></i></button>
                        <button onClick={this.next}><i class="icofont-dotted-right"></i></button> */}
                        <Slider ref={c=>(this.slider=c)} {...settings}>
                            <div>
                                <img src={pic1} alt="pic" className="resize"/>
                            </div>
                            <div>
                                <img src={pic2} alt="pic" className="resize"/>
                            </div>
                        </Slider>
                    </div>
                </section>
            </div>
        );
    }
}

export default MainSlider;
