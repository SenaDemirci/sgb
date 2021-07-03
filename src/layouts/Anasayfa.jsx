import axios from 'axios';
import React, { useState } from 'react'
import { useHistory, Link, Switch, NavLink } from 'react-router-dom';
import { Menu, MenuItem, Search } from 'semantic-ui-react'
import { Button, Container, Segment, Input, Grid, Image, Card, Icon, Pagination } from 'semantic-ui-react'
import BookCard from './BookCard'
import { Route,Router } from 'react-router-dom';

export default function Anasayfa() {

    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState("");

    const handleSubmit = () => {
        axios.post('http://ekitap.stratek.com.tr:8080/api/Kitap/Listele', {

        }, [])
            .then(response => {
                if (response.data) { //axios response.data döndürür
                    setMovies(response.data.objeler)
                }
            });
    }
    /*
            const url="http://ekitap.stratek.com.tr:8080/api/Kitap/Listele";
            const response= fetch(url);
            const data= response.json();
            console.log(data);
    */

    let history = useHistory()
    
    const handleBookCard = (movies) => {
/*
        history.push({
            pathname: '/BookCard',
            state: { movies}
          })
*/

          //this.props.history.push('/BookCard');
//const message = "Hello Everyone";
        //history.push({pathname:'/BookCard'})

        //  <BookCard movies={movies}/>     
        //  history.push('/BookCard');
      
    //<Anasayfa signOut={history.push('/BookCard')}/>
  
        //console.log(movies);

        
        //<Route movies={movies} exact path="/BookCard" component={BookCard} />     
        //<BookCard message="Data from first component"/>
        
/*
        return (
            <div key={movies.key}>
                <BookCard adi={movies.adi}/>
            </div>
            
     )
*/          
}        

    return (

        <div>
            <Container style={{ marginTop: '0em' }}>
                <Menu fluid fixed="top" position='center'>
                    <Segment basic textAlign='center'>
                        <Input  //onChange={(event) => setNewState({ searchQuery: event.target.value })}
                            //value={currentState.searchQuery}

                            //action={{ color: 'blue', content: 'Search' }} 
                            icon='search'
                            iconPosition='left'
                            placeholder='Search'
                            //display='block'
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                        <Button onClick={handleSubmit} content='Search' primary />
                    
                    </Segment>
                </Menu>
            </Container>

            <Grid doubling columns={5} position='top'>
                <Grid.Row stretched className="main2">
                    {movies.filter((val) => {
                        if (query == "") {
                            return val
                        }
                        else if (val.adi.toLowerCase().includes(query.toLowerCase())) {
                            return val
                        }
                    }).map((movie) => (

                        /*
                         let filterMovies=movies.filter(
                                  (movie) => {
                                     return movie.adi.toLowerCase().indexOf(movies.searchQuery.toLowerCase()) !== -1
                                }
                                //indexOf --> aradığımız terim filmin içinde varsa o terimleri döndürür, yoksa -1 döndürür
                         */

//href={movie.kitapURL}
                        <Grid.Column stretched >
                            <Card color={"green"}> 
                            
                                <Image src={movie.resimURL} wrapped ui={false} />
                                <Card.Content textAlign={"center"} style={{
                                    height: "200px",
                                    //backgroundImage: `url(https://cdn.pixabay.com/photo/2017/05/13/15/18/dear-2309801_1280.jpg)`,
                                    //backgroundSize: "cover",
                                }}>
                                    <Card.Header style={{ fontSize: '20px' }}>{movie.adi}  </Card.Header>
                                    <Card.Meta>
                                        <span >{movie.sayfaSayisi}</span>
                                    </Card.Meta>
                                    {/* <Card.Description>
                                {movie.bilgi}
                            </Card.Description> */}
                                </Card.Content>
                                <Card.Content extra>
                                    <a>
                                        <Icon name='thumbs up' />
                                        {movie.rating}
                                    </a>


                                </Card.Content>


{/*                                 
                                    <Route exact path="/BookCard" component={BookCard} />
                                    <Link to="/BookCard"></Link> */}
<li>
<Link to={{
    pathname:'/BookCard',
    state:{
        movie,
      }
}}>More Info</Link>
</li>


{/* <BookCard signOut={handleBookCard} bisey={movie}/> */}



 
{/* <Button as={NavLink} to="/BookCard" onClick={handleBookCard(movie)}> More Info</Button>    */}


                                    {/* <Button onClick={<BookCard signOut={handleBookCard} bisey={movie}/>}> More Info</Button>  */}

                                    {/* <Button onClick={handleBookCard(movie)}> More Info</Button>    */}
                                    {/* <Button onClick={<BookCard bisey={movie}/>}>More Info</Button>  */}
                            </Card>
                        </Grid.Column>
                    ))}
                </Grid.Row>
                <Pagination defaultActivePage={5} totalPages={10} />
            </Grid>

        </div>



    );
}
