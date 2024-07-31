import { Example, Nextrap } from "../description";

const example: Example = {
    title: "Tooltip",
    description: "Tooltip component with different positions",
    lang: "html",
    code: `
        <nx-tooltip text="Tooltip on top" position="top">Hover over me (top)</nx-tooltip>
        <nx-tooltip text="Tooltip on bottom" position="bottom">Hover over me (bottom)</nx-tooltip>
        <nx-tooltip text="Tooltip on left" position="left">Hover over me (left)</nx-tooltip>
        <nx-tooltip text="Tooltip on right" position="right">Hover over me (right)</nx-tooltip>
    `,
};
