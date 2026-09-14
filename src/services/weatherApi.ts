import type { Location, WeatherData } from '../types'

const weatherUrl = 'https://api.open-meteo.com/v1/forecast'
const geoUrl = 'https://geocoding-api.open-meteo.com/v1/search'

export async function searchLocations(name: string): Promise<Location[]> {
  const response = await fetch(`${geoUrl}?name=${encodeURIComponent(name)}&count=8&language=en&format=json`)
  if (!response.ok) throw new Error('Could not search locations')
  const data = await response.json()
  return (data.results ?? []).map((item: Location) => ({ name: item.name, country: item.country, admin1: item.admin1, latitude: item.latitude, longitude: item.longitude }))
}

export async function fetchWeather(location: Location): Promise<WeatherData> {
  const params = new URLSearchParams({
    latitude: String(location.latitude), longitude: String(location.longitude), timezone: 'auto',
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m',
    hourly: 'temperature_2m,precipitation_probability,wind_speed_10m,weather_code',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max',
    forecast_days: '7', forecast_hours: '24',
  })
  const response = await fetch(`${weatherUrl}?${params}`)
  if (!response.ok) throw new Error('Weather service unavailable')
  const data = await response.json()
  return {
    location, current: { temperature: data.current.temperature_2m, feelsLike: data.current.apparent_temperature, humidity: data.current.relative_humidity_2m, wind: data.current.wind_speed_10m, windDirection: data.current.wind_direction_10m, pressure: data.current.surface_pressure, visibility: 10, code: data.current.weather_code, isDay: data.current.is_day, time: data.current.time },
    hourly: { time: data.hourly.time, temperature: data.hourly.temperature_2m, precipitation: data.hourly.precipitation_probability, wind: data.hourly.wind_speed_10m, code: data.hourly.weather_code },
    daily: { time: data.daily.time, high: data.daily.temperature_2m_max, low: data.daily.temperature_2m_min, precipitation: data.daily.precipitation_probability_max, code: data.daily.weather_code, sunrise: data.daily.sunrise, sunset: data.daily.sunset },
  }
}

export const defaultLocation: Location = { name: 'Hosur', country: 'India', admin1: 'India', latitude: 12.7409, longitude: 77.8253 }
export const supportedCities: Location[] = [
  ['Chennai',13.0827,80.2707],['Coimbatore',11.0168,76.9558],['Madurai',9.9252,78.1198],['Tiruchirappalli',10.7905,78.7047],['Salem',11.6643,78.146],['Tirunelveli',8.7139,77.7567],['Erode',11.341,77.7172],['Vellore',12.9165,79.1325],['Thoothukudi',8.7642,78.1348],['Thanjavur',10.787,79.1378],['Dindigul',10.3673,77.9803],['Tiruppur',11.1085,77.3411],['Hosur',12.7409,77.8253],['Ooty',11.4102,76.695],['Kodaikanal',10.2381,77.4892],['Rameswaram',9.2885,79.3127],['Puducherry',11.9416,79.8083]].map(([name, latitude, longitude]) => ({ name: String(name), country: 'India', admin1: 'India', latitude: Number(latitude), longitude: Number(longitude) }))
