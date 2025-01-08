import styled from "styled-components"
import { IAchievement } from "../types/IAchievement"
//import { getValueTag } from "../types/IArea"
import { Tags } from "./Tags"
import { useStoredState } from "../hooks/useStoredState"

interface WrapperProps {
	$val: IAchievement["value"]
	$achieved?: boolean
}

const Wrapper = styled.div<WrapperProps>`
	border-radius: 8px;
	background-color: wheat;
	overflow: hidden;
	background: ${({ $val }) => {
		return $val === "silver"
			? "var(--gradient-silver)"
			: "var(--gradient-bronze-1)"
	}};
	padding: 4px;
	${({ $achieved }) => ($achieved ? `filter: brightness(1.6);` : "")}
	color: black;

	display: flex;
	flex-direction: column;
`

const Title = styled.h2<{ $val: IAchievement["value"]; $achieved?: boolean }>`
	/*height: 44px;*/
	margin-bottom: 0;
	padding: 8px 12px;
	margin: -4px;
	margin-bottom: 0;
	background: #00000022;
	font-size: 10px;
	cursor: pointer;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`
const Content = styled.div`
	flex: 1;
	margin-inline: -4px;
	padding-block: 0 8px;
	padding-inline: 12px;
	font-size: 10px;
	display: flex;
	flex-direction: column;
`

const Note = styled.textarea`
	flex: 1;
	color: inherit;
	margin: 0;
	padding: 0;
	background: transparent;
	border: 0;
	margin-top: 8px;
	font-size: 10px;
`

interface Props extends IAchievement {
	id: string
	//achieved?: boolean
	//handleClick: () => void
}

export const Achievement = ({
	id,
	title,
	value,
	area,
}: // description,
// hints,
// minDays,
// discussion,
//achieved,
//handleClick,
Props) => {
	const [achieved, setAchieved] = useStoredState<IAchievement["achieved"]>(
		false,
		`bingo-${id}-achieved`
	)
	const [note, setNote] = useStoredState<IAchievement["discussion"]>(
		"",
		`bingo-${id}-notes`
	)

	return (
		<Wrapper $val={value} $achieved={achieved}>
			<Title
				$val={value}
				$achieved={achieved}
				onClick={() => setAchieved((v) => !v)}
			>
				{title}

				<Tags tags={[/*getValueTag(value), */ area]} />
			</Title>
			<Content>
				<Note
					onChange={(e) => setNote(e.target.value)}
					value={note}
					//rows={4}
				/>
			</Content>
		</Wrapper>
	)
}
