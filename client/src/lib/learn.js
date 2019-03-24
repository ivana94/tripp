export const scrambleKana = kana => {
    // randomly generate up to 5 sets of exercises
    let r = Math.floor(Math.random() * 5);
    let kanaArr = [];
    for (r; r >0; r--) {
        for (let k in kana) {
            kanaArr = [ ...kanaArr, ...Object.keys(kana[k])]
        }
    }
    // Fisher-Yates Shuffle Algorithm
    let j, x, i;
    for (i = kanaArr.length - 1; i > 0; i--) {
        // randomly generate array index
        j = Math.floor(Math.random() * (i + 1));
        if (i !== j) {
            x = kanaArr[i];
            kanaArr[i] = kanaArr[j];
            kanaArr[j] = x;
        }
    }
    return kanaArr;
}
