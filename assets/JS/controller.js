const addModalBox = (data) => {
  addArticlesOfValue(data);
};
function addArticlesOfValue(data) {
  const article = `<div class="col-12 col-sm-6 col-md-2">
    <img
      src="${data["picture"]["large"]}"
      class="btn p-1 avatar-button"
      data-bs-toggle="modal"
      data-bs-target="#${data["name"]["first"]}"
    />

    <!-- Modal -->
    <div
      class="modal fade"
      id="${data["name"]["first"]}"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
     <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">User Information</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body text-center">
        <img src="${data["picture"]["large"]}" class="avatar-button"></img>
        <h3 class="mt-2" onclick="copySelectedText()">${data["name"]["title"]}. ${data["name"]["first"]} ${data["name"]["last"]}</h3>
        <h5 class= "mt-2" onclick="copySelectedText()">City: ${data["location"]["city"]}</h5>
        <h5 class= "mt-2" onclick="copySelectedText()">Email: ${data["email"]}</h5>
        <h5 class= "mt-2" onclick="copySelectedText()">Phone: ${data["phone"]}</h5>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>
    </div>
  </div>
    </div>
  </div>`;
  $(".data-row").append(article);
}
// Copy selected text
const copySelectedText = () => {
  document.execCommand("copy");
};
