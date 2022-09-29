import request from 'request';

interface IFunction {
  url: string;
  qs: {
    [key: string]: string;
  };
}

export default function promiseRequest({ url, qs }: IFunction) {
  const requestOptions = {
    url: url,
    method: 'GET',
    json: {},
    qs: qs,
  };

  return new Promise(resolve => {
    request(requestOptions, function (error, response, body) {
      resolve(body);
    });
  });
}
