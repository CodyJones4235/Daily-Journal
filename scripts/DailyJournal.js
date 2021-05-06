import { Entries } from "./Entries.js"
import { createhtml } from "./JournalForm.js"


export const DailyJournal = () => {
    return `
        <h1>Daily Journal</h1>

        <div class="entryList">
            ${ Entries() }
        </div>

        <article class="entryForm">
            ${createhtml()}
        </article>
         
    `
}