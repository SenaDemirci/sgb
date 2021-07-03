import React from 'react'
import { Card, Icon, Image, Container, Button } from 'semantic-ui-react'
import Img from './Img'
import { useHistory, useLocation } from 'react-router-dom';

export default function BookCard(props) {

    console.log(props.location.state.movie.adi)
    // console.log(props.location.bookProps.name)
    //const { movies } = props.location

    // let history = useHistory()
    // history.push('/Img')
    return (

        <div key={props.location.key}>

            {/* <Button onClick={props.signOut}> More Info</Button>  */}
            {/* <Img movies={props}/>      */}

            <Card style={{ marginTop: '20em' }}>
                <Image src={props.location.state.movie.resimURL} wrapped ui={false} />
                <Card.Content>
                    <Card.Header> {props.location.state.movie.adi} </Card.Header>
                    <Card.Meta>
                        <span className='date'>{props.location.state.movie.bilgi}</span>
                    </Card.Meta>
                    <Card.Description>
                        {props.location.state.movie.adi}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {props.location.state.movie.rating}
                    </a>
                </Card.Content>
            </Card>

        </div>
    )


    //console.log(adi.location.key)

}
