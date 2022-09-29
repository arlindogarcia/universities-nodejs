import University from '@modules/universities/types/University';
import { Schema, model } from 'mongoose';

const UniversitySchema = new Schema({
  name: String,
  alpha_two_code: String,
  state_province: String,
  country: String,
  domains: [String],
  web_pages: [String],
});

export default model<University>('University', UniversitySchema);
