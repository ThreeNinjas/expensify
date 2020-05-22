import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
     return (props) => (
        <div>
            {props.isAdmin &&<p>This is private info, please don't share.</p>}
            <WrappedComponent {...props}/>
        </div>
     )
}

const AdminInfo = withAdminWarning(Info)

const requireAuthentication = (WrappedComponent) => {
     return (props) => (
         <div>
            
            {props.isAuthenitcated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Please Login</p>
            )}
         </div>
     )
}

const AuthInfo = requireAuthentication(Info)

//ReactDOM.render(<AdminInfo isAdmin={false} info="this are the dtails"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenitcated={false} info="this are the dtails"/>, document.getElementById('app'))