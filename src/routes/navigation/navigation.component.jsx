import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () =>{
    const { currentUser }  = useContext( UserContext );
    
    // console.log( currentUser );
    
    return (
      <Fragment>
        <div className='navigation'>
            <Link className='Logo cointainer' to='/'>
                <CrwnLogo className='logo'></CrwnLogo>
            </Link>            
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                {currentUser ? (
                      <span className='nav-link' onClick={ signOutUser }> 
                        SIGN OUT
                      </span>
                ) : (                      
                        <Link className='nav-link' to='/auth'>
                            Sign-in
                        </Link>
                )}
            </div>       
        </div>
        <Outlet></Outlet>
      </Fragment>
    );
  }

  export default Navigation;