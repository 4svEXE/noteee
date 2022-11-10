async function addDate() {
  if (document.querySelector('.noteDate')) {
    let date = new Date
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    document.querySelector('.noteDate').value = `${year}-${month}-${day}`;
  }
}

document.addEventListener("DOMContentLoaded", addDate());
