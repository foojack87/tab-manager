import { tabActions } from "./tabDetails";
import { myTabFormActions } from "./tab";
// Action Creator Thunk

const apiURL =
  "https://discord-bot-39db8-default-rtdb.firebaseio.com/tabs.json";

export const fetchTabData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(apiURL);

      if (!res.ok) {
        throw new Error("Could not fetch tab data");
      }
      const resData = await res.json();
      return resData;
    };
    try {
      const tabData = await fetchData();
      dispatch(tabActions.replaceTab(tabData));
      console.log(tabData);
    } catch (error) {
      dispatch(
        myTabFormActions.showNotification({
          status: "error",
          title: "Something wrong happened...",
          message: "failed to fetch data 😥",
        })
      );
    }
  };
};

export const sendTabData = (tab) => {
  return async (dispatch) => {
    dispatch(
      myTabFormActions.showNotification({
        status: "pending...",
        title: "Sending...",
        message: "sending tab data",
      })
    );
    const sendRequest = async () => {
      const res = await fetch(apiURL, {
        method: "PUT",
        body: JSON.stringify(tab),
      });
      if (!res.ok) {
        throw new Error("Failed to send tab data.");
      }
      console.log(tab);
    };

    try {
      await sendRequest();
      dispatch(
        myTabFormActions.showNotification({
          status: "success",
          title: "success!",
          message: "tab data sent.",
        })
      );
    } catch (error) {
      dispatch(
        myTabFormActions.showNotification({
          status: "error",
          title: "error!",
          message: "failed to send tab data...",
        })
      );
    }
  };
};
