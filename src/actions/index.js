import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { provider, storage } from "../firebase";
import { SET_USER } from "./actionType";
import { getAuth } from "firebase/auth";

const auth = getAuth();
const storageRef = ref(storage, "images");

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}

export function getUserAuth() {
  return (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}

export function postArticleApi(payload) {
  return (dispatch) => {
    if (payload.image !== "") {
      const upload = uploadBytesResumable(storageRef, payload.image);
      upload.on("state_changed", (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      });
    }
  };
}
