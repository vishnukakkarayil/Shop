import axios from "axios"

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTUzZDIxN2ZkMzY2NzRjZGM2ODNkYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDM0OTY2NywiZXhwIjoxNjkwNjA4ODY3fQ.yXeThQ-QkNVZQJ6SWEc9JBtLcqWI86ZlwU-Gmumf4g0"

export const publicRequest = axios.create({
    baseUrl: BASE_URL
})

export const userRequest = axios.create({
    baseUrl: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})