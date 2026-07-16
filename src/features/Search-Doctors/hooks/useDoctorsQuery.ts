import getDoctorsData from "../api/GetDoctorsData";
import { useQuery } from "@tanstack/react-query";

interface IProps {
    specialSelectedId?: number|string
    gender?: string
    keyword?:string
    page?:number
}
const useDoctorsQuery = ({ specialSelectedId, gender, keyword, page }: IProps) => {
    return useQuery({
        queryKey: ['doctors', specialSelectedId, gender, keyword, page],
        queryFn: () => getDoctorsData({ specialSelectedId: specialSelectedId, gender, keyword, page }),
    });
}
export default useDoctorsQuery;