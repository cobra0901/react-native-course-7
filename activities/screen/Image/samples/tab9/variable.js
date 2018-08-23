
export const COLORS = [
    '#65b237', // green
    '#346ca5', // blue
    '#a0a0a0', // light grey
    '#ffc508', // yellow
    '#217983', // cobolt
    '#435056', // grey
    '#b23751', // red
    '#333333', // dark
    '#ff6821', // orange
    '#e3a09e', // pink
    '#1abc9c', // turquoise
    '#302614', // brown
];

export const ANIMATION_TYPES = {
    'Attention Seekers': [
        'bounce',
        'flash',
        'jello',
        'pulse',
        'rotate',
        'rubberBand',
        'shake',
        'swing',
        'tada',
        'wobble',
    ],
    'Bouncing Entrances': [
        'bounceIn',
        'bounceInDown',
        'bounceInUp',
        'bounceInLeft',
        'bounceInRight',
    ],
    'Bouncing Exits': [
        'bounceOut',
        'bounceOutDown',
        'bounceOutUp',
        'bounceOutLeft',
        'bounceOutRight',
    ],
    'Fading Entrances': [
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInUp',
        'fadeInUpBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
    ],
    'Fading Exits': [
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutUp',
        'fadeOutUpBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
    ],
    Flippers: [
        'flipInX',
        'flipInY',
        'flipOutX',
        'flipOutY',
    ],
    Lightspeed: [
        'lightSpeedIn',
        'lightSpeedOut',
    ],
    'Sliding Entrances': [
        'slideInDown',
        'slideInUp',
        'slideInLeft',
        'slideInRight',
    ],
    'Sliding Exits': [
        'slideOutDown',
        'slideOutUp',
        'slideOutLeft',
        'slideOutRight',
    ],
    'Zooming Entrances': [
        'zoomIn',
        'zoomInDown',
        'zoomInUp',
        'zoomInLeft',
        'zoomInRight',
    ],
    'Zooming Exits': [
        'zoomOut',
        'zoomOutDown',
        'zoomOutUp',
        'zoomOutLeft',
        'zoomOutRight',
    ],
};

export const NATIVE_INCOMPATIBLE_ANIMATIONS = [
    'jello',
    'lightSpeedIn',
    'lightSpeedOut',
];


export default {
    NATIVE_INCOMPATIBLE_ANIMATIONS,
    ANIMATION_TYPES,
    COLORS
};