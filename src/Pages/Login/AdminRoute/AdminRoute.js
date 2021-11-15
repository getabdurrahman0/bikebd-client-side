import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {

    const { user, loading, admin } = useAuth();


    if (loading) {
        return <div className='text-center'><Spinner animation="grow" variant="info" /></div>
    }

    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user?.email && admin ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default AdminRoute;