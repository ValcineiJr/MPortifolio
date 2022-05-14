import { useEffect, useState } from 'react';

import { Header } from '@/components/Header';
import { useScroll } from '@/hooks/useScroll';

import { MdScreenshot } from 'react-icons/md';
import { IoIosSwitch } from 'react-icons/io';
import { GiPayMoney } from 'react-icons/gi';
import { FcGoogle } from 'react-icons/fc';

import { Container, CardBody } from '@/styles/pages/home';
import { useTheme } from 'styled-components';
import Image from 'next/image';
import { Footer } from '@/components/Footer';

export default function Home() {
  const { scrollY } = useScroll();
  const [animated, setAnimated] = useState(true);
  const { colors } = useTheme();

  const features = [
    {
      id: `1`,
      title: `100% Responsivo`,
      description: `Editar e personalizar de forma rápida.`,
      icon: MdScreenshot,
    },
    {
      id: `2`,
      title: `Theme Switcher`,
      description: `Se você preferir o escurinho, não tem problema.`,
      icon: IoIosSwitch,
    },
    {
      id: `3`,
      title: `100% Gratuito`,
      description: `Pode utilizar a vontade, é de graça!`,
      icon: GiPayMoney,
    },
  ];

  useEffect(() => {
    setAnimated(false);
  }, []);

  const Card = () => (
    <CardBody>
      <p className="comment">
        “You made it so simple. My new site is so much faster and easier to work
        with than my old site. I just choose the page, make the change and click
        save.
      </p>
      <div className="footer">
        <Image
          src="https://github.com/valcineijr.png"
          width={43}
          height={43}
          alt=""
        />
        <div className="user-info">
          <h5>Valcinei Jr</h5>
          <span>Programador</span>
        </div>
      </div>
    </CardBody>
  );

  return (
    <>
      <Header />
      <Container scroll={scrollY} animated={animated} setAnimated={setAnimated}>
        <section className="intro">
          <h6>Apresente seus trabalhos</h6>
          <h1>Faça seu portifólio de forma rápida e fácil.</h1>
          <p>Seu novo jeito de construir portfólios.</p>
          <p className="rating-text">Utilizado por 2 usuários</p>
        </section>

        <section className="features">
          {features.map((item) => (
            <div key={item.id} className="box">
              <item.icon color={colors.primary} size={34} />
              <div className="info">
                <h3 className="title">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="show-case">
          <div className="wrapper">
            <div className="image">
              <Image
                width={600}
                height={600}
                placeholder="blur"
                blurDataURL="https://media.giphy.com/media/Dh5q0sShxgp13DwrvG/giphy.gif"
                src="https://media.giphy.com/media/Dh5q0sShxgp13DwrvG/giphy.gif"
                alt=""
              />
            </div>

            <div className="information">
              <h6>Design é tudo</h6>
              <h2>Apresente seu portifólio dessa forma.</h2>
              <p>Projetado para facilitar a criação de um portifólio.</p>
              <p>Quem pode usar? Qualquer um mesmo, basta criar sua conta.</p>

              <button>
                <FcGoogle size={30} /> Entrar com gmail
              </button>
            </div>
          </div>
        </section>

        <section className="feedbacks">
          <div className="description">
            <h6>Feedbacks</h6>
            <h1>Mais de 2 usuários comentaram.</h1>
            <p>
              Alguns comentários de nossas comunidade e o que eles acharam da
              experiência.
            </p>
          </div>

          <div className="grid">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <Footer />
      </Container>
    </>
  );
}
