import React, { useEffect, useRef, useState } from 'react';
import { TextField, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {
    getBloggerById,
    upDateBloggers,
} from '../../redux/actions/actionBlogger';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dialogs from '../../components/dialog/dialog';

function Blogger() {
    const [state, setState] = useState({
        name: '',
        img: '',
        title: '',
        date: '',
        contents: [],
    });

    const [dialog, setDialog] = useState({
        isLoading: false,
        message: '',
    });

    const { name, img, title, date, contents } = state;
    const [scroll, setScroll] = useState(null);
    const [navigate, set_Navigate] = useState(false);
    let usenavigate = useNavigate();
    const dispatch = useDispatch();

    const blog = useSelector((state) => state.listBlog.blog);
    const isProductRef = useRef();

    const { id } = useParams();
    useEffect(() => {
        if (id) {
            dispatch(getBloggerById(id));
        }
    }, [id]);

    useEffect(() => {
        if (navigate) {
            return usenavigate('/dang-sach-bai-viet');
        }
    }, [navigate]);

    useEffect(() => {
        const handleScrollToTop = () => {
            window.scrollTo({ top: scroll, behavior: 'smooth' });
        };
        handleScrollToTop();
    }, [scroll]);

    useEffect(() => {
        const date = new Date().toISOString().split('T')[0];
        setState({
            ...state,
            date,
        });
    }, []);

    const handleAdd = () => {
        setState({
            ...state,
            contents: [
                ...state.contents,
                {
                    content: '',
                    title: '',
                    img: '',
                },
            ],
        });
    };

    const handleScroll = (index) => {
        const element = document.getElementById(index);
        setScroll(element.offsetTop);
    };

    const handleRemove = (index) => {
        setDialog({
            isLoading: true,
            message: `b???n c?? mu???n x??a m???c l???c ${index + 1} kh??ng?`,
        });
        isProductRef.current = index;
    };

    const handleYes = () => {
        const newContents = state.contents.filter(
            (item, i) => i !== isProductRef.current,
        );
        setState({
            ...state,
            contents: newContents,
        });
        setDialog({
            isLoading: false,
            message: '',
        });
    };

    const handleOnChange = (e) => {
        let { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const handleonChangeContent = (e, index) => {
        const values = [...state.contents];
        values[index][e.target.name] = e.target.value;
        setState({
            ...state,
            contents: values,
        });
    };

    useEffect(() => {
        if (blog) {
            setState({
                name: blog.name,
                img: blog.img,
                title: blog.title,
                date: blog.date,
                contents: blog.contents,
            });
            console.log(state.date);
        }
    }, [blog]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        if (title === '' || contents.length === 0) {
            toast.error('Vui l??ng nh???p ?????y ????? th??ng tin');
            toast.error('ph???i c?? ??t nh???t 1 b??i vi???t');
        } else {
            dispatch(upDateBloggers(state, id));
            toast.success('Add new blogger successfully');
            set_Navigate(true);
        }
    };

    return (
        <div>
            <div className="newBlogger">
                <div className="newBloggerWrapper">
                    <div className="newBloggerContent">
                        <h1>Th??m m???i b??i vi???t</h1>
                    </div>
                    <div className="newBloggerBody">
                        <form>
                            <div>
                                <div className="newBloggerInput">
                                    {/* <h2>Ti??u ????? b??i ????ng </h2> */}
                                    <TextField
                                        id="outlined-basic"
                                        label="Ti??u ?????"
                                        variant="outlined"
                                        value={state.title}
                                        onChange={handleOnChange}
                                        name="title"
                                        className="newBloggerTextField"
                                    />
                                </div>

                                {state.contents &&
                                    state.contents.map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="newBloggerContents"
                                                id={index}
                                            >
                                                <div className="newBloggerCloseIcon">
                                                    <CloseIcon
                                                        onClick={() =>
                                                            handleRemove(index)
                                                        }
                                                    />
                                                </div>
                                                <div className="newBloggerfromContens">
                                                    <h2>
                                                        {index + 1}. M???c l???c
                                                    </h2>
                                                    <div>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Ti??u ?????"
                                                            variant="outlined"
                                                            value={item.title}
                                                            onChange={(e) =>
                                                                handleonChangeContent(
                                                                    e,
                                                                    index,
                                                                )
                                                            }
                                                            name="title"
                                                            className="newBloggerfromTextField"
                                                        />
                                                    </div>
                                                    <div>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="N???i dung"
                                                            variant="outlined"
                                                            placeholder="Placeholder"
                                                            multiline
                                                            value={item.content}
                                                            onChange={(e) =>
                                                                handleonChangeContent(
                                                                    e,
                                                                    index,
                                                                )
                                                            }
                                                            name="content"
                                                            className="newBloggerfromTextField"
                                                        />
                                                    </div>

                                                    <div>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Img"
                                                            variant="outlined"
                                                            value={item.img}
                                                            onChange={(e) =>
                                                                handleonChangeContent(
                                                                    e,
                                                                    index,
                                                                )
                                                            }
                                                            name="img"
                                                            className="newBloggerfromTextField"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}

                                <div>
                                    <Button
                                        onClick={handleAdd}
                                        className="newBloggerButton"
                                        variant="contained"
                                        style={{
                                            marginRight: '10px',
                                        }}
                                    >
                                        <AddIcon />
                                        th??m muc l???c
                                    </Button>
                                    <Button
                                        variant="contained"
                                        endIcon={<SendIcon />}
                                        className="newBloggerButton"
                                        style={{
                                            marginLeft: '10px',
                                        }}
                                        onClick={handleOnSubmit}
                                    >
                                        ????ng
                                    </Button>
                                </div>
                            </div>
                        </form>
                        <div className="newBloggerImageList">
                            <h1>List ???nh</h1>

                            <ImageList
                                sx={{ width: 300, height: 500 }}
                                cols={1}
                                rowHeight={300}
                            >
                                {state.contents &&
                                    state.contents.map((item, index) => (
                                        <ImageListItem key={index}>
                                            <img
                                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                alt=""
                                                loading="lazy"
                                                className="newBloggerImage"
                                                onClick={() =>
                                                    handleScroll(index)
                                                }
                                            />
                                        </ImageListItem>
                                    ))}
                            </ImageList>
                        </div>
                    </div>
                </div>
            </div>
            {dialog.isLoading && (
                <Dialogs
                    handleYes={handleYes}
                    handleClose={() =>
                        setDialog({
                            isLoading: false,
                            message: '',
                        })
                    }
                    message={dialog.message}
                />
            )}
            <ToastContainer />
        </div>
    );
}

export default Blogger;
