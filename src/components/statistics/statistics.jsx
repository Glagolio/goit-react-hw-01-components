import PropTypes from "prop-types";
import style from './statistics.module.css';


// Upload stats
export const Statistics = ({ props, title}) => {
    return ( 
        <section className={style.statistics}>
            <h2 className={style.title}>{title}</h2>
            <ul className={style.statList}>

                {props.map(({id, label, percentage}) =>
                (<li className={style.item} key={id}>
                    <span className={style.label}>{label}</span>
                    <span className={style.percentage}>{percentage}%</span>
                </li>))}
                
            </ul>
        </section>
                 )}


Statistics.propTypes = {
    props: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        })
    )
}
