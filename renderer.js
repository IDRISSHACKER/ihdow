const games = [...document.querySelectorAll(".game")]
const menus = [...document.querySelectorAll(".menu")]
let activedGame = null
let oldGame = null
let newGames = null
let newGameFilter = []

const ManageGameSection = () => {
    games.forEach((game) => {
        game.addEventListener("click", () => {
            oldGame = document.querySelector(".gameActive")
            //gg
            activedGame = game
            RemoveActiveGame()
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
                counter++
            })
            counter = 0
            newGameFilter = []
            activedGame = null
            oldGame = null
            newGames = null

        })
    })
}

const ManageMenuSection = () => {
    menus.forEach((menu) => {
        menu.addEventListener("click", () => {
            RemoveActiveMenu()
            menu.classList.add("menuActive")
        })
    })
}

const RemoveActiveGame = () => {
    const activeGame = document.querySelector(".gameActive")
    activeGame.classList.remove("gameActive")
}

const RemoveActiveMenu = () => {
    const activeMenu = document.querySelector(".menuActive")
    activeMenu.classList.remove("menuActive")
}

ManageGameSection()
ManageMenuSection()
