import { useDispatch } from "react-redux";
import styles from './Filters.module.css';

export default function Filters() {

    const dispatch = useDispatch()

    function handleName(e) {
        e.preventDefault()
        dispatch((e.target.value))
    }

    function handlePrice(e) {
        e.preventDefault()
        dispatch((e.target.value))
    }

    function handleBrand(e) {
        e.preventDefault()
        dispatch((e.target.value))
    }

    function handleComponent(e) {
        e.preventDefault()
        dispatch((e.target.value))
    }

    return (
        <div>

            {/* FILTRAR POR PRECIO */}

            <select className={styles.filterPrice} onChange={e => { handlePrice(e) }}>
                <option value='asc'>Price ↑</option>
                <option value='desc'>Price ↓</option>
            </select>

            {/* FILTRAR POR MARCA */}

            <select className={styles.filterBrand} onChange={e => { handleBrand(e) }}>
                <option value='Logitech'>Logitech</option>
                <option value='ASUS'>ASUS</option>
            </select>

            {/* FILTRAR POR COMPONENTE */}

            <select className={styles.filterComponent} onChange={e => { handleComponent(e) }}>
                <option value='All'>All</option>
                <option value='Motherboards'>Motherboards</option>
                <option value='Mouse'>Mouse</option>
                <option value='Teclados'>Teclados</option>
                <option value='Monitores'>Monitores</option>
            </select>

            {/* SORT POR ORDEN ALFABETICO */}

            <select className={styles.filterOrder} onChange={e => { handleName(e) }}>
                <option value='All'>Ordenar ⇅</option>
                <option value='A-Z'>A - Z</option>
                <option value='Z-A'>Z - A</option>
            </select>

        </div>
    )
}