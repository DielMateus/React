export function RepositoryItem(props) {
    return (
        <li>
            {/* As chaves que puxam o conteúdo JS para dentro do html é chamado de Interpolação */}
            {/* Aqui estou acessando as informações que especifiquei dentro do RepositoryList.jsx pelas propriedades: name, description e link */}
            <strong>{props.repository.name ?? 'Default' }</strong>
                <p>{props.repository.description}</p>
            <a href={props.repository.link}>
                Acessar repositório
            </a>
        </li>
    );
}