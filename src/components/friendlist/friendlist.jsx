import style from './friendlist.module.css'
import {checkOnline} from './checkOnline'
import PropTypes from "prop-types";




export const Friendlist = ({ props }) => {
    return (
        <ul className={style.friendList}>
            {props.map(({ avatar, name, isOnline, id }) => 
            (
                <li className={`${style.item} ${style[checkOnline(isOnline)]}`} key={id}>
                    <span className={style.status}>{`${checkOnline(isOnline)}`}</span>
                    <img className={style.avatar} src={avatar} alt={name} width="48" />
                    <p className={style.name}>{name}</p>
                </li>
            ))}
        </ul>
    )
}



Friendlist.propTypes = {
    props: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    )
}


