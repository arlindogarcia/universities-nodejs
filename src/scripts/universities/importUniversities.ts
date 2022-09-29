import 'dotenv/config';
import '@shared/mongoose';
import UniversityModel from '@modules/universities/mongoose/models/UniversityModel';
import promiseRequest from './promiseRequest';

interface IUniversity {
  name: string;
  alpha_two_code: string;
  state_province: string;
  country: string;
  domains: string[];
  web_pages: string[];
}

const countries = [
  'argentina',
  'brasil',
  'chile',
  'colombia',
  'paraguai',
  'peru',
  'suriname',
  'uruguay',
];

const promises: Promise<IUniversity[]>[] = countries.map(
  (country: string) =>
    promiseRequest({
      url: 'http://universities.hipolabs.com/search',
      qs: { country: country },
    }) as Promise<IUniversity[]>,
);

Promise.all(promises).then(responses => {
  responses.forEach(async universities => {
    if (universities.length == 0) {
      console.log("Doesn't have a universities on this country");
    }

    universities.forEach(async university => {
      const {
        name,
        alpha_two_code,
        state_province,
        country,
        domains,
        web_pages,
      } = university;

      const universityExists = await UniversityModel.find({
        name: name,
        country: country,
        state_province: state_province,
      });

      if (universityExists.length) {
        console.log(`The university ${name} already exists.`);
      }

      await UniversityModel.create({
        alpha_two_code,
        web_pages,
        name,
        country,
        domains,
        state_province,
      });
    });
  });

  console.log('Fisish process.');
});
