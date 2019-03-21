/**
 * rem布局核心代码
 * @param {remUnit, remLimit, original, listen, disableFontScale} conf 配置
 */
function px2rem(conf) {
    if (typeof window !== 'object') {
        return
    }
    var screenWidth = document.documentElement.offsetWidth > window.screen.width ? window.screen.width :
        document.documentElement.offsetWidth,
        remPx;
    conf.remUnit = Number(conf.remUnit) || 100;
    conf.remLimit = Number(conf.remLimit);
    conf.original = Number(conf.original) || 1080;
    if (!conf.remLimit || screenWidth < conf.remLimit) {
        remPx = screenWidth * conf.remUnit / conf.original;
    } else {
        remPx = conf.remLimit * conf.remUnit / conf.original;
    }
    document.documentElement.style.fontSize = remPx + "px";
    // 缩放比非标准调整
    if (!conf.disableFontScale) {
        var pxblock = document.createElement("div"),
            remblock = document.createElement("div");
        pxblock.style.width = remPx + "px";
        remblock.style.width = "1rem";
        var parent = document.body || document.documentElement;
        parent.appendChild(pxblock);
        parent.appendChild(remblock);
        var pxblockRect = pxblock.getBoundingClientRect(),
            remblockRect = remblock.getBoundingClientRect(),
            pxBlockW = pxblockRect.width || pxblockRect.right - pxblockRect.left,
            remBlockW = remblockRect.width || remblockRect.right - remblockRect.left;
        var fontPixelRatio = pxBlockW / remBlockW;
        pxblock.remove();
        remblock.remove();
        remPx = remPx * fontPixelRatio;
        document.documentElement.style.fontSize = remPx + "px";
    }
    if (conf.listen) {
        conf.listen = false;
        var callee = arguments.callee;
        window.addEventListener("resize", function () {
            callee.call(this, conf);
        }, false);
    }
}
if (typeof module === 'object') {
    module.exports = px2rem;
} else if (typeof window === 'object') {
    window.px2rem = px2rem;
}