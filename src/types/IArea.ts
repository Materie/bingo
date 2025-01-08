const valueTags = ["Bronsebevis", "Sølvbevis", "Gullbevis"]

export type IValueTag = (typeof valueTags)[number]

export const getValueTag = (
	value: "bronze" | "silver" | "gold" | undefined
) => {
	if (value === "gold") return valueTags[2]
	if (value === "silver") return valueTags[1]
	return valueTags[0]
}

const area = [
	"Granskauen",
	"Fjellheimen",
	"Dypvann",
	"Svarthaug og omegn",
	"Ørkenen",
	"Hasardspill",
	"Ditt og datt",
	"Dødens Dal",
	"Høyborg",
	"Bananøya og Ferieøya",
	"Sumpøya",
	"Tidskrefter",
	"Jungeløya",
	"Helvete",
	"Dengeball",
	"Den Niende Hånds Orden",
	"Utstyr",
	"Ørkenbyen",
] as const

export type IArea = (typeof area)[number]
