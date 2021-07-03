import axios from 'axios'
import React, { useState } from 'react'
import { Switch, useHistory } from 'react-router-dom'
import { Button, Form, Menu, Segment, Image } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react'
import Anasayfa from './Anasayfa'
import Navi from './Navi'
import { Route } from 'react-router-dom';

export default function Login() {

    let history = useHistory()

    //parantez açıp kapadığımız için sağ taraf bir fonksiyon (boş bir array almış)
    const [email, setEmail] = useState(""); //2. içindeki bilgiyi 1. ye atar ---> const handleEmailChange = (e) => {setEmail(e.target.value);};
    const [password, setPassword] = useState(""); //eşitliğin solundaki destructor
    //password diye bir data var(default değeri boş bir array), datayı değiştirmek için setPassword kullanılır
    const GirisYap = () => {
        //then
        axios.post("http://ekitap.stratek.com.tr:8080/api/Kullanici/GirisYap", {
            kullaniciAdi: email, //"bilgi@stratek.com.tr"
            parola: password //"tenset"
        }, [])
            .then(response => {
                if (response.data.durum) { //axios response.data döndürür
                    // sayfaya git
                    console.log("girdi");
                    history.push('/Home');
                    //alert("Giriş başarılı");


/*
<Router history={history}>
  <Route path="/" component={Anasayfa}>
  </Route>
</Router>
*/

/*
                    function handleSignOut() {
                        setIsAuthenticated(true) //false ---> Login sayfası gelir
                    }

                    if (isAuthenticated) {
                        <Anasayfa signOut={handleSignOut}/>
                    }
*/
                    //  { isAuthenticated ? <Anasayfa signOut={handleSignOut} deger="1" /> : <Login signIn={handleSignIn} /> }

                    //sanki Anasayfanın içinde signOut diye bir fonk. var da o da yukardaki handleSignOut u çağırıyor
                    /*                  
                     <nav className="navbar navbar-default">
                             <div className="container">
                                 <div className="navbar-header">
                                     <ul className="nav navbar-nav">
                                         <li>
                                             <Link to={"/"}>Anasayfa</Link>
                                         </li>
                                     </ul>                  
                                  </ div>
                             </div>
                           </nav>                   
                    */
                    /*
                      <Route >
                        <Anasayfa />
                      </Route>
                      */
                    //<Link to={`/anasayfa/${Anasayfa}`}>Giriş</Link> 
                    //<Route path="/" component = {Anasayfa}></Route>
                    // {isAuthenticated?<GirisYap signOut={handleSignOut} deger="1"/>:<GirisYap signIn={handleSignIn}/>}
                    // {isAuthenticated <GirisYap signOut={handleSignOut} />}
                    // <Route exact path="/" component={Anasayfa} />
                }
                else {
                    console.log("olmadı");
                    alert("Giriş başarısız");
                }
                console.log(response.data.token); //consolda response un değerini yazar
                console.log(response.data.kullaniciAdi);
                console.log(response.data.durum); //consolda response un değerini yazar
            });

    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };



    return (
        <div>

            <Menu.Item>
                <Image src='https://images.gencgonulluler.gov.tr/public/50956.jpg' size='medium' rounded />
            </Menu.Item>

            <Segment placeholder>
                <Form>
                    <Form.Input
                        icon='user'
                        iconPosition='left'
                        label='Kullanıcı Adı'
                        placeholder='Bu alan boş bırakılamaz'
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <Form.Input
                        icon='lock'
                        iconPosition='left'
                        label='Şifre'
                        placeholder='Bu alan boş bırakılamaz'
                        value={password}
                        onChange={handlePasswordChange}
                        type='Password'
                    />
                    {/*  <NavLink exact to="/Anasayfa" onClick={GirisYap} content='Oturum Aç' primary >  Anasayfa</NavLink>*/}
                    <Button onClick={GirisYap} content='Oturum Aç' primary />
                    {/*<Route path="/anasayfa" component={Anasayfa} />*/}

                    <p></p>
                    <Checkbox label='Beni Hatırla' />
                    <p></p>
                    <Button>Parolanızı unuttunuz mu?</Button>
                </Form>

            </Segment>
        </div>
    )
}

// as={NavLink} to='http://ekitap.stratek.com.tr:8080/api/Kullanici/GirisYap'