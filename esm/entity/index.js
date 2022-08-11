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
    fillColor: Color,
    strokeColor: Color,
    width: Number,
    fill: Boolean,
    //
    rotation: Number,
    scaleX: Number,
    scaleY: Number,
    getCenter
};
function getCenter() {
    return {
        x: (this.x + this.width)/2,
        y: (this.y + this.height)/2
    };
}
/**
 *
 * @param {*} ctx  CanvasRenderingContext2D
 */
function basicDrawer(ctx, shape) {
    if (this.fill) {
        ctx.beginPath();
        ctx.fillStyle=this.color;
        shape(ctx);
        ctx.fill();
    } else {
        ctx.strokeColor=this.color;
        shape(ctx);
        ctx.stroke();
    }
}
/**
 *
 * @param {*} ctx  CanvasRenderingContext2D
 */
function circle(ctx) {
    const center = this.getCenter();
    ctx.arc(center.x, center.y, this.width/2, 0, 0, 2 * Math.PI)
}
/**
 *
 * @param {*} ctx  CanvasRenderingContext2D
 */
 function rectangle(ctx) {
    ctx.rect(this.x, this.y, this.width, this.height)
}
