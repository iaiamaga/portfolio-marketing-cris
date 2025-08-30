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
        title: 'Campanha de Lançamento - Marca X',
        description: 'Estratégia de conteúdo e mídia paga para o lançamento do produto Y. Alcançamos 2 milhões de impressões e um aumento de 300% em seguidores no primeiro mês.',
        items: [
            'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop'
        ],
        aspectRatio: 'horizontal'
    },
    {
        title: 'Rebranding de Identidade Visual - Empresa Z',
        description: 'Condução completa do processo de rebranding, incluindo pesquisa de mercado, desenvolvimento de novo logo, manual de marca e materiais de comunicação.',
        items: [
            'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1586997143482-105a12a5a51a?q=80&w=1932&auto=format&fit=crop'
        ],
        aspectRatio: 'horizontal'
    },
    {
        title: 'Otimização de SEO - E-commerce W',
        description: 'Projeto de SEO técnico e de conteúdo que resultou em um aumento de 70% no tráfego orgânico e a conquista da primeira posição para 15 palavras-chave estratégicas.',
        items: [
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1554224155-8d044b40dd68?q=80&w=2070&auto=format&fit=crop'
        ],
        aspectRatio: 'horizontal'
    }
];