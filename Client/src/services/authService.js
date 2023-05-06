import axios from 'axios'

// const API_URL_SIGNIN = 'http://localhost:3001/api/auth/signin'
// const API_URL_SIGNUP = 'http://localhost:3001/api/auth/signup'


const API_URL_SIGNIN = '/api/auth/signin'
const API_URL_SIGNUP = '/api/auth/signup'



///signin 

class AuthServices {
    login (email, password){
        return axios.post(API_URL_SIGNIN,{email, password})
                .then((response)=>{
                    if (response.data.accessToken) {
                        localStorage.setItem("user", JSON.stringify(response.data));
                      }
                    console.log(response.data)
                    return response.data
                })
                
    }

    logout (){
        localStorage.removeItem('user')
    }

    register(name, email, password ){
        return axios.post(API_URL_SIGNUP, {
            name,
            email,
            password
        })
    }

}

export default new AuthServices()

