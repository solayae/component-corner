import { useDispatch, useSelector } from "react-redux";
import styles from './Filters.module.css';
import { filterByBrand, filterByCategory, getAllProducts, orderBy } from "../../redux/actions";
import { useEffect } from "react";

export default function Filters() {

    const dispatch = useDispatch()

    const allFilters = useSelector((state) => state.products)

    useEffect(() => {
        if (!allFilters[0])
            dispatch(getAllProducts())
    }, [dispatch])

    function handleOrder(e) {
        e.preventDefault()
        dispatch(orderBy(e.target.value))
    }

    function handleBrand(e) {
        e.preventDefault()
        dispatch(filterByBrand(e.target.value))
    }

    function handleComponent(e) {
        e.preventDefault()
        dispatch(filterByCategory(e.target.value))
    }

    return (
        <div>

            {/* FILTRAR POR PRECIO */}

            <select className={styles.filterPrice} onChange={e => { handleOrder(e) }}>
                <option value='asc'>Price ↑</option>
                <option value='desc'>Price ↓</option>
            </select>

            {/* FILTRAR POR MARCA */}

            <select className={styles.filterBrand} onChange={e => { handleBrand(e) }}>
                {/* <option value='Logitech'>Logitech</option>
                <option value='Asus'>Asus</option>
                <option value='Intel'>Intel</option>
                <option value='AMD'>AMD</option>
                <option value='Gigabyte'>Gigabyte</option>
                <option value='ASRock'>ASRock</option>
                <option value='MSI'>MSI</option>
                <option value='LG'>LG</option>
                <option value='ViewSonic'>ViewSonic</option>
                <option value='Samsung'>Samsung</option>
                <option value='AOC'>AOC</option> */}
                <option value='All'>Todos</option>
                {allFilters && allFilters.map(el => {
                    return (<option value={el.brand} key={el.id}> {el.brand}</option>)
                })
                }
            </select>

            {/* FILTRAR POR COMPONENTE */}

            <select className={styles.filterComponent} onChange={e => { handleComponent(e) }}>
                {/* <option value='All'>All</option>
                <option value='Motherboard'>Motherboard</option>
                <option value='Mouses'>Mouses</option>
                <option value='Teclados'>Teclados</option>
                <option value='Monitores'>Monitores</option>
                <option value='Auriculares'>Auriculares</option>
                <option value='Procesadores'>Procesadores</option> */}
                <option value='All'>Todos</option>
                {allFilters && allFilters.map(el => {
                    return (<option value={el.category} key={el.id}> {el.category}</option>)
                })
                }
            </select>

            {/* SORT POR ORDEN ALFABETICO */}

            <select className={styles.filterOrder} onChange={e => { handleOrder(e) }}>
                <option value='All'>Ordenar ⇅</option>
                <option value='A-Z'>A - Z</option>
                <option value='Z-A'>Z - A</option>
            </select>

        </div>
    )
}