/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
  let map = new Map();
  let non = true;
  let res = Number.MAX_SAFE_INTEGER;
  for (let i = 0, len = cards.length; i < len; i++) {
    if (map.has(cards[i])) {
      non = false;
      res = Math.min(res, i - map.get(cards[i]) + 1);
    }
    map.set(cards[i], i);
  }
  return non ? -1 : res;
};

var cards = [3, 4, 2, 3, 4, 7, 4, 4];
cards = [1, 0, 5, 3, 3];

console.log(minimumCardPickup(cards));
