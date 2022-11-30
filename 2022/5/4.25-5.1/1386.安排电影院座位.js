/*
 * @lc app=leetcode.cn id=1386 lang=javascript
 *
 * [1386] 安排电影院座位
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n, reservedSeats) {
  const BASE = 1023;
  let tmp = new Array(10);
  tmp[0] = 1;
  for (let i = 1; i < 10; i++) {
    tmp[i] = tmp[i - 1] << 1;
  }

  // 该排有人预定才设置记录，否则构建长度为 n 的数组会超时
  let seats = {};
  reservedSeats.forEach(([row, col]) => {
    if (!seats[row]) {
      seats[row] = BASE;
    }
    seats[row] -= tmp[col - 1];
  });

  let res = 0;
  Object.values(seats).forEach(v => {
    res += familyNums(v);
  });

  // 未预定的排可安排 2 个家庭
  return res + (n - Object.keys(seats).length) * 2;
};

function familyNums(seats) {
  const CENTER_EIGHT = 510;
  const LEFT_FOUR = 30;
  const CENTER_FOUR = 120;
  const RIGHT_FOUR = 480;
  if ((seats & CENTER_EIGHT) === CENTER_EIGHT) {
    return 2;
  } else if (
    (seats & LEFT_FOUR) === LEFT_FOUR ||
    (seats & CENTER_FOUR) === CENTER_FOUR ||
    (seats & RIGHT_FOUR) === RIGHT_FOUR
  ) {
    return 1;
  } else {
    return 0;
  }
}
// @lc code=end
var n = 3;
var reservedSeats = [
  [1, 2],
  [1, 3],
  [1, 8],
  [2, 6],
  [3, 1],
  [3, 10],
];

n = 2;
reservedSeats = [
  [2, 1],
  [1, 8],
  [2, 6],
];

// n = 4;
// reservedSeats = [
//   [4, 3],
//   [1, 4],
//   [4, 6],
//   [1, 7],
// ];

n = 1000000000;

reservedSeats = [
  [819881, 3],
  [796572, 1],
  [498217, 4],
  [219145, 3],
  [12808, 5],
  [478188, 4],
  [563665, 5],
  [461492, 4],
  [49556, 4],
  [192541, 4],
  [115694, 8],
  [523212, 6],
  [530386, 6],
  [575022, 3],
  [919898, 9],
  [576162, 9],
  [821603, 9],
  [217816, 5],
  [326482, 3],
  [945562, 1],
  [369848, 7],
  [15008, 3],
  [700623, 9],
  [905121, 4],
  [173854, 10],
  [759043, 7],
  [622180, 7],
  [717415, 9],
  [602164, 5],
  [48185, 3],
  [911404, 7],
  [273635, 6],
  [711761, 2],
  [858995, 2],
  [216482, 2],
  [833530, 2],
  [933450, 6],
  [385419, 7],
  [763190, 1],
  [6325, 7],
  [299170, 7],
  [289710, 5],
  [66886, 6],
  [747748, 2],
  [845749, 7],
  [286780, 10],
  [696013, 3],
  [965264, 8],
  [934185, 3],
  [474504, 4],
  [531569, 8],
  [303379, 10],
  [375867, 10],
  [796599, 4],
  [203557, 3],
  [822215, 3],
  [105553, 6],
  [293820, 4],
  [935987, 1],
  [834710, 6],
  [575793, 5],
  [315024, 8],
  [32744, 8],
  [268087, 7],
  [503906, 3],
  [811415, 10],
  [820695, 8],
  [22564, 8],
  [370036, 7],
  [894389, 3],
  [824970, 2],
  [810084, 6],
  [826727, 4],
  [205293, 7],
  [586019, 10],
  [14425, 7],
  [762601, 6],
  [1568, 4],
];

console.log(maxNumberOfFamilies(n, reservedSeats));
