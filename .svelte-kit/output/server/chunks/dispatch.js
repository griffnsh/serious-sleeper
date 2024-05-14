function dispatch(element, eventType, detail, eventInit = { bubbles: true }, duplicateEventForMDC = false) {
  if (typeof Event !== "undefined" && element) {
    const event = new CustomEvent(eventType, Object.assign(Object.assign({}, eventInit), { detail }));
    element === null || element === void 0 ? void 0 : element.dispatchEvent(event);
    if (duplicateEventForMDC && eventType.startsWith("SMUI")) {
      const duplicateEvent = new CustomEvent(eventType.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, eventInit), { detail }));
      element === null || element === void 0 ? void 0 : element.dispatchEvent(duplicateEvent);
      if (duplicateEvent.defaultPrevented) {
        event.preventDefault();
      }
    }
    return event;
  }
}
export {
  dispatch as d
};
