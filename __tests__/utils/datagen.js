exports.generatePartsOfWhole = function() {
  let data = [],
    names = [
      "Led Zeppelin",
      "AC/DC",
      "Def Lepard",
      "Van Halen",
      "Eagles",
      "Black Sabbath",
      "Scorpions",
      "Starship",
      "Chuck Berry",
      "Nirvana",
      "Pearl Jam",
      "Porcupine Tree",
      "Rush",
      "Opeth",
      "Motorhead"
    ],
    values = [],
    number = 0,
    randomNum = Math.ceil(Math.random() * names.length)

  while (values.length < randomNum) {
    number = Math.floor(Math.random() * 500)
    values.push(number)
  }

  let len = values.length,
    namesArr = names.slice(0, len)

  for (let i = 0; i < len; i++) {
    let name = namesArr[i]
    let obj = {
      title: name,
      value: values[i]
    }
    data.push(obj)
  }

  return data
}
