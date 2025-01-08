const getBoard = async () => {
	const board = document.querySelector(".bbm-board")

	const rows = board?.querySelectorAll(".bbm-row")

	let cellData = [[], [], [], [], []]

	const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

	for (const [ri, row] of rows?.entries() ?? []) {
		const cells = row.querySelectorAll(".bbm-b")
		for (const [ci, cell] of cells.entries()) {
			const castCell = cell
			console.log("Selecting next cell")
			castCell.click()
			await sleep(20)
			const fullBadge = document.querySelector(".bbm-badge")
			const title = fullBadge?.querySelector(".tb-text")?.innerHTML ?? ""
			const value = fullBadge
				?.querySelector(".medal")
				?.classList.contains("medal-bronze")
				? "bronze"
				: "silver"
			console.log(`Opening details for ${title}`)
			fullBadge?.querySelector(".tiny-badge").click()
			await sleep(1000)
			const modal = document.querySelector(".modal:has(.bd-area)")
			const tags = modal
				?.querySelector(".bd-area")
				?.innerHTML.split(", ")
				.slice(1)
			const bg = document.querySelector(".modal-bg:has(.bd-header)")
			console.log("Closing details")
			bg.click()
			await sleep(1000)
			cellData[ri][ci] = {
				title,
				value,
				area: tags,
			}
		}
	}

	console.log(cellData)
}
