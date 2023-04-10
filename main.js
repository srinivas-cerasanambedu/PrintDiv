function print() {
    var divContents = document.getElementById("main").innerHTML;
    var a = window.open("", "");
    a.document.write("<html>");
    a.document.write("<head><style>");
    var stylesheets = document.styleSheets;
    for(var i=0;i<stylesheets.length;i++){
        for(var j=0;j<stylesheets[i].cssRules.length;j++){
            a.document.write(stylesheets[i].cssRules[j].cssText);
        }
    }
    a.document.write("</style></head>");
    a.document.write("<body>");
    a.document.write(divContents);
    a.document.write("</body></html>");
    a.document.close();
    a.print();
}