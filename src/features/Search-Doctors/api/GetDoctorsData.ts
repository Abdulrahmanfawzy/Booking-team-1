import { axiosInstance } from "@/services/axiosInstance";

interface IProps {
    specialSelectedId?: number|null
    gender?: string
    keyword?:string
    page?:number
}
const getDoctorsData= async({specialSelectedId, gender, keyword, page }: IProps)=>{
    try{
        const {data}= await axiosInstance.get(`/doctors`, { params: { specialist_id: specialSelectedId, gender, keyword, page,}});
        return data;
    }catch(error){
        console.error("Error fetching doctors data:", error);
        throw error;
    }
}
export default getDoctorsData;