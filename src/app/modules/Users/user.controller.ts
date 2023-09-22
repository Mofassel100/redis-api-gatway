import { Request, Response, NextFunction } from 'express';
const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    next(error);
  }
};
export const UserController = {
  createStudent
};
