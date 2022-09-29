import AppError from '@shared/errors/AppError';
import UniversityModel from '@modules/universities/mongoose/models/UniversityModel';
import University from '@modules/universities/types/University';

interface IRequest {
  id: string;
}

class ShowUniversityService {
  public async execute({ id }: IRequest): Promise<University> {
    const university = await UniversityModel.findById(id);

    if (!university) {
      throw new AppError('University not found');
    }

    return university;
  }
}

export default ShowUniversityService;
