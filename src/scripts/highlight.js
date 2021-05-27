//highlight.js
'use strict';

export default (highlight, ...args) => {    
    if (highlight) {
        args.forEach(item => item.classList.add('active'));
        
    } else {
        args.forEach(item => item.classList.remove('active'));
    }
}
