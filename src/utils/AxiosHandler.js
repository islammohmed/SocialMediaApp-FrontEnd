import axios from "axios";
const AxiosHandler = axios.create({
	baseURL: "https://socialmediaapp-backend-13xf.onrender.com/api/v1",
});
export default AxiosHandler;
