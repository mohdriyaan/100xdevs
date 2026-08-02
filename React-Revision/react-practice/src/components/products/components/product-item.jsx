import styles from "./product-item.module.css"

const ButtonComponent = () => {
  return <button className={styles.buttonStyle}>
    Click
  </button>
}


export const ProductItem = ({singleProductItem,keyProp}) => {
  return <div key={keyProp}>
    <p className={styles.productTitle}>{singleProductItem}</p>
    <ButtonComponent />
  </div>
}