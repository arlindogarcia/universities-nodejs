import { Document } from 'mongoose';
import University from './University';

export default interface UniversityPagination extends Document, University {}
