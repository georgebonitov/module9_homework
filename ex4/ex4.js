window.onload=function(){
    
    const resultNode = document.querySelector('.j-result');
    const btnNode = document.querySelector('.j-btn-request');
    
    btnNode.addEventListener('click', () => {
        const widthValue = document.querySelectorAll('input')[0].value;
        const heightValue = document.querySelectorAll('input')[1].value;
        if ((Number(widthValue) >= 100) & (Number(heightValue) >= 100) & (Number(widthValue) <= 300) & (Number(heightValue) <= 300)) {
            var src = 'https://picsum.photos/' + widthValue + '/' + heightValue;
            alert(src);
            resultNode.innerHTML = `
            <img
            src="${src}"
            class="card-image"
            />
            `;
        } else if ((isNaN(Number(widthValue)) === false) & (isNaN(Number(heightValue)) === false)) {
            resultNode.innerHTML = 'Введенное число вне диапазона от 150 до 300';
        } else {
            resultNode.innerHTML = 'Введенное значение не является числом';
        }
    })
}