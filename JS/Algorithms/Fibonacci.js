const fibobacci = n => {
    let res = [];
    let n1 = 0, n2 = 1, next;

    for (let i = 1; i < n; i++) {
        res.push(n1)
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }

    console.log(res);
    return res;
}

fibobacci(1000)