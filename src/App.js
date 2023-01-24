import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "./components/Layout/Layout";
import MainContainer from "./components/Layout/MainContainer";
import { myTabFormActions } from "./components/store/tab";
import TabContainer from "./components/Tab/TabContainer";
import TabForm from "./components/Tab/TabForm";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  const showTabForm = useSelector((state) => state.tab.isTabFormShown);
  const tabItems = useSelector((state) => state.tabDetails.tab);

  return (
    <Fragment>
      {showTabForm && <TabForm />}
      <Layout>
        <MainContainer>
          <UsersContainer />
          {tabItems.length > 0 && <TabContainer />}
        </MainContainer>
      </Layout>
    </Fragment>
  );
}

export default App;
