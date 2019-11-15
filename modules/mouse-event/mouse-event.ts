import BaseEvent from "@pencil.js/base-event";
import Position from "@pencil.js/position";

/**
 * Mouse event class
 * @class
 * @extends BaseEvent
 */
export default class MouseEvent extends BaseEvent {
    /**
     * MouseEvent constructor
     * @param {String} name - Name of the event
     * @param {EventEmitter} target - Component concerned by the event
     * @param {PositionDefinition} positionDefinition - Position of the mouse when event trigger
     */
    constructor (name, target, positionDefinition) {
        super(name, target);
        this.position = Position.from(positionDefinition);
    }

    /**
     * @typedef {Object} MouseEvents
     * @enum {String}
     * @prop {String} down - Mouse button is pressed
     * @prop {String} up - Mouse button is released
     * @prop {String} click - Mouse button is pressed then released without moving
     * @prop {String} move - Mouse is moved
     * @prop {String} hover - Mouse goes hover a component
     * @prop {String} leave - Mouse leave a component
     * @prop {String} wheel - Mouse wheel is scrolled in any direction
     * @prop {String} scrollDown - Mouse wheel is scrolled down
     * @prop {String} scrollUp - Mouse wheel is scrolled up
     * @prop {String} zoomOut - Mouse wheel is scrolled down (away from the screen)
     * @prop {String} zoomIn - Mouse wheel is scrolled up (toward the screen)
     * @prop {String} grab - Mouse is clicked on a draggable component
     * @prop {String} drag - Mouse is moved while grabbing a component
     * @prop {String} drop - Mouse is release after dragging a component
     * @prop {String} resize - Mouse is moved while holding the handle of a resizable component
     * @prop {String} rotate - Mouse is rotating a component
     */
    /**
     * @return {MouseEvents}
     */
    static get events () {
        return {
            down: "mousedown",
            up: "mouseup",
            click: "click",
            move: "mousemove",
            hover: "hover",
            leave: "leave",
            wheel: "mousewheel",
            scrollDown: "scrolldown",
            scrollUp: "scrollup",
            zoomOut: "zoomout",
            zoomIn: "zoomin",
            grab: "grab",
            drag: "drag",
            drop: "drop",
            resize: "resize",
            rotate: "rotate",
        };
    }
}
