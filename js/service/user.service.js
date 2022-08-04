const STORAGE_KEY = 'userDB'


var gUser = loadFromStorage(STORAGE_KEY)

function showAge(newVal) {
  document.getElementById('sAge').innerHTML = newVal
}

function onBgColorSelection(BackgroundColor) {
  document.body.style.background = BackgroundColor;
}

function onTxtColorSelection(TxtColor) {
  document.body.style.color = TxtColor;
}

function setColors() {
  if (gUser) {
    const bgColor = gUser.bgColor
    const txtColor = gUser.txtColor
    document.body.style.backgroundColor = bgColor
    document.body.style.color = txtColor
  } else {
    document.body.style.backgroundColor = '#ffffff'
    document.body.style.color = '#000000'
  }
}

function hoursToNextBd() {

  var userBd = new Date(gUser.dob)
  var bd = userBd.getDate()
  var bm = userBd.getMonth()
  var oneHour = 60 * 60 * 1000; // minutes*seconds*milliseconds
  var secondDate = new Date(new Date().getFullYear(), bm, bd);
  var firstDate = new Date();
  return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneHour)));
}

function renderHoursToNextBd() {
  var elTime = document.querySelector('.hours-to-bd')
  elTime.innerText = `Hours remaining until your next birthday: ${hoursToNextBd()}`
}