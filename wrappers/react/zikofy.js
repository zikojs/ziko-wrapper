import {createRoot} from "react-dom/client";
import { isValidElement,createElement } from "react";
import { tags } from "ziko/ui"

export const zikofy = (Component, props = {}) => {
    const container = document.createElement("div");
    container.style.display = 'contents';
    container.setAttribute('data-wrapper', 'react')

    const root = createRoot(container);
    const isJsx = isValidElement(Component);
    root.render(isJsx ? Component : createElement(Component, props));
    const ui = tags.div()
    ui.replaceElementWith(container)
    return ui;
};