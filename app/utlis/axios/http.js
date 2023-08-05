import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:5000/api/v1/",
	timeout: 1000,
	headers: {
		Accept: "application/json",
	},
});

export default http;
