const removeTransition = e => {
    // console.log(e)
    if (e.propertyName !== 'transform') return
    console.log()
    e.target.classList.remove('playing')
    // this.classList.remove('playing')
  }

const playSound = e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"`)
  const keyElement = document.querySelector(`.key[data-key="${e.keyCode}"`)
  if (!audio) return

  audio.currentTime = 0
  audio.play()
  // console.log(keyElement)
  keyElement.classList.add('playing')
}

const allKeys = Array.from(document.querySelectorAll('.key'))
allKeys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
})

window.addEventListener('keydown', playSound)