import PropTypes from 'prop-types';
import { ProfileImg, ProfileStats,ProfileContainer,ProfileTitle, ProfileDiscr,StatsItem } from './profile.styled';

const Profile = ({ avatar, username, tag, location, stats }) => {

    return (
        <ProfileContainer>
        <div>
        <div>
            <ProfileImg
                src={avatar}
                alt={username}
            />
            <ProfileTitle>{username}</ProfileTitle>
            <ProfileDiscr>@{tag}</ProfileDiscr>
            <ProfileDiscr>{location}</ProfileDiscr>
        </div>
        <ProfileStats>
                <StatsItem>
                    <span>Followers:</span>
                    <span>{stats.followers}</span>
                </StatsItem>
                <StatsItem>
                    <span>Views:</span>
                    <span>{stats.views}</span>
                </StatsItem>
                <StatsItem>
                    <span>Likes:</span>
                    <span>{stats.likes}</span>
                </StatsItem>
        </ProfileStats>
            </div>
        </ProfileContainer>
        )
};

Profile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.object,
};
export default Profile;