/**
 * 
 * @param {array} arr Array
 * @param {number} n Size of array
 */
const leftRotateByOne = (arr,n) => {
    let temp = arr[0];
    let i;
    for(i=0;i<n-1;i++){
        arr[i] = arr[i+1];
    }
    arr[i] = temp;
}
/**
 * 
 * @param {*} arr Array
 * @param {*} d Number of rotation
 * @param {*} n Size of array
 */
const leftRotate = (arr,d,n) => {
    for(let i=0;i<d;i++){
        leftRotateByOne(arr,n);
    }
}
/**
 * 
 * @param {*} arr Array
 * @param {*} n  Size of array
 */
const printArray = (arr,n) => {
    for(let i=0;i<n;i++){
        console.log(arr[i] + "");
    }
}
const main = () => {
    const arr = [1,2,3,4,5,6,7];
    const n = arr.length;
    console.log('---before----');
    printArray(arr,n);
    leftRotate(arr,2,n);
    console.log('---after----');
    printArray(arr,n);
}

main();