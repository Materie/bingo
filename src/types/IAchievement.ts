import { IArea } from "./IArea"

export interface IAchievement {
	title: string
	value?: "bronze" | "silver" //assume bronze if not provided
	area: IArea
	description?: string
	hints?: string[]
	minDays?: number
	discussion?: string
	achieved?: boolean
}
