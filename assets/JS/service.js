// Create an onject and put it some custom value that we can send them to the API_URL
const users = {
  numbers: "20",
};
// Create a function and get user_information from server
async function GetUser() {
  let userData = {};
  await $.ajax({
    url: `https://randomuser.me/api/?results=${users.numbers}`,
    dataType: "json",
    success(data) {
      Object.assign(userData, data["results"]);
    },
    error(error) {
      console.error(error);
    },
  });
  return userData;
}
