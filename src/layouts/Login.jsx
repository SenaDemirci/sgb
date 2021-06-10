import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react'

export default function Login() {
    return (
        <div>
            <Segment placeholder>
                <Form>
                    <Form.Input
                        icon='user'
                        iconPosition='left'
                        label='Kullanıcı Adı'
                        placeholder='Bu alan boş bırakılamaz'
                    />
                    <Form.Input
                        icon='lock'
                        iconPosition='left'
                        label='Şifre'
                        placeholder='Bu alan boş bırakılamaz'
                        type='Password'
                    />
                    <Button content='Oturum Aç' primary />
<p></p>
                    <Checkbox label='Beni Hatırla' />
<p></p>
                    <Button>Parolanızı unuttunuz mu?</Button>
                </Form>
            </Segment>
        </div>
    )
}
