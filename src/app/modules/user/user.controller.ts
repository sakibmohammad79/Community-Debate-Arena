
import { Request, Response } from 'express';
import { UserService } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.createUser(req.body);
    
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: { user }
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to register user'
    });
  }
};

const getCurrentUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params; // Fixed: params theke nibo
    const user = await UserService.getUserById(userId);
    
    res.status(200).json({
      success: true,
      data: { user }
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message || 'User not found'
    });
  }
};

const getCurrentUserByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.body; // Body theke email nibo
    const user = await UserService.getUserByEmail(email);
    
    res.status(200).json({
      success: true,
      data: { user }
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message || 'User not found'
    });
  }
};

export const UserController = {
  createUser,
  getCurrentUserById,
  getCurrentUserByEmail,
};