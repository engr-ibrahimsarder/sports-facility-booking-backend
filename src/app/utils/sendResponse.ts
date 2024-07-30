import { Response } from "express";

type TResponse<T> = {
  statusCode: number;
  status: boolean;
  message?: string;
  data: T;
};
const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data.statusCode).json({
    status: data.status,
    message: data.message,
    data: data.data,
  });
};
export default sendResponse;
