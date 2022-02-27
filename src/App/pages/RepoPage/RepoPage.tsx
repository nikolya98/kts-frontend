import { useReposContext } from "@config/contexts/ReposContext";
import { useParams } from "react-router-dom";

const RepoPage = () => {
  const { id } = useParams();
  const { load } = useReposContext();
  if (id) {
    load(id);
  }

  return <h1>{id}</h1>;
};

export default RepoPage;
