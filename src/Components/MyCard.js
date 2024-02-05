import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addToCart } from '../ReduxManager/action';


const MyCard = () => {
    const [addedQuantity,setAddedQuantity]=useState('')

    const dispatch = useDispatch();

    const handleAddToCart=()=>{
console.log("added",addedQuantity);
dispatch(addToCart(addedQuantity))
setAddedQuantity('');
    }


    return (
        <div>
            <div className="card-container">
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<Card.Title>Watch</Card.Title>
						<Card.Text>
							Branded watch model noc.1784ee4
						</Card.Text>
						<div className='input-quantity'>
							<label>
								no. of quantity
								<input
									value={addedQuantity}
									onChange={e => setAddedQuantity(e.target.value)}
								/>
							</label>
						</div>
						<Button variant="primary" onClick={handleAddToCart}>Add To Cart</Button>
					</Card.Body>
				</Card>
			</div>
        </div>
    )
}

export default MyCard
