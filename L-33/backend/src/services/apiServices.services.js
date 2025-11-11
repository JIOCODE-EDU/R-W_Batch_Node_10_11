import fetch from 'node-fetch'
import dotenv from 'dotenv'

dotenv.config();

export const getDashboard = async() => {
  const [weather , news , joke] = await Promise.all([
    fetchWeather(),
    fetchNews(),
    fetchJoke()
  ])

  return {weather , news , joke}
}

export const fetchWeather = async() => {
  const  url = "https://api.openweathermap.org/data/2.5/weather?q=surat&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric"
  const res = await fetch(url)
  return res.json()
}

export const fetchNews = async() => {
  const  url = "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
  const res = await fetch(url)
  return res.json()
}

export const fetchJoke = async() => {
  const  url = "https://official-joke-api.appspot.com/random_joke"
  const res = await fetch(url)
  return res.json()
}


 

