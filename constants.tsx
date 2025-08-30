import React from 'react';
import type { SocialLink, Skill, Project } from './types';
import emailIcon from './src/icons/email.png';
import whatsappIcon from './src/icons/phone.png';
import linkedinIcon from './src/icons/linkedin.png';
import telegramIcon from './src/icons/telegram.png';


export const socialLinks: SocialLink[] = [
    { 
        name: 'LinkedIn', 
        url: 'https://www.linkedin.com/in/crismagalhaez/', 
        icon: <img src={linkedinIcon} alt="Linkedin Icone" className="w-10 h-10" />
    },
    { 
        name: 'Email', 
        url: 'https://mail.google.com/mail/?view=cm&fs=1&to=criscriacao@gmail.com', 
        icon: <img src={emailIcon} alt="Email Icone" className="w-10 h-10" />
    },
    { 
        name: 'Whatsapp', 
        url: 'https://wa.me/55618212819', 
        icon: <img src={whatsappIcon} alt="Whatsapp Icone" className="w-10 h-10" />
    },
    { 
        name: 'Telegram', 
        url: 'https://t.me/Cris_720', 
        icon: <img src={telegramIcon} alt="Telegram Icone" className="w-10 h-10" />
    },
];

export const skillsData: Skill[] = [
    {
        title: 'Gestão de mídias sociais',
        description: 'Estratégias completas para redes sociais, criação de conteúdo e engajamento de audiência.'
    },
    {
        title: 'Copywriting',
        description: 'Textos persuasivos que convertem, desde posts até campanhas publicitárias completas.'
    },
    {
        title: 'Design Gráfico',
        description: 'Criação visual impactante para campanhas, posts e materiais promocionais.'
    },
    {
        title: 'E-comerce Manager',
        description: 'Gestão completa de lojas online, otimização de vendas e experiência do cliente.'
    }

];

export const projectsData: Project[] = [
    {
        title: 'Veluto',
        description: 'Estratégia de conteúdo e mídia paga para o lançamento do produto Y. Alcançamos 2 milhões de impressões e um aumento de 300% em seguidores no primeiro mês.',
        items: [
            './src/veluto/1.png',
            './src/veluto/2.png',
            './src/veluto/3.png',
            './src/veluto/4.png',
            './src/veluto/5.png',
            './src/veluto/6.png',
            './src/veluto/7.png',
            './src/veluto/8.png',
            './src/veluto/9.png',
            './src/veluto/10.png',
            './src/veluto/11.png',
            './src/veluto/12.png',
            './src/veluto/13.png',
            './src/veluto/14.png',
            './src/veluto/15.png',
            './src/veluto/16.png',
            './src/veluto/17.png',
            './src/veluto/18.png',
            './src/veluto/19.png',
            './src/veluto/20.png',
        ],
        aspectRatio: 'horizontal'
    },
    {
        title: 'TOR3',
        description: 'Condução completa do processo de rebranding, incluindo pesquisa de mercado, desenvolvimento de novo logo, manual de marca e materiais de comunicação.',
        items: [
            './src/tor3/1.jpg',
            './src/tor3/2.jpg',
            './src/tor3/3.jpg',
            './src/tor3/4.jpg',
            './src/tor3/5.jpg',
        ],
        aspectRatio: 'square'
    },
    {
        title: 'Otimização de SEO - E-commerce W',
        description: 'Projeto de SEO técnico e de conteúdo que resultou em um aumento de 70% no tráfego orgânico e a conquista da primeira posição para 15 palavras-chave estratégicas.',
        items: [
            './src/post-promocao.jpg'
        ],
        aspectRatio: 'vertical'
    },
    {
        title: 'Otimização de SEO - E-commerce W',
        description: 'Projeto de SEO técnico e de conteúdo que resultou em um aumento de 70% no tráfego orgânico e a conquista da primeira posição para 15 palavras-chave estratégicas.',
        items: [
            './src/post-dia-das-mulheres.png'
        ],
        aspectRatio: 'square'
    }
];