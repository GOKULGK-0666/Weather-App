export function weatherLabel(code: number) { if (code === 0) return 'Clear skies'; if (code <= 3) return 'Partly cloudy'; if (code <= 48) return 'Overcast'; if (code <= 67) return 'Rain showers'; if (code <= 77) return 'Snow'; if (code <= 82) return 'Rain showers'; return 'Thunderstorms' }
export function weatherIcon(code: number) { if (code === 0) return '☀'; if (code <= 3) return '◑'; if (code <= 48) return '☁'; if (code <= 67) return '☂'; if (code <= 82) return '◒'; return 'ϟ' }
export function formatHour(value: string) { return new Date(value).toLocaleTimeString('en-IN', { hour: 'numeric' }) }
export function formatDay(value: string) { return new Date(value).toLocaleDateString('en-IN', { weekday: 'short' }) }
export function formatDate(value: string) { return new Date(value).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) }
