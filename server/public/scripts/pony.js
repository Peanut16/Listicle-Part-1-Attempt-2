import '/src/style.css'

const renderPony = async () => {
    const response = await fetch('/ponies')
    const data = await response.json()


    const requestedID = parseInt(window.location.href.split('/').pop())
    const ponyContent = document.getElementById('pony-content')

    let pony

    if (data) {
        pony = data.find(pony => pony.id === requestedID)
        
        if (pony) {
            document.getElementById('image').src = pony.image
            document.getElementById('name').textContent = pony.name
            document.getElementById('species').textContent = 'Species: ' + pony.species
            document.getElementById('eyeColor').textContent = 'Eye Color: ' + pony.eyeColor
            document.getElementById('maneColor').textContent = 'Mane Color: ' + pony.maneColor
            document.getElementById('coatColor').textContent = 'Coat color: ' + pony.coatColor         
            document.getElementById('cutieMark').textContent = 'Cutie Mark: ' + pony.cutieMark      
            document.getElementById('specialTrait').textContent = 'Special Trait: ' + pony.specialTrait
      
        }
        else {
            const message = document.createElement('h2')
            message.textContent = 'No Ponies Available 😞'
            ponyContent.appendChild(message)

        }

    }
}

renderPony()