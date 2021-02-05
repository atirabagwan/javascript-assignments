arr = [1,2,2,4,5]
search = 2

function countOccurrence(arr, search){
    return arr.filter(element => element==search).length;
}

