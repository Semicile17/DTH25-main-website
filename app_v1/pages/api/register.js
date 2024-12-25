import { hash } from 'bcryptjs'; // To hash passwords
import nodemailer from 'nodemailer';
import dbConnect from '../../utils/dbConnect'; // Your database connection utility
import User from '../../models/User'; // Your User model

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { instituteId, fullName, branch, year, email } = req.body;

  if (!instituteId || !fullName || !branch || !year || !email) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    await dbConnect();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists with this email.' });
    }

    // Generate random password
    const password = Math.random().toString(36).slice(-8);

    // Hash password
    const hashedPassword = await hash(password, 10);

    // Save user to database
    const newUser = new User({
      instituteId,
      fullName,
      branch,
      year,
      email,
      password: hashedPassword, // Store hashed password
    });
    await newUser.save();

    // Send email with the password
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or any other email provider
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Registration Password',
      text: `Hello ${fullName},\n\nYour registration is successful. Here is your password: ${password}\n\nPlease change it after logging in.`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(201).json({ message: 'Registration successful. Password sent to email.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}
