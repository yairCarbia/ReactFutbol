import Item from "../Item/Item"
import "./ItemList.scss"


const ItemList = ({ items }) => {

    return (
        <div>
            <h2>Nuestro productos</h2>
            <hr />
            <div className="container">
                <div className="grid">


                    {
                        items.map((item) => <Item key={item.id} item={item} />)
                    }



                </div>

            </div>


        </div>
    )
}

export default ItemList