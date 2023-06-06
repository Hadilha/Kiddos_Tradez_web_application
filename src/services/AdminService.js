import axios from "axios";

const token = localStorage.getItem("token");
const id = localStorage.getItem("id");
const headers = {
  Authorization: ` ${token}`,
};
export const Getallusers = async () => {
  try {
    const response = await axios.get(
      `http://localhost:2023/admin/get-all-users`
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
export const getAllAnnonces = async () => {
  try {
    const response = await axios.get(
      `http://localhost:2023/admin/get-all-annonces`
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
export const archiveAnnonce = async (idannonce) => {
  try {
    const response = await axios.put(
      `http://localhost:2023/admin/annonces/archive/${idannonce}`
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
export const blockUser = async (iduser, reason) => {
  try {
    const response = await axios.post(
      `http://localhost:2023/admin/block-user/${iduser}?reason=${reason}`
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
