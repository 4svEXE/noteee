function normalizeDate(el, addTime = true) {
  document.querySelectorAll(el).forEach((item)=>{
    let date = new Date(item.innerHTML.slice(1,-1));
    let newDate = date.getDate() +'.'+ date.getMonth() +'.'+ date.getFullYear();

    function normalize(date) {
      return date < 10? date = '0' + date: date;
    }
    let newTime = normalize(date.getHours()) +':'+ normalize(date.getMinutes());
    item.innerHTML = addTime? newTime + ' ' + newDate: newDate;
  })
}

normalizeDate('.createdAt');
normalizeDate('.sendAtDate', false);
