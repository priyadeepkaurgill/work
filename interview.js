

class MyForm extends React.Component {                          /*constructor*/
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Password: '',
        };
    }
    mySubmitHandler = (event) => {                      /*function run on submit button*/
        event.preventDefault();
        let Email = this.state.Email;
        if (!(Email)) {                                 /* If Email textbox is empty*/
            alert("Please enter your email");
        }
        let Password = this.state.Password;            /*If Password textbox is empty*/
        if (!(Password)) {
            alert("Please enter your password");
        }
    }

    myChangeHandler = (event) => {                  /* change of textboxes sets the value of state*/
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    render() {                                  
        const mystyle = {                         /* In file CSS style*/
            color: 'black',
            fontWeight: 'bold',
            textAlign: 'left',
        };



        return (                                                                                { /*html for the page*/}
            <form onSubmit={this.mySubmitHandler} method="POST" >
                <h1>
                    Sign In </h1>
                <p style={mystyle}>Email<br />
                    <input                                                                         { /*email textbox*/}
                        type='text'
                        name='Email'
                        onChange={this.myChangeHandler}
                    />
                </p>
                <p style={mystyle}>Password<br />                                                {/*password textbox*/}
                    <input
                        type='text'
                        name='Password'
                        onChange={this.myChangeHandler}
                    />
                </p>

                <input type="checkbox" id="RememberMe" name="rem" />                           {/*remember me check box*/}
                <label style={{ fontSize: '16px' }} id="Remember-me">Remember me?</label>
                <br />
                <br />
                <button onClick={this.mySubmitHandler} > Sign in </button>                       
                <br />
                <p ><a href=" ">Forgot your password?</a></p>
                <p>Don't have an account?<a href="">Sign up</a></p>
                <p><a href="">Resend email confirmation</a></p>


            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));                      

