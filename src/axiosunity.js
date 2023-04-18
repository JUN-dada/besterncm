import axios from 'axios';

// const baseURL = 'https://service-o15lm07j-1300177834.cd.apigw.tencentcs.com/release/';

export const axiosInstance = axios.create({
    baseURL: '/api',
    timeout: 5000, // 设置超时时间
});

const axioswrapper = async (url, method = 'GET', data = null, headers = {}) => {
    try {
        const response = await axiosInstance({
            url,
            method,
            data,
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default axioswrapper;
