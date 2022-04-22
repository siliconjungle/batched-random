const PIECES = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
]

const randomRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const shuffle = arr => {
  // Only necessary if immutability matters.
  const arrCopy = JSON.parse(JSON.stringify(arr))
  for (let i = arrCopy.length - 1; i > 0; i--) {
    let j = randomRange(0, i)
    let t = arrCopy[i]
    arrCopy[i] = arrCopy[j]
    arrCopy[j] = t
  }
  return arrCopy
}

// Create bag, shuffle bag, pull elements from the front.
const getNextPiece = (pieces, remainingPieces) => {
  if (remainingPieces.length === 0) {
    remainingPieces = shuffle(pieces)
  }
  return remainingPieces.shift()
}

const remainingPieces = []
const nextPiece = getNextPiece(PIECES, remainingPieces)
console.log('_NEXT_PIECE_', nextPiece)
