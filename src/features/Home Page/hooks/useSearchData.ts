import { useQuery } from "@tanstack/react-query";
import { searchData } from "../Services/homeApi";

export const useSearchData = (query: string) => {
  return useQuery({
    queryKey: ["search", query],
    queryFn: () => searchData(query),
    enabled: !!query,
  });
};