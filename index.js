// Write your solution in this file!
const employee = {
    name: "Gabrielle",
    streetAddress: "tbd"
}
function updateEmployeeWithKeyAndValue(object, key, value) {
    const newEmployee = {
        ...object,
        [key]: value,
    }
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
    }

function deleteFromEmployeeByKey(object, key) {
    const newEmployee = {
        ...object,
    }
    delete newEmployee.name
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete employee.name
    return employee
}