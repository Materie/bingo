import { createGlobalStyle } from "styled-components"
import { Board } from "./components/Board"
import { IAchievement } from "./types/IAchievement"
import { useMemo, useState } from "react"
import { useStoredState } from "./hooks/useStoredState"
import { board2025 } from "./data/2025"

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
	}

	:root{
		--color-silver: #ededed;
		--gradient-silver: linear-gradient(45deg, hsl(0, 0%, 74%), hsl(0, 0%, 55%));
		--color-bronze: #8a4300;
		--gradient-bronze-1: linear-gradient(45deg, hsl(26, 85%, 30%), hsl(22, 71%, 60%));
		--gradient-bronze-2: linear-gradient(45deg, #8a4300, #b76e01);
		--gradient-bronze-3: linear-gradient(45deg, #e0982d, #80501a);
	}

	#root {
		width: 100%;
		min-height: 100vh;
		display: flex;
	}

	h2 {
		margin: 0;
		padding: 0;
	}
`

function App() {
	// const [progress, setProgress] = useStoredState<IAchievement["title"][]>(
	// 	[],
	// 	"bingo-progress"
	// )

	// const toggleProgress = (title: IAchievement["title"]) => {
	// 	if (progress.includes(title)) {
	// 		setProgress((prev: IAchievement["title"][]) =>
	// 			prev.filter((item) => item !== title)
	// 		)
	// 	} else {
	// 		setProgress((prev: IAchievement["title"][]) => [...prev, title])
	// 	}
	// }

	return (
		<>
			<GlobalStyle />
			<Board
				dataRows={board2025}
				//progress={progress}
				//toggleProgress={toggleProgress}
			/>
		</>
	)
}

export default App
