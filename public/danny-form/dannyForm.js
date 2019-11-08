import Component from '../Component.js';

class DannyForm extends Component {

    onRender(dom) {
        const powerRange = dom.querySelector('#power-level');
        const powerNumber = dom.querySelector('.range-number');
        const syncPower = () => {
            powerNumber.textContent = powerRange.value
        };

        powerRange.addEventListener('input', syncPower);
        syncPower();
    }

    renderHTML() {
        const dannys = this.props.dannys;

        const optionsList = dannys.map(danny => {
            return `<option>${danny.profession}</option>`;
        });
        const dannySet = new Set(optionsList);
        const dannySetArray = [...dannySet];
        const dannySetJoined = dannySetArray.join('');
        
        return /*html*/ `
            <form>
                <label for="name">Name:</label><input id="name" type="text">
                <label for="age">Age:</label><input id="age" type="number">
                <label for="profession">Profession:</label>
                <select id="profession">
                    ${dannySetJoined}
                </select>
                <label>Does this Danny have dignity?</label>
                <input type="radio" id="yes" name="dignity" value="yes">
                <label for="yes">Yes</label>
                <input type="radio" id="no" name="dignity" value="no" checked>
                <label for="no">No</label>
                <label for="power-level">Power Level</label>
                <input type="range" min="1" max="100" value="50" class="slider" id="power-level">
                <span class="range-number"></span>
                <button type="submit">Add</button>
            </form>
        `;
    }
}

export default DannyForm;