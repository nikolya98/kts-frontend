import { memo } from "react";

import Avatar from "@components/Avatar";
import StarIcon from "@components/StarIcon";
import { RepoItem } from "@store/GitHubStore/types";
import { getDate } from "@utils/getDate";

import tyleStyle from "./RepoTile.module.scss";

export type RepoTileProps = {
  item: RepoItem;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const RepoTile: React.FC<RepoTileProps> = ({ item, onClick }) => {
  return (
    <article
      className={`${tyleStyle.card} repositories-list__card`}
      onClick={onClick}
    >
      <div className={tyleStyle.avatar}>
        {/* letter */}
        <Avatar
          className={tyleStyle["avatar-icon"]}
          imgUrl={item.owner.avatar_url}
          alt={`Иконка профиля ${item.owner.login}`}
        />
      </div>
      <div className={tyleStyle.content}>
        <h2 className={`repository-title ${tyleStyle.title}`}>{item.name}</h2>
        <a className={tyleStyle.link} href={item.owner.html_url}>
          {item.owner.login}
        </a>
        <div className={tyleStyle.info}>
          <span>
            <StarIcon className={tyleStyle["star-icon"]} />{" "}
            {item.stargazers_count}
          </span>
          <span>
            Updated{" "}
            <time dateTime={item.updated_at}>{getDate(item.updated_at)}</time>
          </span>
        </div>
      </div>
    </article>
  );
};

export default memo(RepoTile);
