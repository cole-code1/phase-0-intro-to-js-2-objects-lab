// Write your solution in this file!
const employee = {name:'Collins',
     streetAddress:'Komarock',
     }
function updateEmployeeWithKeyAndValue(employee,key,value) {
    const copyOfEmployee={...employee,"streetAddress":"11 Broadway"}
    return copyOfEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    employee["streetAddress"]="12 Broadway"
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const copyOfEmployee={...employee}
    delete copyOfEmployee[key]
    return copyOfEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}




