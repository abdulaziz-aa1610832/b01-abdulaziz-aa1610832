
let db = new Localbase('db')
async function addorRemoveQuote(text) {
   
    var quote = await db.collection('favorites').doc({ text: text }).get()
    if(quote){
        
        await db.collection('favorites').doc({ text: text }).delete()
        
    }else{
       
        await db.collection('favorites').add({
            text: text,
        })
    }
}

getQoutes()

async function getQoutes() {
    var response = await fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=15")
    var json = await response.json()
    var qoutes = json["quotes"]
    var html = qoutes.map(q => {
        return `
        <div ${checkFav(q.text) == true ? "style='background-color: rgb(201, 201, 61);'" : ""} class="tile">
        <p onclick="addorRemoveQuote('${q.text}')" class="fav">Favorite <i class="fa fa-star"></i></p>
        <h3> “${q.text}” </h3>
        <div class="tileBottom">
        <span class="tag">${q.tag}</span>
        <span class="author" >-${q.author}</span>
        </div>
      </div>
        `
    }).join('')

    var element = document.getElementById("quotes")
    element.innerHTML = html
}
async function loadMore() {
    var response = await fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=10")
    var json = await response.json()
    var qoutes = json["quotes"]
    var html = qoutes.map(q => {
        return `
        <div ${checkFav(q.text) == true ? "style='  background-color: rgb(201, 201, 61);'" : ""} class="tile">
        <p class="fav" onclick="addorRemoveQuote('${q.text}')">Favorite <i class="fa fa-star"></i></p>
        <h3> “${q.text}” </h3>
        <div class="tileBottom">
        <span class="tag">${q.tag}</span>
        <span class="author" >-${q.author}</span>
        </div>
      </div>
        `
    }).join('')

    var element = document.getElementById("quotes")
   
    element.innerHTML = element.innerHTML + html
}




async function checkFav(text) {
  
    var quote = await db.collection('favorites').doc({ text: text }).get()
    if (quote === undefined) {
        return false
    } else {
        return true
    }
}


