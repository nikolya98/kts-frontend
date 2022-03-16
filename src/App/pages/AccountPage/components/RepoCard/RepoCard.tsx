import StarIcon from "@components/StarIcon";
import { RepoItemModel } from "@models/gitHub";

import repoCardStyle from "./RepoCard.module.scss";

type RepoCardProps = {
  repo: RepoItemModel;
};

const RepoCard: React.FC<RepoCardProps> = ({ repo }): JSX.Element => {
  return (
    <article className={repoCardStyle.card}>
      <div className={repoCardStyle.header}>
        <h3 className={repoCardStyle.title}>{repo.name}</h3>
        <span className={repoCardStyle.visibility}>{repo.visibility}</span>
        <span className={repoCardStyle.stars}>
          <StarIcon className={repoCardStyle["star-icon"]} />
          {repo.stargazersCount}
        </span>
      </div>
      <p className={repoCardStyle.description}>
        {repo.description || "This repository has no description"}
      </p>
      <ul className={repoCardStyle.info}>
        <li>Language: {repo.language || "Not available"}</li>
        <li>
          Updated: <time>{repo.updatedAt}</time>
        </li>
      </ul>
    </article>
  );
};

export default RepoCard;
