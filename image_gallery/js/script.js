const searchBtn = document.querySelector('.gallery__search button');
const imagesList = document.querySelectorAll('.gallery__images-container .image-block img')
const imagesKeywords = []
let galleryResults = document.querySelector('.gallery__results');

searchBtn.addEventListener('click', () => {
    let inputSearch = document.querySelector('.gallery__search input');
    searchImage(formatList(inputSearch.value.split(' ')));
    resetInput(inputSearch);
})

imagesList.forEach((img, indice) => {
    imagesKeywords.push({
        img: img,
        indice: indice,
        keywords: img.getAttribute('kw').toUpperCase()
    });
})

function resetInput(i) {
    i.value = ''
    i.focus();
}

function galleryResultsHTML(results) {
    galleryResults.innerHTML = '';
    results.forEach((e) => {
        let src = e.img.getAttribute('src');
        let alt = e.img.getAttribute('alt')
        galleryResults.innerHTML += (
            `<div>
                            <img src='${src}' alt='${alt}'>
                        </div>`
        )
    })
}

function searchImage(inputSearch) {
    let results = [];
    imagesKeywords.forEach((img) => {
        inputSearch.forEach((key) => {
            if (img.keywords.includes(key.toUpperCase())) {
                results.push(img);
            }
        });

    })
    console.log(results);
    galleryResultsHTML(results);
}

function formatList(list) {
    let newList = [];
    list.forEach((e, i) => {
        if (e === '') {
            list.splice(i, 1);
        }
    })
    list.forEach((e, i) => {
            if (e !== '') {
                newList.push(e);
            }
        })
        // remove itens repetidos da lista
    var uniqueList = [...new Set(newList)]
    return uniqueList;
}