import styles from './divider.module.scss'

type Size = 'xsmall' | 'small' | 'medium' | 'large'
type Weight = 'regular-weight' | 'medium-weight' | 'semibold-weight'
type Transform = 'underline' | 'strikethrough' | 'italics'

type DividerTypes = {
	className?: string
	size?: Size
	weight?: Weight
	transform?: Transform
}
export const Divider = ({ className, size = 'xsmall', weight = 'regular-weight', transform }: DividerTypes) => (
	<span
		className={`${styles[size]} ${styles[weight]}${transform ? ` ${styles[transform]}` : ''}${className ? ` ${className}` : ''}`}
	/>
)
