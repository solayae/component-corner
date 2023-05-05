import axios from 'axios'
import authHeader from './authHeader'

// const API_URL = 'http://localhost:3001/api/'
const API_URL = '/api/'
const PUBLIC = 'all'
const USER = 'user'
const MOD = 'mod'
const ADMIN = 'admin'
///all
class UserService {
    getPublicContent(){
        return axios.get(`${API_URL}${PUBLIC}`)
    }

    getUserBoard(){
        return axios.get(`${API_URL}${USER}`, {headers: authHeader()})
    }

    getModerateBoard(){
        return axios.get(`${API_URL}${MOD}`, {headers: authHeader()})
    }

    getAdminBoard(){
        return axios.get(`${API_URL}${ADMIN}`, {headers: authHeader()})
    }

}

export  default new UserService()
