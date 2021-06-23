

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Password: '',
        };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        let Email = this.state.Email;
        if (!(Email)) {
            alert("Please enter your email" + [Email]);
        }
        let Password = this.state.Password;
        if (!(Password)) {
            alert("Please enter your password");
        }
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    render() {
        const mystyle = {
            color: 'black',
            fontWeight: 'bold',
            textAlign: 'left',
        };



        return (
            <form onSubmit={this.mySubmitHandler} method="POST" >
                <h1>
                    Sign In </h1>
                <p style={mystyle}>Email<br />
                    <input
                        type='text'
                        name='Email'
                        onChange={this.myChangeHandler}
                    />
                </p>
                <p style={mystyle}>Password<br />
                    <input
                        type='text'
                        name='Password'
                        onChange={this.myChangeHandler}
                    />
                </p>

                <input type="checkbox" id="RememberMe" name="rem" />
                <label style={{ fontSize: '16px' }} id="Remember-me">Remember me?</label>

                <br />
                <br />
                <button onClick={this.mySubmitHandler}>Sign in</button>
                <br />
                <p ><a href=" ">Forgot your password?</a></p>
                <p>Don't have an account?<a href="">Sign up</a></p>
                <p><a href="">Resend email confirmation</a></p>


            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
// JavaScript source code
