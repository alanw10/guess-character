 const getTopCharacters = async (num) => { //function fetches the top characters using api
    const response = await fetch(`https://api.jikan.moe/v4/top/characters?page=${num}`) 
    const data = await response.json()
    console.log("this is data.data")
    console.log(data.data)

    return data.data
  }

export default getTopCharacters
