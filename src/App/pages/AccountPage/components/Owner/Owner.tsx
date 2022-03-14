import Avatar from "@components/Avatar";
import FollowersIcon from "@components/FollowersIcon";
import { AccountOwnerModel } from "@models/gitHub";

import ownerStyle from "./Owner.module.scss";

type OwnerProps = {
  owner: AccountOwnerModel;
};

const Owner: React.FC<OwnerProps> = ({ owner }): JSX.Element => {
  return (
    <section className={ownerStyle.owner}>
      <Avatar
        className={ownerStyle.icon}
        imgUrl={owner.avatarUrl}
        alt="Иконка профиля"
      />
      <a className={ownerStyle.link} href={owner.htmlUrl}>
        <h2 className={ownerStyle.title}>{owner.login}</h2>
      </a>
      <div className={ownerStyle.followers}>
        <FollowersIcon />
        <span>{owner.followers} followers</span>
        <span>{owner.following} following</span>
      </div>
    </section>
  );
};

export default Owner;
