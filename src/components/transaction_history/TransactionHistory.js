import PropTypes from 'prop-types';
import { Table,Thead,TheadItem,TbodyRow,TbodyItem  } from 'components/transaction_history/TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <Thead>
                <tr>
                    <TheadItem>Type</TheadItem>
                    <TheadItem>Amount</TheadItem>
                    <TheadItem>Currency</TheadItem>
                </tr>
            </Thead>
            <tbody>
                {items.map(item => (
                    <TbodyRow key={item.id}>
                        <TbodyItem>{item.type}</TbodyItem>
                        <TbodyItem>{item.amount}</TbodyItem>
                        <TbodyItem>{item.currency}</TbodyItem>
                    </TbodyRow>))}
                
            </tbody>
        </Table>)
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
}
export default TransactionHistory;


