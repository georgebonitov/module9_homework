function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };
    
    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
};


window.onload=function(){
    
    const resultNode = document.querySelector('.j-result');
    const btnNode = document.querySelector('.j-btn-request');
    resultNode.innerHTML = localStorage.getItem("cards");


    function displayResult(apiData) {
        let cards = '';
        
        apiData.forEach(item => {
            const cardBlock = `
            <div class="card">
            <img
            src="${item.download_url}"
            class="card-image"
            />
            <p>${item.author}</p>
            </div>
            `;
            cards = cards + cardBlock;
        });
        
        resultNode.innerHTML = cards;
        localStorage.setItem("cards", cards); 
    }
    
    btnNode.addEventListener('click', () => {
        const pageValue = document.querySelectorAll('input')[0].value;
        const limitValue = document.querySelectorAll('input')[1].value;
        if ((Number(pageValue) <= 10) & (Number(pageValue) >= 1) & (Number(limitValue) <= 10) & (Number(limitValue) >= 1)) {
            var link = 'https://picsum.photos/v2/list?page=' + pageValue + '&limit=' + limitValue;
            alert(link);
            useRequest(link, displayResult);
        } else if ((isNaN(Number(pageValue)) === false) & (isNaN(Number(limitValue)) === false)) {
            resultNode.innerHTML = 'Введенное число вне диапазона от 1 до 10';
        } else {
            resultNode.innerHTML = 'Введенное значение не является числом';
        }
    })
}