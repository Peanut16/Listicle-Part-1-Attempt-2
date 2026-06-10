import '/src/style.css'
const renderPonies = async () => {
    const response = await fetch('/ponies')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {
        data.forEach(pony => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${pony.image})`

            const name = document.createElement('h3')
            name.textContent = pony.name
            bottomContainer.appendChild(name)

            const cutieMark = document.createElement('p')
            cutieMark.textContent = 'Cutie Mark Description: ' + pony.cutieMark
            bottomContainer.appendChild(cutieMark)

            const specialTrait = document.createElement('p')
            specialTrait.textContent = 'Special Talent: ' + pony.specialTrait
            bottomContainer.appendChild(specialTrait)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/ponies/${pony.id}`
            bottomContainer.appendChild(link)
            
            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)

        })

    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Ponies Available 😞'
        mainContent.appendChild(message)
    }
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
      window.location.href = '../404.html'
}
else {
    document.addEventListener('DOMContentLoaded', renderPonies)
}


