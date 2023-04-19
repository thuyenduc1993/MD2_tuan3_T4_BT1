// function insertionSort1(arr) {
//     let len = arr.length;
//     for (let i = 1; i < len; i++) {
//         let value = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > value) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         arr[j + 1] = value;
//     }
//     return arr;
// }
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        for (var j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                var index = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = index;
                // [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            }
        }
    }
    return arr;
}
var new_arr = [4, 5, 78, 2, 5, 7, 6];
console.log(insertionSort(new_arr));
