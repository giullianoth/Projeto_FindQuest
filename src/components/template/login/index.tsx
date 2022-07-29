import Anchor from "../../elements/anchor";
import Button from "../../elements/form/button";
import Input from "../../elements/form/input";

import Trigger from "../triggers/trigger";
import Error from "../triggers/error";
import Info from "../triggers/info";
import Success from "../triggers/success";
import Warning from "../triggers/warning";

export default function Login() {
    return (
    <div className="main_login modal-content radius flex">
        <header>
            <h1>Fazer Login</h1>
        </header>
        <Warning>Aviso: você foi avisado.</Warning>
        <form action="" className="flex">
            <Input type="text" name="usuario" id="usuario" placeholder="Usuário" className="flex-1" />
            <Input type="password" name="senha" id="senha" placeholder="Senha" className="flex-1" />
            <Button type="submit" className="flex-1">Entrar</Button>
            <label htmlFor="lembrar" className="flex-1"><input type="checkbox" name="lembrar" id="lembrar" /> Continuar conectado</label>
        </form>
        <p><Anchor href="#">Esqueci a senha</Anchor></p>
        <p>Ainda não tem cadastro? <Anchor href="#">Cadastre-se</Anchor></p>
    </div>
    );
}