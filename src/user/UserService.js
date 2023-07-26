import AxiosInstance from "../helpers/AxiosInstance";
export const login = async (email, password) => {
    try {
      const body = {
        email: email,
        password: password
      }
      const res = await AxiosInstance().post('/user', body);
      console.log('login respone: ', res);
      return res;
    } catch (err) {
      console.log('register error: ', err);
      return err;
    }
  }