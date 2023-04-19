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

    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                console.log("Hoán đổi " + arr[i] + " với " + arr[i - 1])
                let index = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = index
                // [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                console.log(`minh hoa các bước chèn${arr}`)
            }
        }
    }
    return arr;
}
let new_arr = [4,5,78,2,5,7,6];
console.log(insertionSort(new_arr));