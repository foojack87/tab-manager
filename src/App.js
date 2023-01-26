import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "./components/Layout/Layout";
import MainContainer from "./components/Layout/MainContainer";
import { myTabFormActions } from "./components/store/tab";
import { fetchTabData, sendTabData } from "./components/store/tab-actions";
import TabContainer from "./components/Tab/TabContainer";
import TabForm from "./components/Tab/TabForm";
import UsersContainer from "./components/Users/UsersContainer";

let initial = true;

function App() {
  const dispatch = useDispatch();
  const showTabForm = useSelector((state) => state.tab.isTabFormShown);
  const tabs = useSelector((state) => state.tabDetails);
  // const notifications = useSelector((state) => state.tab.notifications);

  useEffect(() => {
    dispatch(fetchTabData());
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }

    if (tabs.changed) {
      dispatch(sendTabData(tabs.tab));
    }
  }, [dispatch, tabs]);

  return (
    <Fragment>
      {showTabForm && <TabForm />}
      <Layout>
        <MainContainer>
          <UsersContainer />
          {tabs.tab.length > 0 && <TabContainer />}
        </MainContainer>
      </Layout>
    </Fragment>
  );
}

export default App;
