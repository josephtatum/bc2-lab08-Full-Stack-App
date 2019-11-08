import Component from '../Component.js';
import { addDanny } from '../services/danny-api.js';

class DannyForm extends Component {

    onRender(dom) {
        const powerRange = dom.querySelector('#power-level');
        const powerNumber = dom.querySelector('.range-number');
        const syncPower = () => {
            powerNumber.textContent = powerRange.value;
        };

        powerRange.addEventListener('input', syncPower);
        syncPower();

        dom.addEventListener('submit', async event => {
            event.preventDefault();

            const formData = new FormData(dom);
            const boolHasDignity = ((formData.get('dignity')) === 'true');

            const danny = {
                name: formData.get('name'),
                profession_id: parseInt(formData.get('profession-id')),
                age: parseInt(formData.get('age')),
                has_dignity: boolHasDignity,
                power_level: parseInt(formData.get('power-level'))
            };

            console.log(danny);

            try {
                const newDanny = await addDanny(danny);
                console.log(newDanny);
                // window.location = 'danny-list.html';
            }

            catch (err) {
                console.log('danny not added :(', err);
            }
            
        });
    }

    renderHTML() {
        const professions = this.props.professions;
        const optionsList = professions.map(profession => {
            return `<option value="${profession.id}">${profession.name}</option>`;
        });
        const optionsListJoined = optionsList.join('');
        
        return /*html*/ `
            <form>
                <label for="name">Name:</label><input id="name" name="name" type="text">
                <label for="age">Age:</label><input id="age" name="age" type="number">
                <label for="profession">Profession:</label>
                <select id="profession" name="profession-id">
                    ${optionsListJoined}
                </select>
                <label id="dignity">Does this Danny have dignity?
                    <input type="radio" id="yes" name="dignity" value="yes">
                    <label for="yes">Yes</label>
                    <input type="radio" id="no" name="dignity" value="no" checked>
                    <label for="no">No</label>
                </label>
                <label for="power-level">Power Level</label>
                <input type="range" min="1" max="100" value="50" class="slider" name="power-level" id="power-level">
                <span class="range-number"></span>
                <button type="submit">Add</button>
            </form>
        `;
    }
}

export default DannyForm;