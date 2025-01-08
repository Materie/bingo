import styled from "styled-components"

const TagWrapper = styled.div`
	display: flex;
`

const Tag = styled.p`
	color: black;
	margin: 0;
	margin-inline-end: 4px;
	font-weight: 200;
	&:last-child {
		margin-inline-end: 0;
	}
`

interface Props {
	tags: string[]
}

export const Tags = ({ tags }: Props) => {
	return (
		<TagWrapper>
			{tags.map((tag, index) => {
				return (
					<Tag key={index}>
						{tag}
						{index < tags.length - 1 ? "," : ""}
					</Tag>
				)
			})}
		</TagWrapper>
	)
}
