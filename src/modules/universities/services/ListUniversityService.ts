import UniversityModel from '@modules/universities/mongoose/models/UniversityModel';
import UniversityPagination from '@modules/universities/types/UniversityPagination';
import { PaginateResult } from 'mongoose';

interface IRequest {
  filters: {
    country?: string;
  };
  page?: number;
  limit?: number;
}

class ListUniversityService {
  public async execute({
    filters,
    page,
    limit,
  }: IRequest): Promise<PaginateResult<UniversityPagination>> {
    const options = {
      page: page || 1,
      limit: limit || 20,
      select: '_id name country state_province',
    };

    let filter = {};

    if (filters.country) {
      filter = {
        country: filters.country,
      };
    }

    const universities = await UniversityModel.paginate(filter, options);

    return universities;
  }
}

export default ListUniversityService;
