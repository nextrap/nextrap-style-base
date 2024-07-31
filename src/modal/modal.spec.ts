import { Example, Nextrap } from "../description";

const example: Example = {
    title: "Modal",
    description: "Modal component",
    lang: "html",
    code: `
        <nx-modal>
            <div slot="body">This is the body of the modal.</div>
            <div slot="footer">
                <button id="close-modal">Close</button>
            </div>
        </nx-modal>
        <script>
            document.querySelector('nx-modal').open();
            document.querySelector('#close-modal').addEventListener('click', () => {
                document.querySelector('nx-modal').close();
            });
        </script>
    `,
};
