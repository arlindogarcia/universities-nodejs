import UniversityPagination from '@modules/universities/types/UniversityPagination';
import { Schema, model, PaginateModel } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const UniversitySchema = new Schema({
  name: String,
  alpha_two_code: String,
  state_province: String,
  country: String,
  domains: [String],
  web_pages: [String],
});

UniversitySchema.plugin(mongoosePaginate);

export default model<UniversityPagination, PaginateModel<UniversityPagination>>(
  'University',
  UniversitySchema,
);
