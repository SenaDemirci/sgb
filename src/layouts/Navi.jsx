import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Button, Container, Grid, Menu } from 'semantic-ui-react'
import { Flag } from 'semantic-ui-react'
import Anasayfa from './Anasayfa'
import Lang from './Lang'
import Login from './Login'



//export default olanları import ederken süslü parantez kullanılmaz
export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(true)
    let history = useHistory()

    function handleSignOut() {
        setIsAuthenticated(false)  
    }
    function handleSignIn() {
        setIsAuthenticated(true)        
    }
    return (
        <div>

            <Menu fixed="top">
                <Container className="main3">
                    <Menu.Item size='massive' style={{ color: 'black' }}  as={NavLink} to="/"
                         name='SGB.net'
                    />
                    <Menu.Menu position='right'>
                        <Lang />
                        <Grid>
                            <Grid.Column width={12}>
                                <Flag name='united kingdom' />
                                <Flag name='turkey' />
                            </Grid.Column>
                        </Grid>
                        {/* <Menu.Item>
                            {isAuthenticated ? <Button onClick={handleSignOut} primary> Giriş Yap </Button> : <Button as={NavLink} to="/" onClick={handleSignIn} primary > Çıkış Yap </Button>}
                        </Menu.Item> */}
                    </Menu.Menu>
                </Container>
            </Menu>



            
        </div>
    )
}