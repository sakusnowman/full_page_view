function getElementByClassNameAtDirectoryUnder(element, class_name) {
    var result = [];
    for (let e of element.childNodes) {
        if(e.nodeType !== 1) continue;
        let c_names = e.className.split(' ');
        for (let n of c_names) {
            if (n === class_name) {
                result.push(e);
            }
        }
    }
    return result;
}
