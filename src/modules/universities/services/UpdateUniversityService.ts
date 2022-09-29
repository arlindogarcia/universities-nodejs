import AppError from '@shared/errors/AppError';
import UniversityModel from '@modules/universities/mongoose/models/UniversityModel';
import University from '@modules/universities/types/University';

interface IRequest {
  id: string;
  web_pages: string[];
  domains: string[];
  name: string;
}

class UpdateUniversityService {
  public async execute({
    id,
    name,
    web_pages,
    domains,
  }: IRequest): Promise<University> {
    const university = await UniversityModel.findById(id);

    if (!university) {
      throw new AppError('University not found');
    }

    await UniversityModel.updateOne(
      { _id: id },
      {
        name,
        web_pages,
        domains,
      },
    );

    const universityUpdated = await UniversityModel.findById(id);

    return universityUpdated as University;
  }
}

export default UpdateUniversityService;
