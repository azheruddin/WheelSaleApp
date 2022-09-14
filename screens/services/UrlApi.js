const ShownMyVehical = 'http://192.168.1.18:8080/wheelsale-app-ws/sub-categories';

export {ShownMyVehical};


// import axios from 'axios'
// const instance = axios.create({
//     baseURL: 'http://192.168.1.18:8080/wheelsale-app-ws',
//     headers: {
//         'content-type':'application/json',
//     },
// });
// export default {
//     getData: () =>
//     instance({
//         'method':'GET',
//         'url':'/sub-categories',
//         'params': {
//             'page':'1',
//             'limit':'100',
//         },
//     }),
//     postData: () =>
//     instance({
//         'method': 'POST',
//         'url':'/api',
//         'data': {
//             'item1':'data1',
//             'item2':'item2'
//         }
//     })
// }