/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    "entries": [
        {
            id: 1,
            date: "07/24/2025",
            concept: "HTML & CSS",
            entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
            mood: "Ok"
        },
        {
            id: 2,
            date: "07/26/2025",
            concept: " Flexbox",
            entry: " have  layout also be another Flexbox layout. It hurt my brain. I hate Steve.",
            mood: "Sad"
        },
        {
            id: 3,
            date: "07/26/2125",
            concept: "Complex",
            entry: "  I hate",
            mood: "Sad"
        }
    ]
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const copyOfData = [...database.entries]
    return copyOfData
}