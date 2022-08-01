import PropTypes from "prop-types";
import style from './transactions.module.css';

export const TransactionHistory = ({props}) => {
  return (
    <table className={style.transactionHistory}>
        <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
      </thead>
      <tbody>
        {props.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <th>{type}</th>
          <th>{amount}</th>
          <th>{currency}</th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
    props: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}


