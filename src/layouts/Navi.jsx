import React from 'react'
import { Button, Container, Grid, Menu } from 'semantic-ui-react'
import { Flag } from 'semantic-ui-react'
import Lang from './Lang'

export default function Navi() {
    return (
        <div>
            <Menu fixed="top">
                <Container>
                    <Menu.Item
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
                        <Menu.Item>
                            <Button primary>Giriş Yap</Button>
                        </Menu.Item>                       
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}