function run() {
    var screen_width = window.innerWidth;
    var screen_height = window.innerHeight;
    var rows = document.getElementsByClassName("");

    var container = document.getElementsByClassName("f-container");
    if(container.length !== 1) return;
    container = container[0];
    container.style.width = screen_width + "px";
    container.style.height = screen_height + "px";

    split_row(container);
}

function split_row(element) {
    var rows = getElementByClassNameAtDirectoryUnder(element, "row");
    for(let el of rows){
        split_row(el);
        split_col(el);
        el.style.height = cal_row_height(el, rows) + "%";
    }
}

function split_col(element){
    var cols = getElementByClassNameAtDirectoryUnder(element, "col");
    for(let el of cols){
        split_row(el);
        split_col(el);
        el.style.width = cal_col_width(el, cols) + "%";
    }
}

function cal_row_height(element, rows_has_same_parent){
    var sum = 0;
    for(let el of rows_has_same_parent){
        var row_span = getAttributeOrDefault(el, "f-row-span", 1);
        sum += parseInt(row_span);
    }
    return (parseInt(getAttributeOrDefault(element, "f-row-span", 1))  / sum) * 100;
}

function cal_col_width(element, rows_has_same_parent){
    var sum = 0;
    for(let el of rows_has_same_parent){
        var col_span = getAttributeOrDefault(el, "f-col-span", 1);
        sum += parseInt(col_span);
    }
    return (parseInt(getAttributeOrDefault(element, "f-col-span", 1)) / sum) * 100;
}

function getAttributeOrDefault(element, attr_name, default_value){
    var value = element.getAttribute(attr_name);
    return value === null ? default_value : value;
}

window.addEventListener("resize" , evt => {
    run();
});

run();