import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./Repo.module.css";

interface Repo {
  id: number;
  name: string;
  html_url: string;
}

const Repo: React.FC = () => {
  const { user } = useParams<{ user: string }>();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadRepos = async (url: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to fetch repositories: ${res.statusText}`);
      }
      const data = await res.json();
      setRepos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      const repoUrl = `https://api.github.com/users/${user}/repos`;
      loadRepos(repoUrl);
    }
  }, [user]);

  return (
    <div className={classes.container}>
      <div>
        <span>Repositórios de {user}</span>
        <Link to="/" className={classes.voltar}>
          Voltar
        </Link>
      </div>
      {isLoading ? (
        <p>Carregando repositórios...</p>
      ) : error ? (
        <p>Erro: {error}</p>
      ) : repos.length > 0 ? (
        <ul className={classes.lista}>
          {repos.map((repo) => (
            <li key={repo.id} className={classes.item}>
              <a
                className={classes.repo_link}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum repositório encontrado.</p>
      )}
    </div>
  );
};

export default Repo;
