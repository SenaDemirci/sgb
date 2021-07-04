import React from 'react'
import { Card, Icon, Image, Container, Button, Grid, Segment, Divider } from 'semantic-ui-react'
import Img from './Img'
import { useHistory, useLocation } from 'react-router-dom';

export default function BookCard(props) {

    console.log(props.location.state.movie.yazarlar)

    return (

        <div key={props.location.key}>

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
                            <Icon name=' book' />
                            Sayfa sayısı:   {props.location.state.movie.sayfaSayisi}
                        </p>

                        <p style={{ fontWeight: 'bold', color: 'black ', marginTop: '2em' }}>
                            <Icon name='pencil alternate' />
                            Yazarlar:
                        </p>
                        {props.location.state.movie.yazarlar.map((yazarlar, i) => {
                            return (
                                <p style={{ fontWeight: 'bold', color: 'grey ', marginTop: '2em' }}>
                                    {props.location.state.movie.yazarlar[i].adi}
                                </p>
                            )
                        })}


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
