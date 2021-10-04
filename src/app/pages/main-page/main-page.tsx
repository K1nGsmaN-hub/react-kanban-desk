import { FC } from 'react';

// import { TypeTable, TypeUser } from 'src/types';
import { UserSidebar } from './components';

// type Props = {
//     user: TypeUser;
//     tables: TypeTable[];
// };

const MainPage: FC = () => {
    // const { user, tables } = props;

    return <UserSidebar user={{ name: 'User Name' }} />;
};

export default MainPage;
