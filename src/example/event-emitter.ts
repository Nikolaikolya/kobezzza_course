import { EventEmitter } from "../library/event-emitter";
import { DOMEventEmitter } from "../library/event-emitter/dom-event-emitter";
const dee = new DOMEventEmitter();

const ee = new EventEmitter(dee);

ee.on({ action: () => {}, event: "click", target: "a" });

ee.emit({ args: [], event: "click" });
