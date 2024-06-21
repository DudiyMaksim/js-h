function countfiles(s){
    let c=0;
    while(s*1000>c){
        c+=820;
    }
    c>0? alert((c-820)/820):alert(c/820);
}
function showdate(dd,mm,yyyy){
    alert(`${dd}.${mm}.${yyyy}`)
}
function showrgb(d) {
    let arr = d.split(" ");
    alert(`rgb(${arr[0]},${arr[1]},${arr[2]})`);
}
// //task 1
// let d = prompt("day :")
// let m = prompt("month :")
// let y = prompt("year :")
// showdate(d,m,y)
// //task 2
// let size = prompt("Enter size :")
// countfiles(1);
// // task 3
// let details = prompt("Enter (r g b) :")
// showrgb(details)
//task 4
// let randnum = [];
// for (let i = 0; i < 10; i++) {
//     randnum[i] = Math.floor(Math.random() * 201) - 100;
// }
// console.log(randnum);
// let invrandnum = [];
// for (let i = 0; i < 10; i++) {
//     invrandnum[i] = randnum[i] * -1
// }
// invrandnum.sort((a, b) => a - b);
// console.log(invrandnum);