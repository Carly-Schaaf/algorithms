var wordBreak = function(s, wordDict, memo = new Array(s.length)) {
    if (wordDict.includes(s)) return true;
    
    let firstValidWord = "";

    for (let i = 0; i <= s.length; i++) {
        firstValidWord += s[i];

        if (wordDict.includes(firstValidWord)) {
            const remainder = s.slice(i + 1);

            if (memo[remainder.length] === false) {
                continue;
            } else if (memo[remainder.length] === true) {
                return true;
            } else {
                const result = wordBreak(remainder, wordDict, memo);
                memo[remainder.length] = result;

                if (result) {
                    return true;
                }
            }
        }
    }
    return false;
};

console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]));
// console.log(wordBreak("leetcode", ["leet", "code"]));
// console.log(wordBreak("goalspecial", ["go","goal", "goals","special"]));
// console.log(wordBreak("catsandog", ["cats","dog","sand", "and","cat"]));
