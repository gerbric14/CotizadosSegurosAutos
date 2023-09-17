import useCotizador from "../hooks/useCotizador"

const Error = () => {
    const {error} = useCotizador();
    
  return (
    <div className="border border-red-400 bg-red-100 text-center py-3 text-red-700">
        <p>{error}</p>
    </div>
  )
}

export default Error
