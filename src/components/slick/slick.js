import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slick.scss';
import { useState } from 'react';

function Slick() {
    const [img] = useState([
        {
            img: 'https://prodima.vn/wp-content/uploads/2021/04/9-cach-viet-blog-dinh-cao-khien-nguoi-doc-phai-click-ngay.jpg',
        },
        {
            img: 'http://www.azonnal.net/wp-content/uploads/2019/03/Blog-ca-nhan.jpg',
        },
        {
            img: 'https://itcenter.vn/wp-content/uploads/2019/03/tim-hinh-anh-mien-phi-cho-blog.jpg',
        },
        {
            img: 'https://webaffiliatevn.com/wp-content/uploads/2021/01/viet-blog-la-gi.jpg',
        },
        {
            img: 'https://media.istockphoto.com/photos/mockup-laptop-computer-coffee-notebook-and-colour-pencil-with-flower-picture-id1190185265?k=20&m=1190185265&s=170667a&w=0&h=gGnB8icd-XpK78qskI87lRRRrdX19mu8u8EoR7dShGU=',
        },
    ]);

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };
    return (
        <div className="slider">
            <Slider className="sliderContent" {...settings}>
                {img.map((item, index) => {
                    return (
                        <div key={index}>
                            <img className="sliderContentImg" src={item.img} />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default Slick;
