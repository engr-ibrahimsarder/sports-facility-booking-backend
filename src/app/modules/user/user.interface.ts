export type TUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: number;
  role: "admin" | "user";
  address: string;
  isDeleted: boolean;
};
