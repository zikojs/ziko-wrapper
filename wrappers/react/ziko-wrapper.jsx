import { useRef, useEffect } from "react";
const process_ziko_component = (child) => {
  if (typeof child?.type === "function") {
    let ZIKO_COMPONENT;
    if (child.props?.children) {
      const childArray = Array.isArray(child.props.children)
        ? child.props.children
        : [child.props.children];
      const processedChildren = childArray
        .map((nestedChild) => process_ziko_component(nestedChild))
        .filter((element) => element !== null);
      ZIKO_COMPONENT = child.type(child.props, ...processedChildren);
    } 
    else ZIKO_COMPONENT = child.type(child.props);
    return ZIKO_COMPONENT.unmount();
  }
  return null;
};
export function ZikoWrapper({ children }) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current && children) {
      containerRef.current.innerHTML = "";
      const childArray = Array.isArray(children) ? children : [children];
      childArray.forEach((child) => {
        const processedComponent = process_ziko_component(child);
        if (processedComponent?.element instanceof HTMLElement) {
          containerRef.current.appendChild(processedComponent.element);
        }
      });
    }
  }, [children]);

  return (
    <div
      data-wrapper="ziko-wrapper"
      data-engine="zikojs"
      ref={containerRef}
      style={{ display: "contents" }}
    />
  );
}
