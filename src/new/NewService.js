import AxiosInstance from "../helpers/AxiosInstance";


export const getSchedule = async () => {
    const respone = await AxiosInstance().get('/schedule');
    return respone;
}
export const getTest = async () => {
    const respone = await AxiosInstance().get('/test');
    return respone;
}