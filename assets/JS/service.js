const users = {
  numbers: "20",
};
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
