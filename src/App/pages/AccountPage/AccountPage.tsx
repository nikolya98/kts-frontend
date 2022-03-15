import React, { useState } from "react";

import { AccountOwnerModel, RepoItemModel } from "@models/gitHub";
import { Drawer } from "antd";
import "antd/dist/antd.css";
import { useLocation, useParams } from "react-router-dom";

import accountPageStyle from "./AccountPage.module.scss";
import BranchesList from "./components/BranchesList";
import Owner from "./components/Owner";
import RepositoriesList from "./components/RepositoriesList";

const AccountPage: React.FC = (): JSX.Element => {
  const owner = useLocation().state as AccountOwnerModel;
  const { name } = useParams();
  const [drawerIsVisible, setDrawerIsVisible] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState<RepoItemModel | null>(null);

  const selectRepo = (repo: RepoItemModel): void => {
    setSelectedRepo(repo);
    setDrawerIsVisible(true);
  };

  const onClose = (): void => {
    setDrawerIsVisible(false);
  };

  return (
    <div className={accountPageStyle.container}>
      <div className={accountPageStyle["account-page"]}>
        <Owner owner={owner} />
        <RepositoriesList onClick={selectRepo} account={name as string} />

        <Drawer
          placement="right"
          width="320"
          visible={drawerIsVisible}
          onClose={() => {
            onClose();
          }}
        >
          {selectedRepo && (
            <BranchesList account={name as string} repo={selectedRepo} />
          )}
        </Drawer>
      </div>
    </div>
  );
};

export default AccountPage;
