import React from 'react';
import { socialLinks } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center mb-56">
      <div className="mb-16 flex justify-center">
        <img
          className="h-40 w-40 rounded-full object-cover"
          style={{
            boxShadow: '8px 8px 16px #d1d9e6, -8px -8px 16px #d1ab2d',
          }}
          src="../dist/cris.jpeg"
          alt="Foto de perfil"
        />
      </div>
      <div className="text-center">
        <h1 className="title-primary text-4xl md:text-5xl font-sc text-yellow-900 mb-6">Cristiane Magalhães</h1>
        <h2 className="text-xl md:text-2xl font-display text-neutral-500 mb-24 max-w-3x1 mx-auto">
          Especialista em Marketing Digital e Mídias Sociais | Gestão de E-commerce. Da criação de campanhas ao copywriting persuasivo, combino criatividade e análise de dados</h2>

        <p className="text-base text-zinc-500 mb-24 max-w-2xl mx-auto"> 
          
         Seja muito bem-vindo(a) ao meu portfólio. Conheça a minha trajetória: Profissional de Comunicação Social com mais de 15 anos de experiência, atuação voltada ao marketing digital, mídias sociais e e-commerce. Sou uma profissional versátil e orientada a resultados.

          Especialista em criar estratégias que conectam marcas ao público, combinando criatividade e análise de dados para gerar resultados reais. Domínio em gestão de campanhas, copywriting e otimização de vendas online.

          Reconhecida pela proatividade e foco em performance, transformo ideias em ações que impulsionam o crescimento e a relevância das marcas.
        </p>
        <div className="flex justify-center mt-12 space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="group p-3 rounded-full transition-all duration-300"
              style={{
                boxShadow: 'inset 36px 36px 10px #d1d9e6, inset -6px -6px 10px #ffffff',
              }}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
