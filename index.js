// Write your solution in this file!

const employee = {
        name : "Navita",
        streetAdress : "123 Main Street"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updateEmployee = {...employee}
    updateEmployee[key] = value
    return updateEmployee
}
// updateEmployeeWithKeyAndValue(employee,"name","Jacob")

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const copyEmployee = {...employee}
    delete copyEmployee[key] 
    return copyEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key] 
    return employee
}