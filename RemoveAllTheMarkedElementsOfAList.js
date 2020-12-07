/*Define a method/function that removes from a given array of integers all 
the values contained in a second array.*/

Array.prototype.remove_ = function (integer_list, values_list) {
    
    values_list.forEach(item => {
        integer_list = integer_list.filter(firstListItem => firstListItem != item);
    })

    return integer_list;
}