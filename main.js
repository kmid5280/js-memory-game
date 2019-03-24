const cardList = 'AABBCCDD'.split('')
let selectedCards = []
let points = 0

function displayCards(cards) {
    let arr = cards
    $('.guess-game').html('');
    for (let i = arr.length - 1; i > 0; i--) {        //shuffle cards
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    for (i=0; i<arr.length; i++) {
        $('.guess-game').append(`
            <div class="card col-4 hidden" index=${i} id=${arr[i]}>${arr[i]}</div>
        `)
    }
    
    clickCard()
}

function clickCard() {
    $('.card').on('click', event => {
        event.preventDefault()
        if ($(event.target).hasClass('hidden')) {
            $(event.target).toggleClass('hidden unhidden')
            selectedCards.push(event.target.id)
            
            if (selectedCards.length === 2) {
                console.log('selectedCards.length === 2')
                if (selectedCards[0] === selectedCards[1]) {
                    $('.guess-game').find('.unhidden').toggleClass('unhidden matched')
                }
                else {
                    setTimeout(() => {
                        $('.guess-game').find('.unhidden').toggleClass('unhidden hidden')
                    }, 1200)
                    
                }
                selectedCards = []
            }
        }
    })

}


displayCards(cardList)