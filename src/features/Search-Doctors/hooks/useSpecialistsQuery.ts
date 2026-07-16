import { useQuery } from "@tanstack/react-query"
import getSpecialistsList from "../api/getSpecialistsList"

const useSpecialistsQuery = () => {
    return useQuery({
        queryKey: ['specialists'],
        queryFn: getSpecialistsList,
    })
}

export default useSpecialistsQuery