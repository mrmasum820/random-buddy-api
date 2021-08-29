const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies()

const displayBuddies = data => {
    // console.log(data.results)
    const buddies = data.results
    const section = document.getElementById('buddies')
    for (const buddy of buddies) {
        console.log(buddy.gender)
        const div = document.createElement('div')
        div.innerHTML = `
        <p><b>Name :</b> ${buddy.name.first} ${buddy.name.last}</p>
        <p>Email : ${buddy.email}</p>
        <p>Phone : ${buddy.cell}</p>
        <p>Gender: ${buddy.gender}</p>
        `
        section.appendChild(div)
    }
}