import { Request, Response } from 'express';

import ListUniversityService from '@modules/universities/services/ListUniversityService';

export default class OrdersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUniversities = new ListUniversityService();

    const universities = await listUniversities.execute();

    return response.json(universities);
  }
}
