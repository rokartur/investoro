import styles from './badge.module.scss'
import { Paragraph } from '../typography/paragraph.tsx'
import { CSSProperties } from 'react'

type BadgeProps = {
	className?: string
	content?: string
	icon?: JSX.Element
	isReverse?: boolean
	style?: CSSProperties
}

export const Badge = ({ className, content, icon, isReverse, style }: BadgeProps) => (
	<span
		className={`${styles.badge}${className ? ` ${className}` : ''}`}
		style={isReverse ? { flexDirection: 'row-reverse', ...style } : { flexDirection: 'row', ...style }}
	>
		{icon ? <span>{icon}</span> : null}

		<Paragraph size={'small'} weight={'medium-weight'}>
			{content}
		</Paragraph>
	</span>
)
