import React from 'react';
import './Menubar.scss';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { NavLink } from 'react-router-dom';

function Menubar() {
    return (
        <div className="menubar">
            <div className="m-Wrapper">
                <div className="m-Menu">
                    <div className="m-top">
                        <h1>BLOGGER</h1>
                    </div>
                    <div className="m-bottom">
                        <ul>
                            <li>
                                <NavLink
                                    to="/home"
                                    className="NavLink"
                                    activeclassname="active"
                                >
                                    <WidgetsIcon />
                                    <span>Trang chủ</span>
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink
                                    to="/2"
                                    className="NavLink"
                                    activeclassname="active"
                                >
                                    <BusinessCenterIcon />
                                    <span>Yêu cầu công việc</span>
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink
                                    to="/dang-sach-bai-viet"
                                    className="NavLink"
                                    activeclassname="active"
                                >
                                    <ListAltIcon />
                                    <span>DS bài viết</span>
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink
                                    to="/4"
                                    className="NavLink"
                                    activeclassname="active"
                                >
                                    <AddReactionIcon />
                                    <span>Người tuyển dụng</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/5"
                                    className="NavLink"
                                    activeclassname="active"
                                >
                                    <SummarizeIcon />
                                    <span>Báo cáo</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/5"
                                    className="NavLink"
                                    activeclassname="active"
                                >
                                    <AddLocationIcon />
                                    <span>Địa điểm</span>
                                </NavLink>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menubar;
