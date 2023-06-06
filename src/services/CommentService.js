import axios from "axios";
const token = localStorage.getItem("token");
const id = localStorage.getItem("id");
const headers = {
  Authorization: ` ${token}`,
};
export const saveComment = async (idannonce, comment) => {
  const post = {
    text: comment,
  };
  try {
    const response = await axios.post(
      `http://localhost:2023/api/comments/createComment/${idannonce}`,
      post,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getComments = async (idannonce) => {
  try {
    const response = await axios.get(
      `http://localhost:2023/api/comments/get/${idannonce}`,

      { headers }
    );

    {
      console.log("response.data", response);
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};
export const deleteComment = async (idcomment) => {
  try {
    const response = await axios.delete(
      `http://localhost:2023/api/comments/${idcomment}`,

      { headers }
    );

    {
      console.log("response.data", response);
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};
