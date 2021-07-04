import React, { useState } from 'react'
import { Grid, Card, Icon, Image } from 'semantic-ui-react'

export default function Img(props){
    return (
        <div>
            <Card>
                <Image src={props.resimURL} wrapped ui={false} />
                <Card.Content>
                    <Card.Header> {props.adi} </Card.Header> 
                    <Card.Meta>
                        <span className='date'>{props.adi}</span>
                    </Card.Meta>
                    <Card.Description>
                        Matthew is a musician living in Nashville.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                </Card.Content>
            </Card>
        </div>
    )
}

