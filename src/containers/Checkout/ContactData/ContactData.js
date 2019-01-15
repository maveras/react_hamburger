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
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name'
        },
        touched: false,
        value: '',
        valid: false,
        validation: {
          required: true
        }
      },
      street: {
        touched: false,
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your street'
        },
        value: '',
        valid: false,
        validation: {
          required: true
        }
      },
      zipCode: {
        touched: false,
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'code zip'
        },
        value: '',
        valid: false,
        validation: {
          required: true,
          minLength: 5,
          maxLength: 10
        }
      },
      country: {
        touched: false,
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
        valid: false,
        validation: {
          required: true
        }
      },
      email: {
        touched: false,
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your email'
        },
        value: '',
        valid: false,
        validation: {
          required: true
        }
      },
      deliveryMethod: {
        touched: false,
        elementType: 'select',
        validation: {},
        elementConfig: {
          options: [
            {
              value: 'fastest',
              displayValue: 'Fastest'
            },
            {
              value: 'Cheapest',
              displayValue: 'Cheap'
            }
          ]
        },
        value: 'fastest',
        valid: true
      }
    },
    loading: false,
    purchasing: false,
    formIsValid: false
  }
  // componentDidMount () {
  //   console.log('me monteeee', this.props)
  // }

  orderHandler = e => {
    e.preventDefault()
    this.setState({ loading: true })
    const order = this.state.orderForm
    let toSubmitOrder = {}
    for (let index in order) {
      toSubmitOrder[index] = order[index].value
    }
    console.log(toSubmitOrder)
    axios
      .post(
        'https://react-hamburger-89ecb.firebaseio.com/orders.json',
        toSubmitOrder
      )
      .then(response => {
        this.setState({ loading: false })
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({ loading: false })
      })
  }

  checkValidity = (value, rules) => {
    let isValid = true
    if (rules.required) {
      isValid = value.trim() !== '' && isValid
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid
    }

    // for(const key of Object.keys(rules)) {
    //   if(key === 'required') {
    //      isValid = !value.trim() !== '';
    //   } else if(key === 'numberOnly') {
    //      isValid = !isNaN(value);
    //   } else if(key === 'minLength') {
    //      isValid = value.length >= rules[key];
    //   }
    // }
    return isValid
  }

  inputChangedHanlder = (event, inputIdentifier) => {
    // let allowSubmit = false
    // let inputsStates = []
    let updateOrderForm = { ...this.state.orderForm }
    let updatedElement = { ...updateOrderForm[inputIdentifier] }
    updatedElement.value = event.target.value
    updatedElement.valid = this.checkValidity(
      updatedElement.value,
      updatedElement.validation
    )
    updatedElement.touched = true
    updateOrderForm[inputIdentifier] = updatedElement
    let formIsValid = true
    for (inputIdentifier in updateOrderForm) {
      formIsValid = updateOrderForm[inputIdentifier].valid && formIsValid
    }

    this.setState({ orderForm: updateOrderForm, formIsValid: formIsValid })
  }
  render() {
    const formElementsArray = []
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }
    // let allowSubmit = false
    // let invalidsArray = formElementsArray.filter(el => el.config.validation && !el.config.valid)
    // invalidsArray.length > 0 ? allowSubmit = false : allowSubmit = true
    let form = (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form onSubmit={this.orderHandler}>
          {formElementsArray.map(formElement => (
            <Input
              key={formElement.id}
              changed={event => this.inputChangedHanlder(event, formElement.id)}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              touched={formElement.config.touched}
              shouldValidate={formElement.config.validation}
            />
          ))}

          <Button
            disabled={!this.state.formIsValid}
            btnType="Success"
            clicked={this.orderHandler}
          >
            ORDER
          </Button>

          {/* {this.state.formIsValid ?
            <Button btnType="Success" clicked={this.orderHandler}>
              ORDER
            </Button> : null
          } */}
          {/* {allowSubmit ? 
            <Button btnType="Success" clicked={this.orderHandler}>
              ORDER
            </Button> : null
          } */}
        </form>
      </div>
    )
    return this.state.loading ? <Spinner /> : form
  }
}
export default ContactData