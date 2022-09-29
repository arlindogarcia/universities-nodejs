import AppError from '@shared/errors/AppError';
import UniversityModel from '@modules/universities/mongoose/models/UniversityModel';
import University from '@modules/universities/types/University';

interface IRequestCreate {
  alpha_two_code: string;
  web_pages: string[];
  name: string;
  country: string;
  domains: string[];
  state_province: string | null;
}

class CreateUniversityService {
  public async execute({
    alpha_two_code,
    web_pages,
    name,
    country,
    domains,
    state_province,
  }: IRequestCreate): Promise<University> {
    const universityExists = await UniversityModel.find({
      name: name,
      country: country,
      state_province: state_province,
    });

    if (universityExists.length) {
      throw new AppError('This University already exists.');
    }

    const university = await UniversityModel.create({
      alpha_two_code,
      web_pages,
      name,
      country,
      domains,
      state_province,
    });

    return university;
  }
}

export default CreateUniversityService;
