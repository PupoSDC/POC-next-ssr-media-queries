import axios from "axios";
import { useQuery, QueryClient } from "react-query";
import { API_ADDRESSES, QUERY_KEY_ADDRESSES } from "src/config/reactQuery";

export type Address = {
  building_number: string;
  city: string;
  city_prefix: string;
  city_suffix: string;
  community: string;
  country: string;
  country_code: string;
  full_address: string;
  id: number;
  latitude: number;
  longitude: number;
  mail_box: string;
  postcode: string;
  secondary_address: string;
  state: string;
  state_abbr: string;
  street_address: string;
  street_name: string;
  street_suffix: string;
  time_zone: string;
  uid: string;
  zip: string;
  zip_code: string;
};

const getAddresses = async (): Promise<Address[]> => {
  await new Promise((r) => setTimeout(r, 1000));
  return (await axios.get<Address[]>(API_ADDRESSES)).data;
};

export const useAddresses = (): Address[] => {
  const { data } = useQuery(QUERY_KEY_ADDRESSES, getAddresses);
  return data ?? [];
};

export const prefetchAddresses = async (queryClient: QueryClient) =>
  await queryClient.prefetchQuery(QUERY_KEY_ADDRESSES, getAddresses);
