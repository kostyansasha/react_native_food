import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer oP-fc5eLI8T34OYQ7AfCS6I_ATk2GV4Ea8l8TfSPLGrMjg77fqrczGNenOk6jsT1nWq4eoCnJbAVcsnd0bbnnRS4gJA_TQp5AyZ3TxKZy93pZ-428xH8VnTop-ujZHYx'
    }
});
