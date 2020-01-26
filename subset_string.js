let sample_string_1 = "dog";
let sample_string_2 = "key";
let sample_string_3 = "str";

let get_substring = str => {

    let arr = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j <= str.length; j++) {
            arr.push(str.substring(i,j));
        }
    }

    return arr;
}

console.log(get_substring(sample_string_1));    // ["d", "do", "dog", "o", "og", "g"]
console.log(get_substring(sample_string_2));    // ["k", "ke", "key", "e", "ey", "y"]
console.log(get_substring(sample_string_3));    // ["s", "st", "str", "t", "tr", "r"]