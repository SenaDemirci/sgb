import React from 'react'
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

export default function Anasayfa(props) {
    return (


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
                    alert("Giriş başarılı");

                }
                else {
                    console.log("olmadı");
                    alert("Giriş başarısız");
                }
                <div>
                    <h1 style={{ color: 'red' }}>Welcome to Home</h1>
                </div>
    )
    }


