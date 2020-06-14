// touch devices
let touchStartY = 0
let touchEndY = 0

document.addEventListener('touchstart', (event) => {
    touchStartY = event.changedTouches[ 0 ].clientY
})

document.addEventListener('touchend', (event) => {
    touchEndY = event.changedTouches[ 0 ].clientY
    const touchDifference = touchStartY - touchEndY
    
    if ( touchStartY > touchEndY && touchDifference >= 60 ) {
        // swipe up
    }
    
    if ( touchStartY < touchEndY && touchDifference <= -60 ) {
        // swipe down
    }
}
