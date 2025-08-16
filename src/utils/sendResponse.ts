
import { Response } from 'express';

interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message?: string;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
  data?: T;
}

export const sendResponse = <T>(res: Response, data: ApiResponse<T>) => {
  const responseData: ApiResponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null || undefined,
    meta: data.meta || null || undefined,
    data: data.data || null || undefined
  };

  res.status(data.statusCode).json(responseData);
};