import Señor from "/src/assets/images/señor.jpeg"

const Items = () => {
    return (
        <article className="bg-white text-center items-center justify-center flex mx-auto 2xl:my-auto px-0 rounded-sm shadow hover:shadow-neutral-600 hover:shadow-lg">
            <a href="https://descripcion.netlify.app/">
                <img className="h-52 w-52 2xl:h-96 2xl:w-96 rounded-3xl p-5" src={Señor} alt="error" />
                <div className="p-8 bg-gray-200 rounded-sm">
                    <p>Producto</p>
                    <p>Precio</p>
                </div>
            </a>
        </article>
    )
}

export default Items