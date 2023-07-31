import AxiosInstance from "../helpers/AxiosInstance";


export const getSchedule = async () => {
    const respone = await AxiosInstance().get('/schedule');

    console.log("11 Subject resspone: " + respone);
    return respone.data;
}

export const addFeedback = async (data) => {
    const response = await AxiosInstance().post('/feedback/add', data);
    console.log("17 Subject resspone: " + response);
    return response.data;

    return respone;
}
export const getTest = async () => {
    const respone = await AxiosInstance().get('/test');
    return respone;

}