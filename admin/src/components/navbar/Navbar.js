import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import {
    clearUser,
    getUserById,
    dangnhap,
} from '../../redux/actions/actionLogin';
import { useNavigate, Link } from 'react-router-dom';

function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [navigate, set_Navigate] = useState(false);
    const [navigateProfile, set_NavigateProfile] = useState(false);
    const [data, setData] = useState({
        id: '',
        img: '',
        name: '',
    });
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const { user } = useSelector((state) => state.login);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!sessionStorage.getItem('id')) {
        } else {
            dispatch(getUserById(sessionStorage.getItem('id')));
        }
    }, [sessionStorage.getItem('id')]);

    // useEffect(() => {
    //     if (sessionStorage.getItem('id')) {
    //         dispatch(dangnhap(true));
    //     }
    // });

    console.log(sessionStorage.getItem('id'));

    useEffect(() => {
        setData({
            id: user.id,
            img: user.img,
            name: user.name,
        });
    }, [user]);

    const handleLogout = () => {
        dispatch(clearUser());
        sessionStorage.clear();
        // set_Navigate(true);
    };

    let usenavigate = useNavigate();
    useEffect(() => {
        if (navigate) {
            return usenavigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        if (navigateProfile) {
            return usenavigate(`/Ho-so-ca-nhan/${data.name}/${data.id}`);
        }
    }, [navigateProfile]);

    return (
        <div className="navbar">
            <div className="n-left"></div>
            <div className="n-right">
                <NotificationsIcon />
                <div onClick={handleClick}>
                    <img
                        src={
                            data.img ||
                            'https://www.clipartmax.com/png/middle/97-971514_male-user-help-icon-h%C3%ACnh-%E1%BA%A3nh-d%E1%BA%A5u-nh%C3%A2n-%C4%91%E1%BB%8F.png'
                        }
                        alt=""
                    />
                </div>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem>{data.name}</MenuItem>
                    <MenuItem
                        onClick={() =>
                            usenavigate(
                                `/Ho-so-ca-nhan/${data.name}/${data.id}`,
                            )
                        }
                    >
                        <Avatar /> Hồ sơ
                    </MenuItem>

                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Cài đặt
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Đăng xuất
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
}

export default Navbar;
