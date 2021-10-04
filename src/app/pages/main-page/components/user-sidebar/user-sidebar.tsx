import { FC } from 'react';
import { TypeUser } from 'src/types';
import { userAvatarURL } from './mock';

import './user-sidebar.scss';

type Props = {
    user: TypeUser;
};

const UserSidebar: FC<Props> = (props) => {
    const {
        user: { name, avatar },
    } = props;

    return (
        <aside className="sidebar">
            <div className="sidebar__header user-info">
                <div className="sidebar__user-avatar">
                    <img src={avatar || userAvatarURL} alt="user avatar" />
                </div>
                <div className="sidebar__user-name">{name}</div>
            </div>
            <div className="sidebar__footer" />
        </aside>
    );
};

export default UserSidebar;
