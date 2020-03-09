interface Employee {
    name: string,
    employeeId: number
}

let log = (employee: Employee) => {
    console.log(employee.employeeId);
    console.log(employee.name);
}

interface Compiler {
    code: any;
    compile: () => void;
}

let compiler: Compiler;

// Optional params

let invoke = (command: string, message?: string) => {
    console.log(`Invoking command ${command}`);
    console.log(`Showing message ${message}`);
}
