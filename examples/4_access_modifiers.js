var Employee = /** @class */ (function () {
    function Employee(name, id) {
        this.name = name;
        this.id = id;
    }
    Employee.prototype.show = function () {
        console.log("name - " + this.name);
        console.log("id - " + this.id);
    };
    return Employee;
}());
var emp = new Employee("Partha", 1);
emp.name = "Saradhi";
emp.show();
