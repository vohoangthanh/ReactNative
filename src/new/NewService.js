import AxiosInstance from "../helpers/AxiosInstance";

// export const getSubject = async () => {
//     const respone = await AxiosInstance().get('/subject');
//     console.log("Subject resspone: " + respone);
//     return respone.data;
// }

export const getSchedule = async () => {
    const respone = await AxiosInstance().get('/schedule');
    console.log("11 Subject resspone: " + respone);
    return respone.data;
}