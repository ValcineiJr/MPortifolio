import Link from 'next/link';
import { Container } from './styles';

export function Footer() {
  const techs = [
    { name: `ReactJs`, slug: `https://pt-br.reactjs.org/` },
    { name: `NextJs`, slug: `https://nextjs.org/` },
    { name: `TypeScript`, slug: `https://www.typescriptlang.org/` },
    { name: `Firebase`, slug: `https://firebase.google.com/?hl=pt-br` },
    { name: `Styled-components`, slug: `https://styled-components.com/` },
    { name: `SWR`, slug: `https://swr.vercel.app/` },
    { name: `React-icons`, slug: `https://react-icons.github.io/react-icons` },
    { name: `Vercel`, slug: `https://vercel.com/` },
  ];

  const fastLinks = [
    { name: `Home`, slug: `/` },
    { name: `Portifólios`, slug: `/portfolios` },
    { name: `Dar feedback`, slug: `/feedback` },
  ];
  return (
    <Container>
      <div className="wrapper">
        <section className="sobre">
          <h6>Sobre</h6>
          <p>
            Site construido para armazenar todos os seus projetos, sejam eles de
            qualquer tipo.
          </p>
        </section>
        <div>
          <section>
            <h6>Tecnologias usadas</h6>
            <ul>
              {techs.map((item) => (
                <li key={item.name}>
                  <a target="_blank" href={item.slug} rel="noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h6>Links Rápidos</h6>
            <ul>
              {fastLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.slug}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </Container>
  );
}
