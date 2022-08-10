// Ref : https://konvajs.org/api/Konva.Rect.html
const Number = {};
const Color = {};
const Boolean = {};
const entityModel = {
    //
    x: Number,
    y: Number,
    width: Number,
    height: Number,
    //
    opacity: Number,
    color: Color,
    width: Number,
    fill: Boolean,
    //
    rotation: Number,
    scaleX: Number,
    scaleY: Number
};
function getCenter() {
    return [
        (this.x + this.width)/2,
        (this.y + this.height)/2
    ];
}
const rectModel= {
    ... entityModel,
    getCenter,
}
const circleModel= {
    ... entityModel,
    getCenter,
    radius: Number,
}