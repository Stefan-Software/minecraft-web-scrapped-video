const mouseController = {
    hide() {
        var canvas = document.querySelector('canvas');
        console.log(canvas);
        canvas.style.cursor = 'none';
    },
    show() {
        var canvas = document.querySelector('canvas');
        canvas.style.cursor = 'default';
    }
};
export default mouseController;
