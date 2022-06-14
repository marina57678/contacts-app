const END_POINT = "https://randomuser.me/api";
const myInit = {
   method: "GET",
   mode: "cors",
   cache: "default",
};

class HTTPService {
   async request({ method = "GET", path, data }) {
      const url = `${END_POINT}${path}`;

      const options = {
         method,
         body: JSON.stringify(data),
         headers: {
            "Content-Type": "application/json",
         },
      };

      try {
         const response = await fetch(url, options);
         const result = await response.json();
         console.log(result);
         return result;
      } catch (error) {
         console.error(error);
      }
   }
}

const httpService = new HTTPService();
export default httpService;
