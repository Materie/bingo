// const board = document.querySelector(".bbm-board")

// const rows = board?.querySelectorAll(".bbm-row")

// let cellData: IAchievement[][] = []

// const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

// rows?.forEach((row, ri) => {
// 	console.log({ row, ri })
// 	const cells = row.querySelectorAll(".bbm-b")
// 	cells.forEach(async (cell, ci) => {
// 		console.log({ cell, ci })
// 		const castCell = cell as HTMLElement
// 		castCell.click()
// 		await sleep(500)
// 		const fullBadge = document.querySelector(".bbm-badge")
// 		cellData[ri][ci] = {
// 			title: fullBadge?.querySelector("tb-text")?.innerHTML ?? "",
// 			value: fullBadge
// 				?.querySelector("medal")
// 				?.classList.contains("medal-bronze")
// 				? "bronze"
// 				: "silver",
// 			area: "Tidskrefter",
// 		}
// 	})
// })
