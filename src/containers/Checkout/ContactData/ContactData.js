import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import axios from 'axios'
class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your name"
        },
        value: ""
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your street"
        },
        value: ""
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "code zip"
        },
        value: ""
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country"
        },
        value: ""
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your email"
        },
        value: ""
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            {
              value: "fastest",
              displayValue: "Fastest"
            },
            {
              value: "Cheapest",
              displayValue: "Cheap"
            }
          ]
        },
        value: ""
      }
    },
    loading: false,
    purchasing: false
  };
  // componentDidMount () {
  //   console.log('me monteeee', this.props)
  // }

  orderHandler = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const order = this.state.orderForm
    let toSubmitOrder = {}
    for (let index in order) {
      toSubmitOrder[index] = order[index].value
    }
    console.log(toSubmitOrder)
    axios
      .post("https://react-hamburger-89ecb.firebaseio.com/orders.json", toSubmitOrder)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  inputChangedHanlder = (event, inputIdentifier) => {
    let updateOrderForm = {...this.state.orderForm}
    // newOrderForm[inputIdentifier].value = event.target.value
    // this.setState({ orderForm: newOrderForm })
    let updatedElement = { ...updateOrderForm[inputIdentifier]}
    // console.log(event.target.value)
    updatedElement.value = event.target.value
    updateOrderForm[inputIdentifier] = updatedElement
    this.setState({ orderForm: updateOrderForm })
  }
  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form onSubmit= {this.orderHandler}>
          {formElementsArray.map(formElement => (
            <Input
              key={formElement.id}
              changed={(event) => this.inputChangedHanlder(event, formElement.id)}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
            />
          ))}
          <Button btnType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>;
    return this.state.loading ? <Spinner /> : form;
  }
}
export default ContactData