export function selectionSort(array) {
    var sort = array;
    var changes = []; //
    var i = 0;
    var j = 0;
    var indexMin;
    var temp;
    for(i; i < sort.length; i++){

        var change;
        indexMin = i;
        for(j = i + 1; j < sort.length; j++){
            change = {};
            change.value = [indexMin, j];
            change.flag = "c";

            if(sort[indexMin] > sort[j]){
                indexMin = j;
            }
            changes.push(change);
            changes.push(change);
            changes.push(change);
        }
        change = {};
        change.value = [indexMin, i];
        change.flag = "s";
        temp = sort[indexMin];
        sort[indexMin] = sort[i];
        sort[i] = temp;
        changes.push(change);
        changes.push(change);
        changes.push(change);
    }
    return changes;
}

export function bubbleSort(array) {
    var sort = array;
    var changes = [];
    
    for(let i = 0; i < array.length - 1; i++){
        var change;
        for(let j = 0; j < array.length - i - 1; j++){
            change = {};
            change.value = [j, j+1];
            change.flag = "c";
            changes.push(change);
            changes.push(change);
            

            if(sort[j] > sort[j+1]){
                change = {};
                change.value = [j, j+1];
                change.flag = "s";
                const temp = sort[j];
                sort[j] = sort[j+1];
                sort[j+1] = temp;
    
            }
            changes.push(change);
        }
      
    }
    return changes;
}; 