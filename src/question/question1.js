const clothing = ["shirt", "pants", "jacket"]
const color = ["black", "white"]
const size = ["S", "M", "L"]

const generateList =() => {
    const list = []
    for(var i = 0; i < clothing.length; i++) {
        for(var j = 0; j < color.length; j++){
            for (var k = 0; k < size.length; k++) {
                list.push (`${clothing[i]} ${color[j]} ${size[k]}`)
            }
        }
    }
  return list
}
const list = generateList()
console.log(list)

