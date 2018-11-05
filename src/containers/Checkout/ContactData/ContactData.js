import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import axios from 'axios'
class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false,
    purchasing: false
  }
  // componentDidMount () {
  //   console.log('me monteeee', this.props)
  // }
  orderHandler = (e) => {
    e.preventDefault()
    this.setState( { loading: true } );
      const order = {
        ingredients: this.props.ingredients,
        price: this.props.totalPrice,
        customer: {
          name: 'Max Schwarzmüller',
          address: {
            street: 'Teststreet 1',
            zipCode: '41351',
            country: 'Germany'
          },
          email: 'test@test.com'
        },
        deliveryMethod: 'fastest'
      }
      axios.post('https://react-hamburger-89ecb.firebaseio.com/orders.json', order)
        .then( response => {
            this.setState( { loading: false } );
            this.props.history.push('/')
        } )
        .catch( error => {
            this.setState( { loading: false } );
        } );
  }
  render () {
    let form = (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form action="">
          <Input type="input" label="Nombre" placeholder="Ingrese su nombre"/>
          {/* <input className={classes.input} type="text" name="name" placeholder="your name" />
          <input className={classes.input} type="email" />
          <input className={classes.input} type="text" name="street" />
          <input className={classes.input} type="email" name="email" /> */}
          <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
      </div>
    )
    return (
      this.state.loading ? <Spinner /> : form
    );
  }

}
export default ContactData