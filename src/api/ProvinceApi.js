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
        url: "https://vapi.vnappmob.com/api/province/",
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
        url: `https://vapi.vnappmob.com/api/province/district/${id}`,
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
        url: `https://vapi.vnappmob.com/api/province/ward/${id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
