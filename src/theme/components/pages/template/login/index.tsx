import Anchor from "../../../elements/anchor";
import Button from "../../../elements/form/button";
import Input from "../../../elements/form/input";

import Trigger from "../triggers/trigger";
import Error from "../triggers/error";
import Info from "../triggers/info";
import Success from "../triggers/success";
import Warning from "../triggers/warning";

export default function Login() {
    return (
    <div className="main_login modal-content">
        <header>
            <h1>Fazer Login</h1>
        </header>
        <div className="flash-message"></div>
        <form action="">
            <Input type="text" name="usuario" id="usuario" placeholder="Usuário" />
            <Input type="password" name="senha" id="senha" placeholder="Senha" />
            <label htmlFor="lembrar"><input type="checkbox" name="lembrar" id="lembrar" /> Continuar conectado</label>
            <Button type="submit">Entrar</Button>
        </form>
        <p><Anchor href="#">Esqueci a senha</Anchor></p>
        <p>Ainda não tem cadastro? <Anchor href="#">Cadastre-se</Anchor></p>
    </div>
    );
}