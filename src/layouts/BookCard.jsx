import React from 'react'
import { Card, Icon, Image, Container, Button, Grid, Segment, Divider } from 'semantic-ui-react'
import Img from './Img'
import { useHistory, useLocation } from 'react-router-dom';

export default function BookCard(props) {

    console.log(props.location.state.movie.adi)

    return (

        <div key={props.location.key}>
            {/* <Container className="main2">
<Grid>
    <Grid.Row columns={3}>
            <Card style={{ marginTop: '20em' }}>
                <Image src={props.location.state.movie.resimURL} wrapped ui={false} />

                <Grid.Column stretched width={5} >
                <Card.Content>
                    <Card.Header> {props.location.state.movie.adi} </Card.Header>
                    <Card.Meta>
                        <span className='date'>{props.location.state.movie.sayfaSayisi}</span>
                    </Card.Meta>
                    <Card.Description>
                        {props.location.state.movie.bilgi}
                    </Card.Description>
                </Card.Content>
                </Grid.Column>


                <Grid.Column  width={5} >

                <Card.Content extra href={props.location.state.movie.kitapURL}>
                    <a>
                        <Icon name='user' />
                        <p>Kitap linki için tıklayınız...</p>
                        {props.location.state.movie.rating}
                    </a>
                </Card.Content>
                </Grid.Column>

            </Card>

            </Grid.Row>
            </Grid>
            </Container> */}




            <Segment>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column color={'white'}>
                        <p>
                            <Image src={props.location.state.movie.resimURL} wrapped ui={false} />
                        </p>
                        <p style={{ fontWeight: 'bold', fontSize: '3em' }}>
                            {props.location.state.movie.adi}
                        </p>
                        
                        <Button.Group style={{ right: '38%', position: 'absolute', top: '92%', zIndex: 1000 }} basic size='small'>
                            <Button href={props.location.state.movie.kitapURL} icon='external square alternate' />
                            <Button icon='save' />
                            <Button icon='heart' />
                            <Button icon='download' />
                        </Button.Group>

                       

                    </Grid.Column>

                    <Grid.Column color={'white'}>
                        <p style={{ fontWeight: 'bold', color: 'grey ', marginTop: '2em' }}>
                            {props.location.state.movie.yayinevi}
                        </p>

                        <p style={{ fontWeight: 'bold', color: 'grey ', fontSize: '1.2em' }}>
                            Sayfa sayısı:   {props.location.state.movie.sayfaSayisi}
                        </p>

                        <p style={{ fontWeight: 'bold', color: 'black ', marginTop: '2em', cursor: 'pointer' }}>
                            <Icon name='info' />
                            Bilgi
                            <p style={{ fontWeight: 'bold', color: 'grey ', marginTop: '1em' }}>
                                {props.location.state.movie.bilgi}
                            </p>

                        </p>

                    </Grid.Column>
                </Grid>

                <Divider vertical></Divider>
            </Segment>

        </div>
    )


}
