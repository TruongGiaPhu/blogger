import React, { useState, useEffect } from 'react';
import './profile.scss';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserById } from './../../redux/actions/actionLogin';
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
} from '@material-ui/icons';

export default function Profile() {
    const [data, setData] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        birthday: '',
        img: '',
        username: '',
        password: '',
    });
    console.log('data', data);
    const { id, name, email, phone, address, birthday, img } = data;
    const [date, setDate] = useState('');

    const user = useSelector((state) => state.login.user);

    // const date = user.birthday.split('/').reverse().join('-');

    // console.log(date);

    useEffect(() => {
        setData({
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            birthday: user.birthday,
            img: user.img,
            username: user.username,
            password: user.password,
        });
        setDate(user.birthday.split('/').reverse().join('-'));
    }, [user]);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleOnChangeDate = (e) => {
        const { value } = e.target;
        setDate(value);
        setData({
            ...data,
            birthday: value.split('-').reverse().join('/'),
        });
    };

    const dispatch = useDispatch();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserById(user.id, data));
    };

    return (
        <div className="profile">
            <div className="profileTitleContainer">
                <h1 className="profileTitle">Hồ sơ cá nhân</h1>
            </div>
            <div className="profileContainer">
                <div className="profileShow">
                    <div className="profileShowTop">
                        <img className="profileShowImg" alt="" src={user.img} />
                        <div className="profileShowTopTitle">
                            <span className="profileShowUserName">
                                {user.name}
                            </span>
                            <span className="profileShowPosition"></span>
                        </div>
                    </div>
                    <div className="profileShowBottom">
                        <span className="profileShowTitle">HỒ SƠ</span>
                        <div className="profileShowInfo">
                            <PermIdentity className="profileShowIcon" />
                            <span className="profileShowInfoTitle">
                                {user.username}
                            </span>
                        </div>
                        {/* <div className="profileShowInfo">
                            <CreditCardIcon className="profileShowIcon" />
                            <span className="profileShowInfoTitle"></span>
                        </div> */}
                        <div className="profileShowInfo">
                            <CalendarToday className="profileShowIcon" />
                            <span className="profileShowInfoTitle">
                                {user.birthday}
                            </span>
                        </div>
                        <span className="profileShowTitle">
                            PHƯƠNG THỨC LIÊN HỆ
                        </span>
                        <div className="profileShowInfo">
                            <PhoneAndroid className="profileShowIcon" />
                            <span className="profileShowInfoTitle">
                                {user.phone}
                            </span>
                        </div>
                        <div className="profileShowInfo">
                            <MailOutline className="profileShowIcon" />
                            <span className="profileShowInfoTitle">
                                {user.email}
                            </span>
                        </div>
                        <div className="profileShowInfo">
                            <LocationSearching className="profileShowIcon" />
                            <span className="profileShowInfoTitle">
                                {user.address}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="profileUpdate">
                    <span className="profileUpdateTitle">
                        Thay đổi thông tin cá nhân
                    </span>
                    <form className="profileUpdateForm">
                        <div className="profileUpdateLeft">
                            <div className="profileUpdateItem">
                                <label>Họ và tên</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    name="name"
                                    className="profileUpdateInput"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className="profileUpdateItem">
                                <label>Năm sinh</label>
                                <input
                                    type="date"
                                    value={date}
                                    className="profileUpdateInput"
                                    onChange={handleOnChangeDate}
                                />
                            </div>
                            <div className="profileUpdateItem">
                                <label>Số điện thoại</label>
                                <input
                                    type="text"
                                    value={data.phone}
                                    name="phone"
                                    maxLength="10"
                                    className="profileUpdateInput"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className="profileUpdateItem">
                                <label>Email</label>
                                <input
                                    type="text"
                                    value={data.email}
                                    name="email"
                                    className="profileUpdateInput"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className="profileUpdateItem">
                                <label>Địa chỉ</label>
                                <input
                                    type="text"
                                    value={data.address}
                                    name="address"
                                    className="profileUpdateInput"
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>
                        <div className="profileUpdateRight">
                            <div className="profileUpdateItem">
                                <img
                                    className="profileFromUpdateImg"
                                    alt=""
                                    src={data.img}
                                />
                            </div>
                            <div className="profileUpdateItem">
                                <label>Nhập URL ảnh</label>
                                <input
                                    type="url"
                                    className="profileUpdateInput"
                                    value={data.img}
                                    name="img"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className="profileUpdateItem">
                                <label>Mật khẩu</label>
                                <input
                                    type="text"
                                    placeholder="nhập mật khẩu cũ"
                                    className="profileUpdateInput"
                                    // value={password}
                                    // onChange={(e) =>
                                    //     setPassword(e.target.value)
                                    // }
                                />
                            </div>
                            <div className="profileUpdateItem">
                                <label>Mật khẩu mới</label>
                                <input
                                    type="text"
                                    placeholder="Nhập mật khẩu mới"
                                    className="profileUpdateInput"
                                    // value={newPasswrod}
                                    // onChange={(e) =>
                                    //     setNewPasswrod(e.target.value)
                                    // }
                                />
                            </div>
                            <div className="profileUpdateItem">
                                <label>Nhập lại mật khẩu mới</label>
                                <input
                                    type="text"
                                    placeholder="Nhập mật khẩu mới"
                                    className="profileUpdateInput"
                                    // value={enterThePassword}
                                    // onChange={(e) =>
                                    //     setEnterThePassword(e.target.value)
                                    // }
                                />
                            </div>
                            <input
                                className="profileUpadateButton"
                                type="submit"
                                value="Cập nhật"
                                onClick={handleOnSubmit}
                            />
                        </div>
                    </form>
                    {/* <ToastContainer autoClose={2000} theme="dark" /> */}
                </div>
            </div>
        </div>
    );
}
