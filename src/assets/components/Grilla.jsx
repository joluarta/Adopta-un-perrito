import MyCard from "./MyCard";
import imagen1 from "../../pictures/Perro1.jpg"
import imagen2 from "../../pictures/Perro2.jpg"
import imagen3 from "../../pictures/Perro3.jpg"
import imagen4 from "../../pictures/Perro4.jpg"

const Grilla = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <MyCard img={imagen1}
                            title="Bartolo"
                            text="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
                            tagText="Mestizo   "
                            tagColor="success"
                        />
                    </div>
                    <div className="col-md-3">
                        <MyCard img={imagen2}
                            title="Messi"
                            text="Es Juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
                            tagText="Mestizo   "
                            tagColor="primary"
                        />
                    </div>
                    <div className="col-md-3">
                        <MyCard img={imagen3}
                            title="Gohan"
                            text="Un perro de tamaño pequeño con un gran corazón. Hazte amigo de Gohan y experimenta un amor incondicional!"
                            tagText="Mestizo   "
                            tagColor="danger"
                        />
                    </div>
                    <div className="col-md-3">
                        <MyCard img={imagen4}
                            title="Princesa"
                            text="Es un compañera leal y cariñosa que adora los mimo y abrazos. ¡Ayuda a princesa a encontrar su final feliz!"
                            tagText="Mestizo   "
                            tagColor="warning"
                        />
                    </div>
                </div>
            </div>
        </>


    )
}

export default Grilla;