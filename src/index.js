const omletteRecipe = {
    eggs: 4,
    salt: 1,
    veggies: 3,
    spices: 2
}

const masalaOmletteRecipe = {
    ...omletteRecipe,
    masala: 1,
    spices: 1
}

// async function getPosts() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await res.json()
//     return data
// }

// getPosts().then(posts => console.log(posts))

console.log(omletteRecipe)
console.log(masalaOmletteRecipe)