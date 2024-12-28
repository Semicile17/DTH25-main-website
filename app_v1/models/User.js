import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema(
  {
    instituteId: { type: String, required: true ,unique: true},
    teamId: { type: String, required: false , unique: true},
    fullName: { type: String, required: true },
    branch: { type: String, required: true },
    year: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    puzzlesSolved: { type: Number, default: 0 }, // Tracks the total number of puzzles solved

    // Puzzle statuses 
    puzzle1Status: { type: String, enum: ['started','failed', 'completed'], default: 'failed' },
    puzzle2Status: { type: String, enum: ['started', 'failed','completed'], default: 'failed' },
    puzzle3Status: { type: String, enum: ['started', 'failed','completed'], default: 'failed' },
    puzzle4Status: { type: String, enum: ['started','failed', 'completed'], default: 'failed' },

    // Time taken for each puzzle in seconds
    puzzle1Time: { type: Number, default: 0 }, // Time in seconds
    puzzle2Time: { type: Number, default: 0 },
    puzzle3Time: { type: Number, default: 0 },
    puzzle4Time: { type: Number, default: 0 },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

export default mongoose.models.User || mongoose.model('User', UserSchema);
