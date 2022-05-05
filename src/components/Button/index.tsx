import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode,
  size?: 'small' | 'medium' | 'large',
  fullWidth?: boolean,
  icon?: JSX.Element,
  variant?: 'primary' | 'secondary' | 'outline'
}

const Button = ({ children, size = 'medium', fullWidth = false, icon, variant }: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} variant={variant}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
