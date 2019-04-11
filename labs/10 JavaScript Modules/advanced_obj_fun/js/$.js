(function (window) {
    function $() {
        function id(id) {
            this.id = id;
            return document.getElementById(id);
        }
    }
    window.app = window.app || {};
    window.app.$ = $;
})(window);