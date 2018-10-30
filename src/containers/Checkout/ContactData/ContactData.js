import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }
  render () {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form action="">
          <input className={classes.input} type="text" name="name" placeholder="your name"/>
          <input className={classes.input} type="email"/>
          <input className={classes.input} type="text" name="street"/>
          <input className={classes.input} type="email" name="email"/>
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }

}
export default ContactData