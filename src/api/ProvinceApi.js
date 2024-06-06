import axios from "axios";

// export const getAllProvince = () => {
//   return axios
//     .create({
//       baseURL: "https://vapi.vnappmob.com/api/province/",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//     .get("/api/?depth=3");
// };
export const getAllProvince = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: "https://esgoo.net/api-tinhthanh/1/0.htm",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const getAllDistrict = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: `https://esgoo.net/api-tinhthanh/2/${id}.htm`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const getAllWard = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: ` https://esgoo.net/api-tinhthanh/3/${id}.htm`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
// export const getAllProvince = () =>
//   new Promise(async (resolve, reject) => {
//     try {
//       const response = await axios({
//         method: "get",
//         url: "https://vapi.vnappmob.com/api/province/",
//         headers:{
//           "Content-Type" : "application/json"
//       }
//       });
//       resolve(response);
//     } catch (error) {
//       reject(error);
//     }
//   });
// export const getAllDistrict = (id) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       const response = await axios({
//         method: "get",
//         url: `https://vapi.vnappmob.com/api/province/district/${id}`,
//       });
//       resolve(response);
//     } catch (error) {
//       reject(error);
//     }
//   });
// export const getAllWard = (id) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       const response = await axios({
//         method: "get",
//         url: `https://vapi.vnappmob.com/api/province/ward/${id}`,
//       });
//       resolve(response);
//     } catch (error) {
//       reject(error);
//     }
//   });
