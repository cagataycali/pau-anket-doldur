$('[type="radio"]').each((value, key) => {
  if (value % 4 === checked_value) {
    $(key).prop("checked", true)
  }
});
