// show data for the first time (when DOM loaded)
showData();
// show data after 20 sec
setInterval(() => {
  //after 20 sec for update data [.data-row] must be empty
  $(".data-row").html("");
  showData();
}, 20000);
// create a function to send data from service.js to controller.js
function showData() {
  GetUser().then((res) => {
    for (const key in res) {
      addModalBox(res[key]);
    }
  });
}
