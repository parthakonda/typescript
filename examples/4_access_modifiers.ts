class Employee {
    private name: string;
    private id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
    show():void {
        console.log(`name - ${this.name}`);
        console.log(`id - ${this.id}`);
    }
}

let emp = new Employee("Partha", 1);
// emp.name = "Saradhi"; // this will be an error
emp.show();