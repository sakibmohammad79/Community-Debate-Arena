
import bcrypt from 'bcrypt';
import {  createUserSchema } from './user.validate';
import { prisma } from '../../../helper/prisma';



const createUser = async (userData: any) => {
 
  
  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email: userData.email }
  });
  
  if (existingUser) {
    throw new Error('User with this email already exists');
  }
  
  // Hash password
  const hashedPassword = await bcrypt.hash(userData.password, 12);
  
  // Create user
  const user = await prisma.user.create({
    data: {
      ...userData,
      password: hashedPassword
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
      emailVerified: true,
      createdAt: true
    }
  });
  
  return user;
};

const getUserById = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      role: true,
      isActive: true,
      emailVerified: true,
      createdAt: true,
      updatedAt: true
    }
  });
  
  if (!user) {
    throw new Error('User not found');
  }
  
  return user;
};

const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      role: true,
      isActive: true,
      emailVerified: true,
      createdAt: true,
      updatedAt: true
    }
  });
  
  if (!user) {
    throw new Error('User not found');
  }
  
  return user;
};

export const UserService = {
  createUser,
  getUserById,
  getUserByEmail,
};