// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const games = [...document.querySelectorAll(".game")]
let activedGame = null
let oldGame = null
let newGames = null
let newGameFilter = []

games.forEach((game) => {
    game.addEventListener("click", () => {
        console.log("==================")
        oldGame = document.querySelector(".gameActive")
        //gg
        activedGame = game
        RemoveActive()
        //gg
        newGames = [...document.querySelectorAll(".game")]
        //gg
        let count = 1
        newGames.forEach((jeu) => {
            if (count == 1) {

            } else if (jeu !== activedGame) {
                newGameFilter.push(jeu)
            }
            if (count == newGames.length) {
                newGameFilter = [...newGameFilter, newGames[0]]
            }
            count++
        })
        count = 0
        const gamesCont = document.querySelector(".games")
        gamesCont.innerHTML = ""
        let counter = 1
        newGameFilter.forEach((jeu) => {
            gamesCont.appendChild(jeu)
            if (counter == 2) {
                activedGame.classList.add("gameActive")
                gamesCont.appendChild(activedGame)
            }
            console.log(jeu)
            counter++
        })
        counter = 0
        newGameFilter = []
        activedGame = null
        oldGame = null
        newGames = null


        //RemoveActive()
        //PermuteGame(activedGame)

        //SetActive(oldGame)

    })
})

const SetActive = (game) => {
    game.classList.add("gameActive")
}

const RemoveActive = () => {
    const activeGame = document.querySelector(".gameActive")
    activeGame.classList.remove("gameActive")
}

const PermuteGame = (game) => {
    let activeGame = oldGame
    const selectedGame = game
    const htmlActive = activeGame.innerHTML

    activeGame.innerHTML = selectedGame.innerHTML
    selectedGame.innerHTML = htmlActive
    //activeGame.innerHTML = selectedGame.innerHTML
}
