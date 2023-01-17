import axios from "axios";

var endPoint = "https://api.coin.z.com/public";
var path = "/v1/ticker?symbol=BTC";

axios
  .get(endPoint + path)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

//   npx ts-node api/v1/ticker.ts 
// {
//   status: 200,
//   statusText: 'OK',
//   headers: AxiosHeaders {
//     'content-type': 'application/json;charset=UTF-8',
//     'content-length': '221',
//     connection: 'close',
//     date: 'Tue, 17 Jan 2023 23:38:20 GMT',
//     'x-amzn-requestid': 'f68deea6-7933-47d9-abbd-963358ff8347',
//     'x-amz-apigw-id': 'e6So6EmdNjMFVmQ=',
//     'x-amzn-trace-id': 'Root=1-63c7316c-12bd20ce7139692d20283664',
//     'x-cache': 'Miss from cloudfront',
//     via: '1.1 6bdff89d7edf793d60fc3af5190198de.cloudfront.net (CloudFront)',
//     'x-amz-cf-pop': 'NRT20-C2',
//     'x-amz-cf-id': 'ZSFmKjzdnoOgwDn0vNlv4AaDrxOv5N3_QBYI-hmvDSm2vUM5FhBDaw=='
//   },