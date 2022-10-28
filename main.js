function handlePlayKeySound(elementId) {
  const keySound = document.querySelector(elementId)
  if (keySound?.localName === 'audio')
    keySound.play()
  else
    console.log('Faixa de áudio não encontrada')
}

const keys = document.querySelectorAll('.key')
for (let count = 0; keys.length > count; count++) {
  const key = keys[count]
  key.onclick = () => handlePlayKeySound(`#sound_${key.classList[1]}`)

  key.onkeydown = event => {
    if (event.code === 'Enter' || event.code === 'Space')
      key.classList.add('active')
  }
  key.onkeyup = event => {
    if (event.code === 'Enter' || event.code === 'Space')
      key.classList.remove('active')
  }
}
