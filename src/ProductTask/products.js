import axios from "axios";

const apiEndPoint = "https://dummyjson.com/products";

export async function products() {
  try 
    {
      const response = await axios.get(apiEndPoint);
      return response.data;
    } 
  catch (error) 
    {
      console.error("Error fetching products:", error);
      return null;
    }
}