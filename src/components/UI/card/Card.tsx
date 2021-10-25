interface CardProps {
  className?: string;
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({className, children}) => {

  return (
    <div className={'card ' + className}>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

export default Card;