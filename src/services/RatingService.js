import axios from "axios";
const token = localStorage.getItem("token");
const id = localStorage.getItem("id");
const headers = {
  Authorization: ` ${token}`,
};

export const setRating = async (idUser, Value) => {
  const ratingRequest = {
    ratedUserId: parseInt(idUser),
    ratingUserId: parseInt(id),
    ratingValue: Value,
  };
  try {
    const response = await axios.post(
      "http://localhost:2023/ratings",
      ratingRequest,
      {
        headers,
      }
    );

    {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const gettRating = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:2023/ratings/average/${id}`
    );

    {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
