function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

isiahverses=[31,	22,	26,	6,	30,	13,	25,	23,	20,	34,	16,	6,	22,	32,	9,	14,	14,	7,	25,	6,	17,	25,	18,	23,	12,	21,	13,	29,	24,	33,	9,	20,	24,	17,	10,	22,	38,	22,	8,	31,	29,	25,	28,	28,	25,	13,	15,	22,	26,	11,	23,	15,	12,	17,	13,	12,	21,	14,	21,	22,	11,	12,	19,	11,	25,	24]

btn = document.getElementById('refresher')
  let i = 6
  let rright = getComputedStyle( document.getElementById('circle'), "")
  let circleRight = document.getElementById('circle').style.right
 
function getImage(z){
  c = document.getElementById('circle')
  g = i * 10
  console.log(g)

  console.log('console logged r') 
  let Right = (String(g) + 'px')
  console.log(typeof(g), typeof(Right))
  document.getElementById('circle').style.right = Right
  console.log(Right)
  console.log(circleRight)
  c.classList.add(`bg1`)
}

  async function getData() { 
    book = (getRandomInt(65) +1)
    if (book==67){
      book = 66
    }
    verseMax = isiahverses[(book-1)]  
    a = document.getElementById('quotebox');
    t = document.getElementById(`titleBox`);
    verseStart = verseMax-3
    let response = await fetch(`https://bible-api.com/isaiah+${book}:${verseStart}-${verseMax}`)
    let data = await response.json()
    console.log[(data)]
    t.innerHTML=`<h3>${data.reference}</h3>`;
    a.innerHTML =`<p>${data.text}</p>`;
    console.log(i)
    
    getImage(i)
    i = i + 1};

