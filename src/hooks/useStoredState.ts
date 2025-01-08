import { useEffect, useState } from "react"

export const useStoredState = <T>(defaultValue: T, key: string) => {
	const [value, setValue] = useState<T>(() => {
		const data = localStorage.getItem(key)
		return data !== null ? JSON.parse(data) : defaultValue
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>]
}
