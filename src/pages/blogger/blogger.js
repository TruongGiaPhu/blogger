import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBloggerById } from '../../redux/actions/actionBlogger';
import './blogger.scss';

function Blogger() {
    const [active, setActive] = useState(null);
    const [scroll, setScroll] = useState(null);
    // const [blogger, setBlogger] = useState([]);
    // const [scrolls, setScrolls] = useState([]);

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getBloggerById(id));
    }, [dispatch, id]);

    const blog = useSelector((state) => state.listBlog.blog);

    // useEffect(() => {
    //     setBlogger(blog.content);
    // }, [blog.content]);

    // useEffect(() => {
    //     const handleScrolls = (e) => {
    //         blogger &&
    //             blogger.map((item, index) => {
    //                 const element = document.getElementById(index);
    //                 const top = element.offsetTop;
    //                 setScrolls((prev) => [
    //                     ...prev,
    //                     {
    //                         top,
    //                     },
    //                 ]);
    //             });
    //     };
    //     handleScrolls();
    // }, [blogger]);

    const handleScroll = async (index) => {
        setActive(index);
        const element = document.getElementById(index);
        setScroll(element.offsetTop);
    };

    useEffect(() => {
        const handleScrollToTop = () => {
            window.scrollTo({ top: scroll - 80, behavior: 'smooth' });
        };
        handleScrollToTop();
    }, [scroll]);

    const handleScrollActive = (index) => {
        setActive(index);
    };

    const handleActive = (index) => {
        if (index === active) {
            return 'active';
        } else {
            return '';
        }
    };

    return (
        <div className="blog">
            <div className="blog_container">
                <div className="blog_container_left">
                    <div className="blog_container_left_title">
                        <h1>{blog.title}</h1>
                    </div>
                    <div className="blog_container_left_content">
                        {blog.content &&
                            blog.content.map((item, index) => {
                                if (item.img === '') {
                                    return (
                                        <div
                                            key={index}
                                            id={index}
                                            onMouseMove={() =>
                                                handleScrollActive(index)
                                            }
                                        >
                                            <h2>
                                                {1 + index}. {item.title}
                                            </h2>
                                            <p>{item.content}</p>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            key={index}
                                            id={index}
                                            onMouseMove={() =>
                                                handleScrollActive(index)
                                            }
                                        >
                                            <h2>
                                                {1 + index}. {item.title}
                                            </h2>
                                            <p>{item.content}</p>
                                            <img
                                                src={item.img}
                                                className="imgBlogger"
                                                alt=""
                                            />
                                        </div>
                                    );
                                }
                            })}
                    </div>
                </div>
                <div className="blog_container_right">
                    <div className="blog_container_right_title">
                        <h1>Mục lục</h1>
                        <ul>
                            {blog.content &&
                                blog.content.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            onClick={() => handleScroll(index)}
                                            className={handleActive(index)}
                                        >
                                            {1 + index}. {item.title}
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogger;
