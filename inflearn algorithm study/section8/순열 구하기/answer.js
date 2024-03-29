function solution(n, arr, r) {
  let answer = [];
  let ch = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: r }, () => 0);
  function DFS(l) {
    if (l === r) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[l] = arr[i];
          DFS(l + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution(3, [3, 6, 9], 2));
