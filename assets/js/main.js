let for_box = document.querySelector('.for_box');
let news = []


let inputName = document.getElementById('name')
let inputText = document.getElementById('text')
let inputDate = document.getElementById('date')
let inputAuthor = document.getElementById('author')
let inputId = document.getElementById('id')
let submitAdd = document.getElementById('submit')

submitAdd.addEventListener('click', function () {
    let object = {
        name: inputName.value,
        text: inputText.value,
        id:inputId.value,
        date: inputDate.value,
        author: inputAuthor.value
    }

    news.push(object)
    for_box.innerHTML =''
    inputName.value =''
    inputText.value =''
    inputDate.value =''
    inputAuthor.value = ''
    inputId.value = ''
    showArray(news)
 })

 function showArray(arr){
    for (let key in news) {

        for_box.insertAdjacentHTML('beforeend', ` 
        <div class="new-cont">
            <div class="n-flex">
                <h1 class="name">`+
            news[key]['name']
            + `</h1>
                <p class="date">`+
                news[key]['date']
            + `</p>
            </div>
            <p class="text">`+
            news[key]['text']
            + `</p>
            <div class="n-flex">
                <h1 class="author">`+
                news[key]['author']
            + `</h1>
                <p class="id">id: `+
            news[key]['id']
            + `</p>
            </div>
        </div>`);
    }
 }

