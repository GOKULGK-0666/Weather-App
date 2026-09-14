export type Location = { name: string; country: string; admin1?: string; latitude: number; longitude: number }
export type WeatherData = {
  location: Location
  current: { temperature: number; feelsLike: number; humidity: number; wind: number; windDirection: number; pressure: number; visibility: number; code: number; isDay: number; time: string }
  hourly: { time: string[]; temperature: number[]; precipitation: number[]; wind: number[]; code: number[] }
  daily: { time: string[]; high: number[]; low: number[]; precipitation: number[]; code: number[]; sunrise: string[]; sunset: string[] }
}
