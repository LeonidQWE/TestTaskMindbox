import s from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode,
  onClick: () => void,
  title: string,
  disabled?: boolean,
  typeParams?: {type: 'select', isSelected: boolean}
};

export const Button = ({children, onClick, title, disabled, typeParams}: ButtonProps) => {
  return (
    <button
      data-testid='btn'
      className={`${s.btn} ${typeParams && typeParams.type && typeParams.isSelected ? s.selected : ''}`}
      onClick={onClick}
      title={title}
      disabled={disabled}>
        {children}
    </button>
  )
}
