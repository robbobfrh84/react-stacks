import axios from "axios"

export default {

  // 👥 User
  getUser: function(){
    return axios.get("/api/user")
  },
  logIn: function(user){
    return axios.post("/api/user", user)
  },
  logOut: function(){
    return axios.get("/api/user/logout")
  },
  signUp: function(newUser){
    return axios.post("/api/user/signup", newUser)
  }

}
