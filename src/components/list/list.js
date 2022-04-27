import React, { useState, useEffect } from 'react'
import './list.scss'
import { useDispatch, useSelector } from 'react-redux';
import { loadBloggers, searchBlogger } from '../../redux/actions/actionBlogger';
import { Posts } from './posts';
import TextField from "@mui/material/TextField";
import { Paginations } from './pagination';
import { bloggerSelector } from '../../redux/selectors/selectors';

function List() {
    const [search, setSearch] = useState('');
    const [curentPage, setCurentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [error, setError] = useState('');

    const bloggers = useSelector(bloggerSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBloggers())
    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value);
        dispatch(searchBlogger(e.target.value));
    }

    useEffect(() => {
        const errors = () => {
            if (bloggers.length === 0) {
                setError('Không tìm thấy bài viết')
            }
        }
        errors()
        return () => {
            setError('')
        }
    }, [bloggers])


    //Get current posts
    const indexOfLastPost = curentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const curentPosts = bloggers.slice(indexOfFirstPost, indexOfLastPost);

    //slice là giúp lấy ra những phần tử của mảng

    //Change page
    const paginate = (pageNumber) => setCurentPage(pageNumber);

    return (
        <div className='list'>
            <div className='list_container'>
                <div className='list_container_search'>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        label="Search"
                        value={search}
                        onChange={handleSearch}
                        sx={{ margin: '10px 0', width: '70%' }}
                    />
                </div>
                {error && <h1 className='error'>{error}</h1>}
                <Posts posts={curentPosts} />
                <Paginations
                    postsPerPage={postsPerPage}
                    totalPosts={bloggers.length}
                    paginate={paginate}
                />

            </div>
        </div>
    )
}

export default List