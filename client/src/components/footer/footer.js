import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_container'>
                <div className='footer_top'>
                    <div className='footer_logo'>
                        <span>
                            Blogger
                        </span>
                    </div>
                    <div className='footer_social'>
                        <div >
                            <span>TÀI NGUYÊN</span>
                            <ul className='footer_links'>
                                <li>
                                    <Link to='/' className='footer_link'>Bài Viết</Link>
                                </li>
                                <li>
                                    <Link to='/about' className='footer_link'>Hỏi Đáp</Link>
                                </li>
                                <li>
                                    <Link to='/contact' className='footer_link'>Thảo Luận</Link>
                                </li>
                            </ul>
                        </div>
                        <div style={{ marginTop: 10 }}>
                            <span>THÔNG TIN</span>
                            <ul className='footer_links'>
                                <li>
                                    <Link to='/k' className='footer_link'>Tác giả</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer_bottom'>
                    <span>LIÊN KẾT</span>
                    <ul>
                        <li>
                            <Link to='/' className='footer_link'><FacebookIcon className='footer_icon' /></Link>
                        </li>
                        <li>
                            <Link to='/' className='footer_link'><FacebookIcon className='footer_icon' /></Link>
                        </li>
                        <li>
                            <Link to='/about' className='footer_link'><GitHubIcon className='footer_icon' /></Link>
                        </li>
                        <li>
                            <Link to='/about' className='footer_link'><GitHubIcon className='footer_icon' /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
