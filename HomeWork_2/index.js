document.querySelector('.collapsible__button').addEventListener('click', function (e) {
  var div = document.querySelector('.collapsible__content')
  div.style.display = div.style.display === 'none' ? 'block' : 'none'
})

