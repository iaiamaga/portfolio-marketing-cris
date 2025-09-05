import React from 'react';
import type { SocialLink, Skill, Project } from './types';
import emailIcon from './dist/icons/email.png';
import whatsappIcon from './dist/icons/phone.png';
import linkedinIcon from './dist/icons/linkedin.png';
import telegramIcon from './dist/icons/telegram.png';


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
            './dist/veluto/1.png',
            './dist/veluto/2.png',
            './dist/veluto/3.png',
            './dist/veluto/4.png',
            './dist/veluto/5.png',
            './dist/veluto/6.png',
            './dist/veluto/7.png',
            './dist/veluto/8.png',
            './dist/veluto/9.png',
            './dist/veluto/10.png',
            './dist/veluto/11.png',
            './dist/veluto/12.png',
            './dist/veluto/13.png',
            './dist/veluto/14.png',
            './dist/veluto/15.png',
            './dist/veluto/16.png',
            './dist/veluto/17.png',
            './dist/veluto/18.png',
            './dist/veluto/19.png',
            './dist/veluto/20.png',
        ],
        aspectRatio: 'horizontal'
    },
    {
        title: 'TOR3',
        description: 'Condução completa do processo de rebranding, incluindo pesquisa de mercado, desenvolvimento de novo logo, manual de marca e materiais de comunicação.',
        items: [
            './dist/tor3/1.jpg',
            './dist/tor3/2.jpg',
            './dist/tor3/3.jpg',
            './dist/tor3/4.jpg',
            './dist/tor3/5.jpg',
        ],
        aspectRatio: 'square'
    },
    {
        title: 'Otimização de SEO - E-commerce W',
        description: 'Projeto de SEO técnico e de conteúdo que resultou em um aumento de 70% no tráfego orgânico e a conquista da primeira posição para 15 palavras-chave estratégicas.',
        items: [
            './dist/post-promocao.jpg'
        ],
        aspectRatio: 'vertical'
    },
    {
        title: 'Otimização de SEO - E-commerce W',
        description: 'Projeto de SEO técnico e de conteúdo que resultou em um aumento de 70% no tráfego orgânico e a conquista da primeira posição para 15 palavras-chave estratégicas.',
        items: [
            './dist/post-dia-das-mulheres.png'
        ],
        aspectRatio: 'square'
    }
];