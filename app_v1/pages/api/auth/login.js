import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dbConnect from '../../../utils/dbConnect'; // Utility to connect to MongoDB
import User from '../../../models/User';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  await dbConnect();

  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token with user info
    const token = jwt.sign(
      { 
        userId: user._id, 
        email: user.email,
        fullName: user.fullName, // Include any other user info you need
        participantId: user.participantId,
        teamId: user.teamId
      },
      process.env.JWT_SECRET, // Use a strong secret key in your .env file
      { expiresIn: '1h' }
    );

    // Return token and user info
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        fullName: user.fullName,
        email: user.email,
        participantId: user.participantId,
        teamId: user.teamId
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
