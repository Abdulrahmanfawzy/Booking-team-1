import { axiosInstance } from "@/services/axiosInstance";

interface IProps {
    specialSelectedId?: number|string
    gender?: string
    keyword?:string
    page?:number
}
const getDoctorsData= async({specialSelectedId, gender, keyword, page }: IProps)=>{
    try{
        const {data}= await axiosInstance.get(`/doctors?specialist_id=${specialSelectedId}&keyword=${keyword}&page=${page}`);
        return data;
    }catch(error){
        console.error("Error fetching doctors data:", error);
        throw error;
    }
}
export default getDoctorsData;