function findEmployeesRole(name) {
    let role = 'Does not work here!';

    for (let i = 0; i < employees.length; i++) {
        if ((employees[i].firstName + ' ' + employees[i].lastName) == name) {
            role = employees[i].role;
        }
    }

    return role;
}

const employees = [{ firstName: 'Ollie', lastName: 'Hepburn', role: 'Boss' },
{ firstName: 'Morty', lastName: 'Smith', role: 'Truck Driver' },
{
    firstName: 'Peter',
    lastName: 'Ross',
    role: 'Warehouse Manager'
},
{ firstName: 'Cal', lastName: 'Neil', role: 'Sales Assistant' },
{ firstName: 'Jesse', lastName: 'Saunders', role: 'Admin' },
{ firstName: 'Anna', lastName: 'Jones', role: 'Sales Assistant' },
{ firstName: 'Carmel', lastName: 'Hamm', role: 'Admin' },
{ firstName: 'Tori', lastName: 'Sparks', role: 'Sales Manager' },
{
    firstName: 'Peter',
    lastName: 'Jones',
    role: 'Warehouse Picker'
},
{
    firstName: 'Mort',
    lastName: 'Smith',
    role: 'Warehouse Picker'
},
{ firstName: 'Anna', lastName: 'Bell', role: 'Admin' },
{ firstName: 'Jewel', lastName: 'Bell', role: 'Receptionist' },
{ firstName: 'Colin', lastName: 'Brown', role: 'Trainee' }]

console.log(findEmployeesRole("Morty Smith"));