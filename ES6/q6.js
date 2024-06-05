function sqlJoin(employees,salaries) {
    let result = [];
    for(let obj1 of employees) {
        for(let obj2 of salaries) {
            if( obj1.id == obj2.id) {
                result.push({...obj1,...obj2});
            }
        }
    }
    console.log(result)
}


const employees = [
    { id: 1, name: 'John', department: 'IT' },
    { id: 2, name: 'Jane', department: 'HR' },
    { id: 3, name: 'Doe', department: 'IT' }
];

const salaries = [
    { id: 1, salary: 50000 },
    { id: 2, salary: 60000 },
    { id: 4, salary: 55000 }
];


sqlJoin(employees,salaries);

// const result = sqlJoin(employees, salaries);
// console.log(result);