import { memo } from "react";

import Avatar from "@components/Avatar";
import LinkIcon from "@components/LinkIcon";
import LocationIcon from "@components/MailIcon";
import MailIcon from "@components/MailIcon";
import TwitterIcon from "@components/TwitterIcon";
import {
  isUserModel,
  OrganizationDataModel,
  UserDataModel,
  getOwnerInfo,
} from "@models/gitHub";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import accountCardStyle from "./AccountCard.module.scss";

export type AccountCardProps = {
  account: UserDataModel | OrganizationDataModel;
};

const AccountCard: React.FC<AccountCardProps> = ({ account }): JSX.Element => {
  return (
    <article className={accountCardStyle.card}>
      <section className={accountCardStyle.avatar}>
        <Avatar
          className={accountCardStyle["avatar-icon"]}
          imgUrl={account.avatarUrl}
          alt="Иконка профиля"
        />
      </section>
      <section className={accountCardStyle.content}>
        <div className={accountCardStyle["card-header"]}>
          <Link
            className={accountCardStyle["title-link"]}
            to={`${account.login}`}
            state={getOwnerInfo(account)}
          >
            <h2 className={accountCardStyle.title}>{account.login}</h2>
          </Link>
          <time
            className={accountCardStyle["register-date"]}
            dateTime={account.createdAt}
          >
            {`Joined ${account.createdAt}`}
          </time>
        </div>
        <p className={accountCardStyle.about}>
          {isUserModel(account)
            ? (account as UserDataModel).bio || "User has no bio"
            : (account as OrganizationDataModel).description ||
              "Oragnization has no description"}
        </p>
        <dl className={accountCardStyle.stats}>
          <dt className={accountCardStyle["stat-tltle"]}>Repos</dt>
          <dd className={accountCardStyle["stat-value"]}>
            {account.publicRepos}
          </dd>
          <dt className={accountCardStyle["stat-tltle"]}>Followers</dt>
          <dd className={accountCardStyle["stat-value"]}>
            {account.followers}
          </dd>
          <dt className={accountCardStyle["stat-tltle"]}>Following</dt>
          <dd className={accountCardStyle["stat-value"]}>
            {account.following}
          </dd>
        </dl>
        <ul className={accountCardStyle.socials}>
          <li>
            <LocationIcon className={accountCardStyle["social-icon"]} />
            {account.location || "Not available"}
          </li>
          <li>
            <TwitterIcon className={accountCardStyle["social-icon"]} />
            {account.twitterUsername || "Not available"}
          </li>
          <li>
            <LinkIcon className={accountCardStyle["social-icon"]} />
            {(account.blog && (
              <a
                className={accountCardStyle["social-link"]}
                href={account.blog}
              >
                {account.blog}
              </a>
            )) ||
              "Not available"}
          </li>
          <li>
            <MailIcon className={accountCardStyle["social-icon"]} />
            {(account.email && (
              <a
                className={accountCardStyle["social-link"]}
                href={account.email}
              >
                {account.email}
              </a>
            )) ||
              "Not available"}
          </li>
        </ul>
      </section>
    </article>
  );
};

export default memo(observer(AccountCard));
