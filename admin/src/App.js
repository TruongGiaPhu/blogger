import './App.scss';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Menubar from './components/menubar/Menubar';
import Address from './pages/address/Address';
import Home from './pages/home';
import ListBloggers from './pages/listBloggers/ListBloggers';
import NewBlogger from './pages/NewBlogger/NewBlogger';
import Blogger from './pages/Blogger/Blogger';
import Login from './components/login/Login';
import { useSelector, useDispatch } from 'react-redux';
import Profile from './components/profile/profile';

function App() {
    const currentUser = useSelector((state) => state.login.login);

    // const [currentUser, setCurrentUser] = useState(false);

    // const currentUser = false;

    const RequireAuth = ({ children }) => {
        return currentUser ? children : <Navigate to="/" />;
    };

    return (
        <BrowserRouter>
            <div className="App">
                <Menubar />
                <div className="appWrapper">
                    <Navbar />
                    <div className="appContent">
                        <Routes>
                            <Route path="/">
                                <Route index element={<Login />} />
                                <Route
                                    index
                                    path="home"
                                    element={
                                        <RequireAuth>
                                            <Home />
                                        </RequireAuth>
                                    }
                                />
                                <Route
                                    index
                                    path="Ho-so-ca-nhan/:name/:id"
                                    element={
                                        <RequireAuth>
                                            <Profile />
                                        </RequireAuth>
                                    }
                                />

                                <Route path="dang-sach-bai-viet">
                                    <Route
                                        index
                                        element={
                                            <RequireAuth>
                                                <ListBloggers />
                                            </RequireAuth>
                                        }
                                    />
                                    <Route
                                        index
                                        path="them-moi-bai-viet"
                                        element={
                                            <RequireAuth>
                                                <NewBlogger />
                                            </RequireAuth>
                                        }
                                    />
                                    <Route
                                        index
                                        path="sua-bai-viet/:id"
                                        element={
                                            <RequireAuth>
                                                <Blogger />
                                            </RequireAuth>
                                        }
                                    />
                                </Route>
                                <Route path="/*" element={<Login />} />
                            </Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
