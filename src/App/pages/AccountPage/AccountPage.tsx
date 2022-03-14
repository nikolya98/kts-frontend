import React, { useEffect } from "react";

import { AccountOwnerModel } from "@models/gitHub";
import ReposListStore from "@store/ReposListStore";
import useLocalStore from "@store/useLocalStore";
import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { useLocation, useParams } from "react-router-dom";

import accountPageStyle from "./AccountPage.module.scss";
import Owner from "./components/Owner";
import RepositoriesList from "./components/RepositoriesList";

type AccountPageParamsType = {
  name: string;
};

const AccountPage: React.FC = (): JSX.Element => {
  const reposListStore = useLocalStore(() => new ReposListStore());
  const location = useLocation();
  const { name } = useParams<AccountPageParamsType>();

  useEffect(
    () =>
      runInAction(() => {
        if (name) {
          reposListStore.getReposList({ accountName: name });
        }
      }),
    []
  );

  return (
    <div className={accountPageStyle.container}>
      <div className={accountPageStyle["account-page"]}>
        <Owner owner={location.state as AccountOwnerModel} />

        <RepositoriesList repositories={reposListStore.reposList} />
      </div>
    </div>
  );
};

export default observer(AccountPage);
