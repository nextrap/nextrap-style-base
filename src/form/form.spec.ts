import { Example, Nextrap } from "../description";

const example: Example = {
    title: "Form",
    description: "Form component",
    lang: "html",
    code: `
        <form>
            <div>
                <label for="text-input">Text Input</label>
                <input id="text-input" class="form-control input" type="text" placeholder="Text input">
            </div>
            <div>
                <label for="password-input">Password Input</label>
                <input id="password-input" class="form-control input" type="password" placeholder="Password">
            </div>
            <div>
                <label for="email-input">Email Input</label>
                <input id="email-input" class="form-control input" type="email" placeholder="Email">
            </div>
            <div>
                <label for="number-input">Number Input</label>
                <input id="number-input" class="form-control input" type="number" placeholder="Number">
            </div>
            <div>
                <label for="textarea">Textarea</label>
                <textarea id="textarea" class="form-control textarea" placeholder="Textarea"></textarea>
            </div>
            <div>
                <label for="select">Select</label>
                <select id="select" class="form-control select">
                    <option>Option 1</option>
                    <option>Option 2</option>
                </select>
            </div>
            <div>
                <label for="radio">Radio Buttons</label>
                <div>
                    <input id="radio1" class="form-control radio" type="radio" name="radio" value="1">
                    <label for="radio1">Option 1</label>
                </div>
                <div>
                    <input id="radio2" class="form-control radio" type="radio" name="radio" value="2">
                    <label for="radio2">Option 2</label>
                </div>
            </div>
            <div>
                <label for="checkbox">Checkboxes</label>
                <div>
                    <input id="checkbox1" class="form-control checkbox" type="checkbox" value="1">
                    <label for="checkbox1">Option 1</label>
                </div>
                <div>
                    <input id="checkbox2" class="form-control checkbox" type="checkbox" value="2">
                    <label for="checkbox2">Option 2</label>
                </div>
            </div>
            <div>
                <label for="file-input">File Input</label>
                <input id="file-input" class="form-control file" type="file">
            </div>
            <div>
                <label for="date-input">Date Input</label>
                <input id="date-input" class="form-control date" type="date">
            </div>
            <div>
                <label for="time-input">Time Input</label>
                <input id="time-input" class="form-control time" type="time">
            </div>
            <div>
                <label for="color-input">Color Input</label>
                <input id="color-input" class="form-control color" type="color">
            </div>
        </form>
    `,
};
