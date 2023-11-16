import axios from "axios";

const authQuery = axios.create({
    baseURL: 'https://localhost:7179/api/MercadoPago',
})


const initialization = {
    amount: 100,
};
   
   
export const onSubmit = async (formData) => {
    // callback llamado al hacer clic en el botón enviar datos
    try{
      const response = await axios.post('/pay', formData);
      console.log(response);
    }catch(error){
        console.log(error);
        return error
    }
};

export default{
    onSubmit
}
   