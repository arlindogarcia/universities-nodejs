import { Request, Response } from 'express';
import CreateOrderService from '@modules/universities/services/CreateUniversityService';
import ListUniversityService from '@modules/universities/services/ListUniversityService';
import ShowUniversityService from '@modules/universities/services/ShowUniversityService';

interface IRequestCreate {
  alpha_two_code: string;
  web_pages: string[];
  name: string;
  country: string;
  domains: string[];
  state_province: string | null;
}

export default class OrdersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUniversities = new ListUniversityService();

    const universities = await listUniversities.execute();

    return response.json(universities);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showUniversity = new ShowUniversityService();

    const university = await showUniversity.execute({ id });

    return response.json(university);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      alpha_two_code,
      web_pages,
      name,
      country,
      domains,
      state_province,
    }: IRequestCreate = request.body;

    const createUniversity = new CreateOrderService();

    const university = await createUniversity.execute({
      alpha_two_code,
      web_pages,
      name,
      country,
      domains,
      state_province,
    });

    return response.json(university);
  }
}
