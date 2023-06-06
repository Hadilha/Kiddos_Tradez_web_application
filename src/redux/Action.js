export const SET_CATEGORY = "SET_CATEGORY";
export const SET_SEARCH = "SET_SEARCH";
export const SET_SOLD_OUT = "SET_SOLD_OUT";
export const SET_ID_ANNONCE = "SET_ID_ANNONCE";
export const SET_ADMIN = "SET_ADMIN";
export const SET_IS_A_FAVORIE = "SET_IS_A_FAVORIE";
export const SET_UPDATE_NOTIF = "SET_UPDATE_NOTIF";
export const SET_UPDATE_NOTIF_BOOLEAN = "SET_UPDATE_NOTIF_BOOLEAN";

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category,
});
export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search,
});
export const setSoldOut = (soldout) => ({
  type: SET_SOLD_OUT,
  payload: soldout,
});
export const setIdAnnonce = (idannonce) => ({
  type: SET_ID_ANNONCE,
  payload: idannonce,
});
export const setAdmin = (admin) => ({
  type: SET_ADMIN,
  payload: admin,
});
export const setIsAFavorie = (isafavorie) => ({
  type: SET_IS_A_FAVORIE,
  payload: isafavorie,
});
export const setUpdateNotif = (updatenotif) => ({
  type: SET_UPDATE_NOTIF,
  payload: updatenotif,
});
export const setUpdateNotifBolean = (updatenotifbolean) => ({
  type: SET_UPDATE_NOTIF_BOOLEAN,
  payload: updatenotifbolean,
});
