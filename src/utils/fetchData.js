import axios from 'axios'
import { BASE_URL } from './config'

export const getDataAPI = async (url, token) => {
    const res = await axios.create({ baseURL: BASE_URL }).get(`/api/${url}`, {
        headers: { Authorization: token }
    })
    return res
}

export const postDataAPI = async (url, post, token) => {
    const res = await axios.create({ baseURL: BASE_URL }).post(`/api/${url}`, post, {
        headers: { Authorization: token }
    })
    return res
}

export const putDataAPI = async (url, post, token) => {
    const res = await axios.create({ baseURL: BASE_URL }).put(`/api/${url}`, post, {
        headers: { Authorization: token }
    })
    return res
}

export const patchDataAPI = async (url, post, token) => {
    const res = await axios.create({ baseURL: BASE_URL }).patch(`/api/${url}`, post, {
        headers: { Authorization: token }
    })
    return res
}

export const deleteDataAPI = async (url, token) => {
    const res = await axios.create({ baseURL: BASE_URL }).delete(`/api/${url}`, {
        headers: { Authorization: token }
    })
    return res
}