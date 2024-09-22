// src/pages/api/todos/index.js
import Todolist from '../../../models/Todolist';
import sequelize from '../../../database/config/sequelize';
import { verifyToken } from '../../../utils/jwt';

export default async function handler(req, res) {
    const { method } = req;

    await sequelize.sync();

    switch (method) {
        case 'GET':
            try {
                const token = req.headers.authorization?.split(' ')[1];
                const decoded = await verifyToken(token);
                const userId = decoded.userId;

                const todos = await Todolist.findAll({ where: { userId } });
                res.status(200).json(todos);
            } catch (error) {
                res.status(500).json({ error: 'Failed to fetch todos' });
            }
            break;
            case 'POST':
                try {
                    const { task_description } = req.body;
                    const token = req.headers.authorization?.split(' ')[1];
            
                    // Check if the token exists
                    if (!token) {
                        return res.status(400).json({ error: 'No token provided' });
                    }
            
                    // Verify the token
                    const decoded = await verifyToken(token);
            
                    // Log decoded token for debugging
                    console.log('Decoded token:', decoded);
            
                    const userId = decoded.userId;
            
                    // Check if userId is correctly extracted
                    if (!userId) {
                        return res.status(400).json({ error: 'User ID not found in token' });
                    }
            
                    // Create new todo item
                    const newTodo = await Todolist.create({ 
                        task_description, 
                        is_completed: false, 
                        is_locked: false,
                        userId 
                    });
            
                    // Send response
                    res.status(201).json(newTodo);
                } catch (error) {
                    // Log the error for debugging
                    console.error('Failed to add todo:', error);
                    res.status(500).json({ error: 'Failed to add todo' });
                }
                break;
        case 'PUT':
            try {
                const { id, is_completed, is_locked } = req.body;
                const token = req.headers.authorization?.split(' ')[1];
                const decoded = await verifyToken(token);
                const userId = decoded.userId;

                if (id === undefined) {
                    return res.status(400).json({ error: 'ID is required' });
                }

                const [updated] = await Todolist.update(
                    { is_completed, is_locked },
                    { where: { id, userId } }
                );

                if (updated === 0) {
                    return res.status(404).json({ error: 'Todo not found' });
                }

                const updatedTodo = await Todolist.findByPk(id);
                res.status(200).json(updatedTodo);
            } catch (error) {
                res.status(500).json({ error: 'Failed to update todo' });
            }
            break;
            case 'DELETE':
                try {
                  const { id } = req.body;
              
                  // Extract the token and decode it
                  const token = req.headers.authorization?.split(' ')[1];
                  if (!token) {
                    return res.status(401).json({ error: 'Token missing or invalid' });
                  }
              
                  const decoded = await verifyToken(token);
                  const userId = decoded.userId;
              
                  if (!id) {
                    return res.status(400).json({ error: 'Todo ID is required' });
                  }
              
                  // Delete the todo where both ID and userId match
                  const result = await Todolist.destroy({
                    where: { id, userId } // Ensure that the query checks the userId
                  });
              
                  if (result === 0) {
                    return res.status(404).json({ error: 'Todo not found' });
                  }
              
                  res.status(204).end(); // No content after deletion
                } catch (error) {
                  console.error('Error deleting todo:', error);
                  res.status(500).json({ error: 'Failed to delete todo' });
                }
                break;              
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
