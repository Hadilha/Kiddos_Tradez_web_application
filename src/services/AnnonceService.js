import axios from "axios";

const token = localStorage.getItem("token");
const id = localStorage.getItem("id");
const headers = {
  Authorization: ` ${token}`,
};
export const getAnnonceByCategory = async (category) => {
  try {
    const response = await axios.get(
      `http://localhost:2023/api/annonces/get-annonce/${category}`
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};
export const getAllAnnonces = async () => {
  try {
    const response = await axios.get(
      "http://localhost:2023/api/annonces/get-all-annonces"
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};
export const getAnnonce = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:2023/api/annonces/${id}/get-annonce`
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
export const getUser = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:2023/api/annonces/${id}/get-user`
    );

    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
export const annonceForSale = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:2023/api/annonces/${id}/for-sale`
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
export const annonceForExchange = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:2023/api/annonces/${id}/for-exchange`
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
export const modifyAnnonce = async (id, annonce) => {
  try {
    const response = await axios.put(
      `http://localhost:2023/api/annonces/${id}/modify-annonce`,
      annonce,
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
export const AddAnnonce = async (annonce, setErrorMessage) => {
  console.log("   ");
  try {
    const response = await axios.post(
      "http://localhost:2023/api/annonces/add-annonce",
      annonce,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: ` ${token}`,
        },
      }
    );

    {
      return response.data;
    }
  } catch (error) {
    console.log("im in the error999");
    setErrorMessage("Please fill in the required fields");
    console.log(error.response.data.message);
  }
};
export const Unarchiveannonce = async (idannonce) => {
  try {
    const response = await axios.put(
      `http://localhost:2023/api/annonces/${idannonce}/archive-annonce`,
      {},

      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoYWRpbEhhIiwiaWQiOjQsImlhdCI6MTY4NTg0MDAxMSwiZXhwIjoxNjg1OTI2NDExfQ.sP10iJb-5kR7lNKacOmr3q7G9kWukoYnOZ653I0phREhh_KWpGbAL0MzFV5XFSgfEwRwrL8ZUj5e0l3rXZcepw ",
        },
      }
    );

    {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
