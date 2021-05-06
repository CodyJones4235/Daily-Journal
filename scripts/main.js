import { DailyJournal } from "./DailyJournal.js"


const contain = document.getElementById('entries')


const render = () => {
    contain.innerHTML = DailyJournal()

}

render()