import { axiosInstance } from "@/services/axiosInstance";
import type { TDoctor } from "../types/types";

const getSpecialistsList = async () => {
    try {
        const {data}: {data:{data: TDoctor[]}} = await axiosInstance.get('/specialists');
        console.log(data);
        return data;
    }catch (error) {
        console.error("Error fetching specialists list:", error);
        throw error;
    }
}
export default getSpecialistsList;