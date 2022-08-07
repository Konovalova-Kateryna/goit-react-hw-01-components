import PropTypes from 'prop-types';
import { FriendStatus, FriendItem,FriendBox, FriendText } from 'components/friend_list/FriendList.styled';

const FriendList = ({ friends }) => {
    return (
        <FriendBox>
            {friends.map(({ id, isOnline, avatar, name }) => (
                <FriendItem key={id}>
                    <FriendStatus isOnline={isOnline}></FriendStatus>
                    <img src={avatar} alt="User avatar" width="48" />
                    <FriendText>{name}</FriendText>
                </FriendItem>
            ))}
        </FriendBox>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number,
            isOnline: PropTypes.bool,
            avatar: PropTypes.string,
            name: PropTypes.string,
        })
    )
};

export default FriendList;