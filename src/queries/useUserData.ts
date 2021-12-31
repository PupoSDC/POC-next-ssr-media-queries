import axios from "axios";
import { useQuery, QueryClient } from "react-query";
import { API_USER_DATA, QUERY_KEY_USER_DATA } from "src/config/reactQuery";

export type UserData = {
  address: {
    city: string;
    coordinates: { lat: number; lng: number };
    country: string;
    state: string;
    street_address: string;
    street_name: string;
    zip_code: string;
  };
  avatar: string;
  credit_card: {
    cc_number: string;
  };
  date_of_birth: string;
  email: string;
  employment: {
    title: string;
    key_skill: string;
  };
  first_name: string;
  gender: string;
  id: 637;
  last_name: string;
  password: string;
  phone_number: string;
  social_insurance_number: string;
  subscription: {
    plan: string;
    status: string;
    payment_method: string;
    term: string;
  };
  uid: string;
  username: string;
};

const getUserData = async (): Promise<UserData> => {
  await new Promise((r) => setTimeout(r, 1000));
  return (await axios.get<UserData>(API_USER_DATA)).data;
};

export const useUserData = (): UserData | null => {
  const { data } = useQuery(QUERY_KEY_USER_DATA, getUserData);
  return data ?? null;
};

export const prefetchUserData = async (queryClient: QueryClient) =>
  await queryClient.prefetchQuery(QUERY_KEY_USER_DATA, getUserData);
