const url = 'https://transactions.spokedev.xyz/transactions';

async function request(httpfunction, path) {
  return httpfunction({
    url: path,
    method: 'GET',
    json: true,
    resolveWithFullResponse: true, // promise resolves with full response not just body.
    simple: false   // ensures promise resolves even if statusCode is not 200 series.
  });
}

const getData = async url => {
  try {
    const response = await request(url)
    return response.body;
  } catch (err) {
    console.log(err);
  }
}
getData(url)

exports.request = request;
exports.getData = getData;
