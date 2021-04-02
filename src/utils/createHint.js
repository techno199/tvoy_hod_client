export const createHint = (data) => {
    return `
        <div class="contentHint">
            <h3 class="hintHeader">${data.region}</h3>
            <div class="wrapHintSection">
                <p class="number">${(+data.participants).toLocaleString('ru')}</p>
                <p class="text">Зарегистрированных <br /> участников сообщества </p>
            </div>
            <div class="wrapHintSection">
                <p class="number">${data.school}</p>
                <p class="text">Зарегистрированных школ</p>
            </div>
             <div class="wrapHintSection" style="margin-bottom: 0">
                <p class="number">${data.winner}</p>
                <p class="text">Победителей конкурса <br />“Большая перемена” 2020</p>
            </div>
        </div>`
    };