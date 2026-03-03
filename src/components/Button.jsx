const Button = ({ children, variant, className="", onClick }) => {
  const baseStyles = 'px-4 py-2 rounded-xl font-semibold transition duration 200 cursor-pointer';

  const varients = {
    primary : 'bg-deepNavy text-white',
    outline : "text-white border border-white"
  };

  return (
    <button className={`${baseStyles} ${varients[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button