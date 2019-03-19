const cardList = 'AABBCCDDEEFFGGHH'.split('')

function displayCards(cards) {
    let arr = cards
    $('.guess-game').html('');
    for (let i = arr.length - 1; i > 0; i--) {        //shuffle cards
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    for (i=0; i<arr.length; i++) {
        $('.guess-game').append(`
            <div class="card col-4" id=${arr[i]}>${arr[i]}</div>
        `)
    }
    clickCard()
}

function clickCard() {
    let array = []
    let points = 0
    $('.card').on('click', event => {
        event.preventDefault()
        console.log(event.target.id)
        array.push(event.target.id)
        console.log(array)
        if (array.length === 2) {
            array[0] === array[1]
                ?points++
                :points
            array = []
        }
        console.log(points)
    })
}

displayCards(cardList)