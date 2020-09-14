import { SET_USER, LOADING_USER } from "../types";

export const login = (data) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  setTimeout(() => {
    dispatch(getDataUser(data));
  }, 1000);
};

export const getDataUser = (data) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  setTimeout(() => {
    dispatch({
      type: SET_USER,
      payload: {
        username: data,
        following: 200,
        follower: 1000,
        images: {
          profile_picture:
            "http://res.cloudinary.com/dteyro1dc/image/upload/v1593109745/img-dokter/23-20200626-2256727a.jpg.jpg",
          banner: null,
        },
      },
    });
  }, 2000);
};
