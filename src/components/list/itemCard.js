import React from 'react';
import { Link } from 'react-router-dom';
import './itemCard.scss';

function ItemCard(props) {
    return (
        <div className="item_card">
            <div className="item_card_container">
                <div className="item_card_container_left">
                    <div className="item_card_container_left_img">
                        <img src={props.img} alt="" />
                    </div>
                </div>
                <div className="item_card_container_right">
                    <div className="item_card_user">
                        <div className="item_card_name">
                            <span>{props.name}</span>
                        </div>
                        <div className="item_card_date">
                            <span>{props.date}</span>
                        </div>
                    </div>
                    <div className="item_card_title">
                        <Link to={props.path} className="links item_card_link">
                            {props.title}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
