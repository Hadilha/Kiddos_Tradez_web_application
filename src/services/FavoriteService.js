import axios from "axios";
const token = localStorage.getItem("token");
const headers = {
  Authorization: ` ${token}`,
};
export const addToFavorie = async (id) => {
  try {
    const response = await axios.post(
      `http://localhost:2023/api/favorites/${id}/add-to-favorites`,
      null,
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
export const removeFromFavorie = async (idfavorie) => {
  console.log("im in the remove favorite", idfavorie);
  try {
    const response = await axios.delete(
      `http://localhost:2023/api/favorites/${idfavorie}/remove-from-favorites`,

      {
        headers,
      }
    );

    {
      console.log("data", response.data);
    }
  } catch (error) {
    console.log(error.response.data.message);
  }
};
export const getAllFavorite = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:2023/api/favorites/${id}/get-all-favorites`
    );

    {
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data.message);
  }
};
