/** single responsibility principle and open-closed principle */

function loadImg(src) {
  return new Promise(function (resolve, reject) {
    let img = document.createElement('img')

    img.onload = function () {
      resolve(img)
    }

    img.onerror = function () {
      reject('picture loads failed')
    }

    img.src = src
  })
}

const src = 'https://img2.mukewang.com/5a9fc8070001a82402060220-100-100.jpg'
const result = loadImg(src)

result
  // part1
  .then(function (img) {
    alert(`width: ${img.width}`)
    return img
  })
  // part2
  .then(function (img) {
    alert(`height: ${img.height}`)
    return img
  })
  // part3
  .then(function (img) {
    alert(`src: ${img.src}`)
  })
  .catch(function (e) {
    console.log(e)
  })