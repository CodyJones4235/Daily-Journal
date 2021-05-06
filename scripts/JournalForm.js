export const createhtml = () =>{
    return /*html*/`
    <form class="entryForm">
    <fieldset>
        <label for="entryDate">Date</label>
        <input type="date" name="entryDate" class="entryForm__date">
    </fieldset>
    <form class="entryForm">
        <fieldset>
            <label for="concept">Concept</label>
            <input type="text" name="concept" class="entryForm__concept">
        </fieldset>
        <form class="entryForm">
            <fieldset>
                <label for="concept">Subject</label>
                <input type="text" name="concept" class="entryForm__entry">
            </fieldset>
            <form class="entryForm">
                <label for="mood">Mood:</label>
                <select name="mood" id="mood">
                    <option value="happy">happy</option>
                    <option value="ok">ok</option>
                    <option value="sad">sad</option>
                    
            </form>
            `
            
}
