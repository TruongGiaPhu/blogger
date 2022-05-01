import React from 'react';
import './Address.scss';

function Address() {
    return (
        <div className="address">
            {/* <form className="addressFrom">
                <div className="addressWrapper">
                    <div className="a-left">
                        <h3> Địa điểm làm việc </h3>
                        <div className="a-Item">
                            <label>Tên</label>
                            <input
                                type="text"
                                placeholder="Nhập tên"
                                className="a-text"
                            />
                        </div>
                        <div className="a-Item">
                            <label>Quốc gia</label>
                            <select>
                                <option>Việt Nam</option>
                                <option>Anh</option>
                                <option>Pháp</option>
                            </select>
                        </div>
                        <div className="a-Item">
                            <label>Thành phố</label>
                            <select>
                                <option>Chọn</option>
                                <option>Hà Nội</option>
                                <option>Hồ Chí Minh</option>
                                <option>Đà Nẵng</option>
                            </select>
                        </div>
                        <div className="a-Item">
                            <label>Quận/huyện</label>
                            <select>
                                <option>Chọn</option>
                                <option>Quận 1</option>
                                <option>Quận 2</option>
                                <option>Quận 3</option>
                            </select>
                        </div>
                        <div className="a-Item">
                            <label>Phường/xã</label>
                            <select>
                                <option>Chọn</option>
                                <option>Phường 1</option>
                                <option>Phường 2</option>
                                <option>Phường 3</option>
                            </select>
                        </div>
                        <div className="a-Item">
                            <label>Địa chỉ</label>
                            <input
                                type="text"
                                placeholder="Nhập tên"
                                className="a-text"
                            />
                        </div>
                        <div className="a-Item">
                            <label>Mã bưu chính</label>
                            <input
                                type="text"
                                placeholder="Nhập tên"
                                className="a-text"
                            />
                        </div>
                        <div className="a-Item">
                            <label>Hướng đẫn đường đi</label>
                            <textarea placeholder="hướng dẫn đường đi" />
                        </div>
                        <div className="a-radio">
                            <label className="labelRadio">Chia sẻ</label>
                            <div className="radio">
                                <input
                                    type="radio"
                                    name="chiase"
                                    id="co"
                                    checked={true}
                                />
                                <label htmlFor="co">Có</label>
                                <input type="radio" name="chiase" id="khong" />
                                <label htmlFor="khong">Không</label>
                            </div>
                        </div>
                    </div>
                    <div className="a-right">
                        <h3>Bản đồ</h3>
                        <div className="a-boder-right">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15680.021143523512!2d106.7116703!3d10.734075250000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1svi!2s!4v1650287985347!5m2!1svi!2s"
                                className="map"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="button">
                    <button className="btn-cancel">Hủy</button>
                    <button className="btn-save">Tạo địa điểm</button>
                </div>
            </form> */}
        </div>
    );
}

export default Address;
