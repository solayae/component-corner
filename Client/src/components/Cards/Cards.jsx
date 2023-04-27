/* eslint-disable react/jsx-key */
import { useThemeProps } from '@mui/material';
import styles from './Cards.module.css';

export default function Cards(props) {
    const products = props.products
    console.log(products)
    return (
        <div>
            {products.map((e)=>(<h1>{e.name}</h1>))}
        </div>
    )
}