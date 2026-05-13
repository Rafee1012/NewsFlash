'use client';


const Account = () => {
  return (
        <center>
            <h1 className="text-center">Account</h1>
            <p className="text-center mt-5">Please register or log into an existing account.</p>

            <button type="button" id="sign-up-btn" className="mt-7 mx-auto" onClick={() => console.log('Click')}>
            <a href="/">
                Sign Up
            </a>
            <br />
        </button>
            <button type="button" id="sign-in-btn" className="mt-7 mx-auto" onClick={() => console.log('Click')}>
                <a href="/">
                    Sign In
                </a>
            </button>
        </center>
    )
}

export default Account

// take user input
// check against database of user IDs
// create cookie to signify user logged in
// check cookie for future tasks