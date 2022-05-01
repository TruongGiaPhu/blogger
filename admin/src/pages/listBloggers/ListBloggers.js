import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadBloggers,
    deleteBloggerById,
} from '../../redux/actions/actionBlogger';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import 'react-toastify/dist/ReactToastify.css';
import './ListBlogger.scss';
import Dialog from '../../components/dialog/dialog';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

function ListBloggers() {
    const [dialog, setDialog] = useState({
        isLoading: false,
        message: '',
    });

    const isProductRef = useRef();

    const dispatch = useDispatch();
    const blog = useSelector((state) => state.listBlog.list);
    useEffect(() => {
        dispatch(loadBloggers());
    }, []);

    const handleDelete = (id) => {
        setDialog({
            isLoading: true,
            message: 'bạn có muốn xóa bài viết này không?',
        });
        isProductRef.current = id;
    };

    const handleYes = () => {
        dispatch(deleteBloggerById(isProductRef.current));
        setDialog({
            isLoading: false,
            message: '',
        });
    };

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90,
        },
        {
            field: 'name',
            headerName: 'Người đăng',
            width: 300,
            renderCell: (params) => {
                return (
                    <div className="blogListItem">
                        <img
                            className="blogListImg"
                            src={
                                `${params.row.img}` ||
                                'https://vietwebgroup.vn/admin/uploads/loi-404-la-gi-tim-hieu-ve-loi-404-la-gi.jpg'
                            }
                            alt=""
                        />
                        <span> {params.row.name}</span>
                    </div>
                );
            },
        },
        {
            field: 'title',
            headerName: 'Tiêu đề',
            width: 300,
        },
        {
            field: 'date',
            headerName: 'ngày đăng',
            width: 180,
        },

        {
            field: 'action',
            headerName: 'Điều chỉnh',
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`sua-bai-viet/${params.row.id}`}>
                            <button className="blogListEdit">Edit</button>
                        </Link>

                        <DeleteForeverIcon
                            className="blogListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="blogList">
            <div className="blogListHeader">
                <Button variant="contained" className="blogListAdd">
                    <Link to="them-moi-bai-viet">
                        <AddIcon />
                        Thêm mới
                    </Link>
                </Button>
            </div>
            <div className="blogListBody">
                <DataGrid
                    className="datagrid"
                    rows={blog}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={20}
                    checkboxSelection
                />
            </div>
            {dialog.isLoading && (
                <Dialog
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
        </div>
    );
}

export default ListBloggers;
