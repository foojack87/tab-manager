import { Fragment } from "react";
import Layout from "./components/Layout/Layout";
import MainContainer from "./components/Layout/MainContainer";
import TabContainer from "./components/Tab/TabContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    <Fragment>
      <Layout>
        <MainContainer>
          <UsersContainer />
          <TabContainer />
        </MainContainer>
      </Layout>
    </Fragment>
  );
}

export default App;
