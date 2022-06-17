/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
const inputReview = document.getElementById('input-review')
const suggestion = document.getElementById('suggestion-text')
let currentFocus
const UP_ARROW_KEYCODE = 38
const DOWN_ARROW_KEYCODE = 40

let suggestedWord = ''
let insertText = false
let wordPredict = ''
let suggestedArray = []

// mengirim data ke model
async function fetchData (wordPredict) {
  try {
    const data = { predict: wordPredict }
    const response = await axios
      .post('https://essential-oven-344608.as.r.appspot.com/predict', data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
    let predict = await response.data.prediction
    predict = JSON.parse(predict)
    return predict
  } catch (error) {
    console.error(error)
  }
}

// mengambil data hasil proses model
async function renderData (wordPredict) {
  suggestedWord = await fetchData(wordPredict)
  console.log(suggestedWord)
  return suggestedWord
}

inputReview.addEventListener('input', async (e) => {
  closeAllLists()
  if (e.data != ' ') {
    insertText = true
  }
  if (insertText == false) {
    inputReview.value = ''
  }
  currentFocus = -1

  a = document.createElement('DIV')
  a.setAttribute('id', inputReview + 'autocomplete-list')
  a.setAttribute('class', 'autocomplete-items')
  inputReview.parentNode.appendChild(a)

  const inputValue = e.target.value
  // mencari pada index berapa .. berada
  wordPredict = inputValue.indexOf('..')
  wordPredict = inputValue.slice(wordPredict)
  // menghilangkan ..
  wordPredict = wordPredict.substring(2)
  // mengecek suggest terdapat . atau tidak
  if (wordPredict.indexOf('.') !== -1) {
    // mencari di index berapa . berada
    const akhirkalimat = wordPredict.indexOf('.')
    // mengambil 1 kalimat (sampai index . berada)
    wordPredict = wordPredict.slice(0, akhirkalimat)
  }
  // split string menjadi array substring
  const jumlah = wordPredict.split(' ')
  // mengecek suggestedWord not equal undefined dan kata dari array jumlah lebih dari 1
  if (suggestedWord != undefined && jumlah.length > 1) {
    suggestedArray = await (renderData(wordPredict))
    for (i = 0; i < suggestedArray.length; i++) {
      // membuat element div
      b = document.createElement('DIV')
      b.innerHTML = suggestedArray[i]
      b.innerHTML += "<input type='hidden' value='" + suggestedArray[i] + "'>"
      b.addEventListener('click', function (e) {
        // memasukkan value ke dalam textarea
        inputReview.value = inputValue.substring(0, inputValue.indexOf('..')) + this.getElementsByTagName('input')[0].value
        closeAllLists()
      })
      a.appendChild(b)
    }
  }

  if (inputValue.length == 0) {
    suggestion.innerHTML = ''
  }

  if (inputReview.value.length == 0) {
    insertText = false
  }
})

inputReview.addEventListener('keydown', function (e) {
  let x = document.getElementById(inputReview + 'autocomplete-list')
  if (x) x = x.getElementsByTagName('div')
  // arrow down ditekan
  if (e.keyCode == DOWN_ARROW_KEYCODE) {
    currentFocus++
    addActive(x)
  } else if (e.keyCode == UP_ARROW_KEYCODE) {
    // arrow up ditekan
    currentFocus--
    addActive(x)
  } else if (e.keyCode == 13) {
    // tombol enter ditekan
    e.preventDefault()
    if (currentFocus > -1) {
      if (x) x[currentFocus].click()
    }
  }
})

function addActive (x) {
  if (!x) return false
  removeActive(x)
  if (currentFocus >= x.length) currentFocus = 0
  if (currentFocus < 0) currentFocus = (x.length - 1)
  // menambahkan class autocomplete-active
  x[currentFocus].classList.add('autocomplete-active')
}

function removeActive (x) {
  for (let i = 0; i < x.length; i++) {
    x[i].classList.remove('autocomplete-active')
  }
}

function closeAllLists (elmnt) {
  // menutup autocomplete list
  const x = document.getElementsByClassName('autocomplete-items')
  for (let i = 0; i < x.length; i++) {
    if (elmnt != x[i] && elmnt != inputReview) {
      x[i].parentNode.removeChild(x[i])
    }
  }
}

document.getElementById('copyToClipboard').addEventListener('click', function () {
  // mengcopy isi text dan menampilkan alert text berhasil dicopy
  navigator.clipboard.writeText(inputReview.value).then(() => {
    alert('Text Copied Successfully')
  })
})
