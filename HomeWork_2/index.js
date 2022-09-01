let rotating = [
    {opacity: 1},
    {opacity: 0} 
];

let timing = {
    fill: 'forwards'
};
let timing2 = {
    duration: 100,
    fill: 'backwards'
};

function hid() {
document.querySelector('.collapsible__content').animate(
    rotating,
    timing
)
}

function vis() {
document.querySelector('.collapsible__content').animate(
    rotating,
    timing2
).pause()
}