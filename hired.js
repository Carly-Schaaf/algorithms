const solution = (n) => {
    const hash = {};
    let max = 0;
    n = (n).toString();
    let substring = [];

    for (let index = 0; index < n.length; index++) {
        const element = n[index];
        if (hash[element]) {
            let first = substring.shift();
            while (first !== element) {
                hash[first] = false;
                first = substring.shift();
            }
            substring.push(element);
        } else {
            hash[element] = true;
            substring.push(element);
            if (substring.length > max) {
                max = substring.length;
            }
        }
    }
    return max;
};

console.log(solution(1012345678910))