import axios from 'axios'

//first call to localhost:8000 add api
const URL = 'http://localhost:8001/configurations';
export const addUsers = async (data) => {
    try{
        await axios.post(`${URL}/add`,data)
    }
    catch(err){
        console.log('Error while calling add User Api ',err);
    }
}

export const getUsers = async () => {
   try {
        return await axios.get(`${URL}/view`)
   } catch (error) {
        console.log('Error while calling get api ',error);
   } 
}