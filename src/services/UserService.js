import axios from "axios";

import { setAdmin } from "../redux/Action";

const token = localStorage.getItem("token");
const headers = {
  Authorization: `${token}`,
};

export const GetUser = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:2023/api/auth/${id}/get-user`
    );
    {
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data.message);
  }
};
export const getallusers = async () => {
  try {
    const response = await axios.get(
      `http://localhost:2023/api/auth/get-all-users`
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
export const updateProfilePicture = async (profilePicture) => {
  console.log("profilePicture", profilePicture);
  try {
    const response = await axios.put(
      `http://localhost:2023/api/auth/update-profile-picture`,
      profilePicture,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const updateUsername = async (textFieldusername) => {
  try {
    const response = await axios.put(
      `http://localhost:2023/api/auth/update-username?newUsername=${textFieldusername}`,
      {},
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const updateFirstName = async (textFieldfirstname) => {
  try {
    const response = await axios.put(
      `http://localhost:2023/api/auth/update-firstname?newFirstName=${textFieldfirstname}`,
      {},
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const updateLastName = async (textFieldlastname) => {
  try {
    const response = await axios.put(
      `http://localhost:2023/api/auth/update-lastname?newLastName=${textFieldlastname}`,
      {},
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
export const updateEmail = async (textFieldemail) => {
  try {
    const response = await axios.put(
      `http://localhost:2023/api/auth/update-email?newEmail=${textFieldemail}`,
      {},
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const updateHome = async (textFieldhome) => {
  try {
    const response = await axios.put(
      `http://localhost:2023/api/auth/update-homeaddress?newHomeAddress=${textFieldhome}`,
      {},
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const updateDescription = async (textFielddescription) => {
  try {
    const response = await axios.put(
      `http://localhost:2023/api/auth/update-description?newDescription=${textFielddescription}`,
      {},
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
export const updatePassword = async (textFieldpassword) => {
  try {
    const response = await axios.put(
      `http://localhost:2023/api/auth/update-password?newPassword=${textFieldpassword}`,
      {},
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const updatePhone = async (textFieldphone) => {
  try {
    const response = await axios.put(
      `http://localhost:2023/api/auth/update-phone?newPhone=${textFieldphone}`,
      {},
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
export const deleteAccount = async () => {
  console.log(" alo  ");
  try {
    const response = await axios.delete(
      `http://localhost:2023/api/auth/delete-account`,
      {},
      { headers: { Authorization: ` ${token}` } }
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
export const resetPassword = async (password) => {
  try {
    const response = await axios.post(
      `http://localhost:2023/api/auth/reset-password?token=${token}&newPassword=${password}`,
      {},
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
export const signin = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:2023/api/auth/signin",
      data
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
export const signup = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:2023/api/auth/signup",
      data
    );
    {
      return response;
    }
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const sendEmail = async (email) => {
  try {
    const response = await axios.post(
      `http://localhost:2023/api/auth/forgot-password?email=${email}`,
      {},

      {
        headers,
      }
    );

    {
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data.message);
  }
};
