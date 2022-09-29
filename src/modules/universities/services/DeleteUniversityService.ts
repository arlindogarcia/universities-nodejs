import AppError from '@shared/errors/AppError';
import UniversityModel from '@modules/universities/mongoose/models/UniversityModel';

interface IRequest {
  id: string;
}

class DeleteUniversityService {
  public async execute({ id }: IRequest): Promise<void> {
    const university = await UniversityModel.findById(id);

    if (!university) {
      throw new AppError('University not found');
    }

    await UniversityModel.findByIdAndDelete({ _id: id });
  }
}

export default DeleteUniversityService;
