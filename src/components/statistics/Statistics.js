import PropTypes from 'prop-types';
import { StatContainer,StatList,ListItem,StatTitle  } from 'components/statistics/Statistics.styled';

const Statistics = ({ title, stats=[] }) => {
    return (
        <StatContainer>
            <StatTitle>{title}</StatTitle>

            <StatList >
                {stats.map(item => (
                    <ListItem key={item.id}>
                    <span>{item.label}</span>
                    <span>{item.percentage}%</span>
                </ListItem>
                ))}
                
                
            </StatList>
        </StatContainer>)
                
};
 
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage:PropTypes.number,
        })
    )
};
export default Statistics;
