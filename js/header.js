function header(){
    return "<div class=\"container\">\n" +
        "            <div class=\"row\">\n" +
        "                <div class=\"pull-left col-md-4 header-left\">\n" +
        "                    <p class=\"fas fa-map-marker-alt pull-left\"></p>\n" +
        "                    <p class=\"pull-right\">\n" +
        "                        2 truong sa ,tphcm\n" +
        "                    </p>\n" +
        "                </div>\n" +
        "                <div class=\"pull-right col-md-8 header-right\">\n" +
        "                    <p class=\"col-md-6 col-md-offset-2 pull-left\">\n" +
        "                        Call 0772831467\n" +
        "                    </p>\n" +
        "                    <div class=\"col-md-4 pull-right\">\n" +
        "                        <input class=\"form-control\" type=\"search\" name=\"search\" placeholder=\"Tìm kiếm\"/>\n" +
        "                    </div>\n" +
        "\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" +
        "        </div>"
}
var hd = document.getElementById("header");
hd.innerHTML = header();
