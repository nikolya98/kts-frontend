import Avatar from "@components/Avatar";
import StarIcon from "@components/StarIcon";
import { RepoItem } from "@store/GitHubStore/types";
import { getDate } from "@utils/getDate";

import "./RepoTile.css";

export type RepoTileProps = {
  item: RepoItem;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const RepoTile: React.FC<RepoTileProps> = ({ item, onClick }) => {
  return (
    <article className="card repositories-list__card" onClick={onClick}>
      <div className="card__avatar">
        {/* letter */}
        <Avatar
          className="card__avatar-icon"
          imgUrl={item.owner.avatar_url}
          alt={`Иконка профиля ${item.owner.login}`}
        />
      </div>
      <div className="card__content">
        <h2 className="repository-title card__title">{item.name}</h2>
        <a className="card__link" href={item.owner.html_url}>
          {item.owner.login}
        </a>
        <div className="card__info">
          <span className="card__stars">
            <StarIcon className="card__star-icon" /> {item.stargazers_count}
          </span>
          <span className="card__date">
            Updated{" "}
            <time dateTime={item.updated_at}>{getDate(item.updated_at)}</time>
          </span>
        </div>
      </div>
    </article>
  );
};

export default RepoTile;
