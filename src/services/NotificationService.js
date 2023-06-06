import axios from "axios";
const token = localStorage.getItem("token");
const headers = {
  Authorization: ` ${token}`,
};

export const getNotifications = async (user_id) => {
  try {
    console.log("user_id", user_id);
    const response = await axios.get(
      `http://localhost:2023/notifications/getNotifications/${user_id}`
    );
    {
      console.log("response.data", response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data.message);
  }
};
