import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();  // Initialize Prisma Client

// Create a new Todo
export const createTodo = async (req: Request, res: Response) => {
  const { title } = req.body;
  try {
    const todo = await prisma.todo.create({
      data: { title },
    });
    res.status(201).json(todo); // Respond with created todo
  } catch (error) {
    res.status(500).json({ message: 'Error creating todo', error });
  }
};

// Get all Todos
export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await prisma.todo.findMany(); // Fetch all todos
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos', error });
  }
};

// Get a single Todo by ID
export const getTodoById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const todo = await prisma.todo.findUnique({
      where: { id: parseInt(id) }, // Fetch todo by ID
    });
    if (todo) {
      res.json(todo); // Respond with the found todo
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todo', error });
  }
};

// Update a Todo by ID
export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  try {
    const todo = await prisma.todo.update({
      where: { id: parseInt(id) }, // Find todo by ID
      data: { title, completed }, // Update the todo with new data
    });
    res.json(todo); // Respond with the updated todo
  } catch (error) {
    res.status(404).json({ message: 'Todo not found or error updating', error });
  }
};

// Delete a Todo by ID
export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.todo.delete({
      where: { id: parseInt(id) }, // Find todo by ID
    });
    res.status(204).send(); // No content
  } catch (error) {
    res.status(404).json({ message: 'Todo not found or error deleting', error });
  }
};

