'use server';


import bcrypt from 'bcryptjs';
import prisma from '../lib/prisma';

export async function createUser(formData: FormData) {
  const name = formData.get('name')?.toString();
  const email = formData.get('email')?.toString();
  const mobile = formData.get('phoneNumber')?.toString();
  const password = formData.get('password')?.toString();
  const role = formData.get('role')?.toString() as any;

  if (!name || !email || !password || !role) {
    throw new Error('⚠️ Name, email, password, and role are required');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        name,
        email,
        mobile,
        password: hashedPassword,
        role,
      },
    });

    return { success: true, user };
  } catch (error: any) {
    if (error.code === 'P2002') {
      // Prisma unique constraint error
      return { success: false, error: 'Email already exists' };
    }
    return { success: false, error: error.message };
  }
}

