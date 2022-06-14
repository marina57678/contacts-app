import httpService from "./HTTPService";

class UsersRequests {
   async loadAllUsers() {
      const users = await httpService.request({
         path: `/?results=200`,
      });
      console.log(`users ${users}`);
      return users;
   }
}
const usersRequests = new UsersRequests();
export default usersRequests;
