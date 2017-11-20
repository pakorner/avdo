import { JsApi } from '../jsapi';
/**
 * Convert path string to JS representation.
 *
 * @param {String} pathString input string
 * @param {Object} params plugin params
 * @return {Array} output array
 */
export declare function path2js(path: JsApi): {
    instruction: string;
    data?: number[];
}[];
/**
 * Convert relative Path data to absolute.
 *
 * @param {Array} data input data
 * @return {Array} output data
 */
export declare function relative2absolute(data: any): any;
/**
 * Apply transformation(s) to the Path data.
 *
 * @param {Object} elem current element
 * @param {Array} path input path data
 * @param {Object} params whether to apply transforms to stroked lines and transform precision (used for stroke width)
 * @return {Array} output path data
 */
export declare function applyTransforms(elem: any, path: any, params: any): any;
/**
 * Compute Cubic Bézier bounding box.
 * @see http://processingjs.nihongoresources.com/bezierinfo/
 */
export declare function computeCubicBoundingBox(xa: number, ya: number, xb: number, yb: number, xc: number, yc: number, xd: number, yd: number): {
    minx: number;
    miny: number;
    maxx: number;
    maxy: number;
};
/**
 * Compute Quadratic Bézier bounding box.
 *
 * @see http://processingjs.nihongoresources.com/bezierinfo/
 */
export declare function computeQuadraticBoundingBox(xa: number, ya: number, xb: number, yb: number, xc: number, yc: number): {
    minx: number;
    miny: number;
    maxx: number;
    maxy: number;
};
/**
 * Convert path array to string.
 */
export declare function js2path(path: JsApi, data: Array<{
    instruction: string;
    data?: number[];
}>, params: {
    collapseRepeated: boolean;
    leadingZero: boolean;
    negativeExtraSpace: boolean;
}): void;
/**
 * Checks if two paths have an intersection by checking convex hulls
 * collision using Gilbert-Johnson-Keerthi distance algorithm
 * http://entropyinteractive.com/2011/04/gjk-algorithm/
 *
 * @param {Array} path1 JS path representation
 * @param {Array} path2 JS path representation
 * @return {Boolean}
 */
export declare function intersects(path1: any, path2: any): any;
