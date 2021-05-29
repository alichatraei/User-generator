const addModalBox = (data) => {
  addArticlesOfValue(data);
};
function addArticlesOfValue(data) {
  console.log(data["picture"]["large"]);
  const article = `<div class="col-12 col-sm-6 col-md-2">
    <img
      src="${data["picture"]["large"]}"
      class="btn p-1 avatar-button"
      data-bs-toggle="modal"
      data-bs-target="#Modal"
    />

    <!-- Modal -->
    <div
      class="modal fade"
      id="Modal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
     <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
    </div>
  </div>`;
  $(".data-row").append(article);
}
