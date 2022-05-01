import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import { dangnhap, loadUsers } from './../../redux/actions/actionLogin';
import { useNavigate } from 'react-router-dom';

import './Login.scss';

function Login() {
    const [navigate, set_Navigate] = useState(false);
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });
    const [error, setError] = useState('');

    const { users } = useSelector((state) => state.login);

    let usenavigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUsers());
    }, [dispatch]);

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleOnChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        users &&
            users.map((user) => {
                if (
                    user.email === values.email &&
                    user.password === values.password
                ) {
                    dispatch(dangnhap(true));
                    sessionStorage.setItem('id', user.id);
                    set_Navigate(true);
                } else {
                    setError('Sai tài khoản hoặc mật khẩu');
                }
            });
    };

    useEffect(() => {
        if (navigate) {
            return usenavigate('/home');
        }
    }, [navigate]);

    return (
        <div className="login">
            <div className="login__form">
                <form>
                    <label>LOGIN</label>
                    <div className="loginInput">
                        <EmailIcon />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleOnChange}
                            value={values.email}
                        />
                    </div>

                    <div className="loginInput">
                        <LockIcon />
                        <input
                            type={values.showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            name="password"
                            value={values.password}
                            onChange={handleOnChange}
                        />

                        {values.showPassword ? (
                            <VisibilityIcon onClick={handleClickShowPassword} />
                        ) : (
                            <VisibilityOffIcon
                                onClick={handleClickShowPassword}
                            />
                        )}
                    </div>
                    {error && <span className="loginError">{error}</span>}

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        style={{ marginTop: '2rem' }}
                    >
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Login;
