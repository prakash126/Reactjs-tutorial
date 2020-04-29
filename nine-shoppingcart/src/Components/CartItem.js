// import React from 'react';

// import {
//     Card,
//     CardBody,
//     CardText,
//     CardTitle,
//     CardImg,
//     Button
// } from 'reactstrap';



// const CartItem = ({product,addInCart})=>{

//     return(
//         <Card className="mt-2 mb-1">
//             <CardImg top height="250" width="100%" src={product.smallImage} />
//             <CardBody className="text-center">
//             <CardTitle>{product.productName}</CardTitle>
//             <CardText className="secondary">price: RS {product.productPrice}</CardText>
//             </CardBody>
//             <Button color="success" onclick={()=>addInCart(product)}>Buy Now</Button>
//         </Card>
//     )

// }

// export default CartItem;
import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

const CartItem = ({ product, addInCart }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg top height="250" width="100%" src={product.smallImage} />
      <CardBody className="text-center">
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="secondary">
          price: RS {product.productPrice}
        </CardText>
        <Button color="success" onClick={() => addInCart(product)}>
          Buy Now
        </Button>
      </CardBody>
    </Card>
  );
};

export default CartItem;
