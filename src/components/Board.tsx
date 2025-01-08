import styled from "styled-components"
import { Achievement } from "./Achievement"
import { IAchievement } from "../types/IAchievement"

const Wrapper = styled.div`
	margin: auto;
	display: grid;
	grid-template-columns: repeat(5, 18vh);
	grid-template-rows: repeat(5, 18vh);
	gap: 8px;
`

interface Props {
	dataRows: IAchievement[][]
	//progress: IAchievement["title"][]
	//toggleProgress: (title: IAchievement["title"]) => void
}

export const Board = ({
	dataRows,
}: //progress,
//toggleProgress
Props) => {
	return (
		<Wrapper>
			{dataRows.map((row) => {
				return row.map((cell) => {
					return (
						<Achievement
							key={cell.title}
							id={cell.title}
							//id={`${ci}y${ri}x`}
							{...cell}
							//achieved={progress.includes(cell.title)}
							//handleClick={() => toggleProgress(cell.title)}
						/>
					)
				})
			})}
		</Wrapper>
	)
}
