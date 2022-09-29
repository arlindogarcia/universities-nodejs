import UniversityModel from '@modules/universities/mongoose/models/UniversityModel';
import University from '@modules/universities/types/University';

class ListUniversityService {
  public async execute(): Promise<University[]> {
    const universities = await UniversityModel.find(
      {},
      '_id name country state_province',
    );

    return universities;
  }
}

export default ListUniversityService;
