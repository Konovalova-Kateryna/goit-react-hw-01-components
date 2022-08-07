
import Profile from 'components/profile/Profile';
import user from 'components/profile/user.json';
import Statistics from 'components/statistics/Statistics';
import data from 'components/statistics/data.json';
import FriendList from 'components/friend_list/FriendList';
import friends from 'components/friend_list/friends.json';
import TransactionHistory from 'components/transaction_history/TransactionHistory';
import transactions from 'components/transaction_history/transactions.json';
import { GlobalStyle } from 'components/GlobalStyle';

export default function App() {

    return (
        <div>
            <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
            <Statistics title="Upload stats" stats={data}/>
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
            
            <GlobalStyle/>
       </div>
    );
};
