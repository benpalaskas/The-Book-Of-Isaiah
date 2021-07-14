function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

isiahverses=[31,	22,	26,	6,	30,	13,	25,	23,	20,	34,	16,	6,	22,	32,	9,	14,	14,	7,	25,	6,	17,	25,	18,	23,	12,	21,	13,	29,	24,	33,	9,	20,	24,	17,	10,	22,	38,	22,	8,	31,	29,	25,	28,	28,	25,	13,	15,	22,	26,	11,	23,	15,	12,	17,	13,	12,	21,	14,	21,	22,	11,	12,	19,	11,	25,	24]

btn = document.getElementById('refresher')
i = 1
const c = document.getElementById('circle')
function getImage(z){
  if(z==1){c.classList.remove('bg5')}
  if(z>1){
    c.classList.remove(`bg${z-1}`)}
  c.classList.add(`bg${z}`)
  console.log(c.classList)
}
getImage(i)
  async function getData() {
   
    i = i+1
    if(i >5){i = 1}
    book = (getRandomInt(65) +1)
    if (book==67){
      book = 66
    }
    verseMax = isiahverses[(book-1)]  
    a = document.getElementById('quotebox');
    t = document.getElementById(`titleBox`)
    verseStart = verseMax-3
    let response = await fetch(`https://bible-api.com/isaiah+${book}:${verseStart}-${verseMax}`)
    let data = await response.json()
    console.log[(data)]
    t.innerHTML=`<h3>${data.reference}</h3>`;
    a.innerHTML =`<p>${data.text}</p>`;
    console.log(i)
    
    getImage(i)}

