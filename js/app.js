var App = (function () {
    function App() {
    }
    App.prototype.log = function () {
        console.log("hello welcome to typescript");
    };
    App.prototype.alert = function () {
        alert("I love typescript");
    };
    return App;
}());
var app = new App();
app.log();
app.alert();
//# sourceMappingURL=app.js.map