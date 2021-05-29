GetUser().then((res) => {
  for (const key in res) {
    addModalBox(res[key]);
  }
});
